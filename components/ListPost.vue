<template>
  <article>
    <div class="mx-auto max-w-3xl px-6">
      <div class="py-8 sm:py-20 border-b border-gray-300" v-for="article in articles" :key="article.index">
        <header class="mb-8">
          <nuxt-link :to="'/post/'+article.id">
            <h2 class="text-3xl sm:text-4xl leading-tight font-display mb-1 sm:mb-2 text-center">
            <a class="text-black">{{article.title }}</a>
          </h2>
            <p class="font-content leading-normal text-black text-3xl md:text-md sm:text-sm px-2 sm:px-4 md:px-10" v-html="excerpt(article.content, 150, ' ...')"></p>
          </nuxt-link>
            <small class="text-left text-gray-700 text-md px-2 pt-3 sm:px-4 md:px-10">{{ formatedDate(article.published_at)}} &nbsp;•&nbsp;{{ formatTimeToRead(article.timeto_read)}} </small>
        </header>
      </div>
    </div>
  </article>
</template>
<script>
import moment from 'moment'
import articlesQuery from '~/apollo/queries/articles/articles'
export default {
  data: () => ({
    articles: []
  }),
  methods: {
    excerpt (post, length, clamp) {
      if (post.excerpt) {
        return post.excerpt
      }
      length = length || 280
      clamp = clamp || ' ...'
      const text = post.replace(/<pre(.|\n)*?<\/pre>/gm, '').replace(/<[^>]+>/gm, '')
      return text.length > length ? `${text.slice(0, length)}${clamp}` : text
    },
    formatedDate (date) {
      return moment(date).format('DD MMMM, YYYY')
    },
    formatTimeToRead (time) {
      return time + ' min read'
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery
    }
  }
}
</script>
