<template>
  <article>
    <div class="mx-auto max-w-3xl px-6">
      <div class="py-4" v-for="article in articles" :key="article.index">
        <h2 class="text-3xl sm:text-4xl leading-tight font-display mb-1 sm:mb-3 text-left">
        <a class="text-black font-bold">{{article.title }}</a>
        </h2>
        <p class="font-content text-left leading-normal text-gray-700 lg:text-lg sm:text-sm px-2 sm:px-4 md:px-10" v-html="$md.render(article.content)" ></p>
        </nuxt-link>
        <div class="md:text-right mt-5 sm:text-center">
            <small class="text-gray-700 text-md ">{{ formatedDate(article.published_at)}} &nbsp;• </small>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import moment from 'moment'
import articlesQuery from '~/apollo/queries/articles/article'
export default {
  data: () => ({
    articles: []
  }),
  methods: {
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
