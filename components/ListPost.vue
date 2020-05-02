<template>
  <article>
    <div class="mx-auto max-w-3xl px-6">
      <div
        v-for="article in articles"
        :key="article.index"
        class="border-b border-gray-300 note my-10 shadow-md "
      >
        <div class="mb-8">
          <nuxt-link :to="'/post/'+article.id">
            <div class="">
              <h2 class="text-3xl sm:text-4xl leading-tight font-display mb-3 sm:mb-4 text-center">
                <a class="text-black dark:text-white">{{ article.title }}</a>
              </h2>
              <p
                v-html="excerpt(article.content, 150, ' ...')"
                class="font-content leading-normal text-gray-700 lg:text-lg sm:text-sm px-2 sm:px-4 md:px-10"
              />
            </div>
          </nuxt-link>
        </div>
        <small
          class="text-left text-gray-700 text-md px-2 pt-3 sm:px-4 md:px-10"
        >{{ formatedDate(article.published_at) }} &nbsp;•&nbsp;{{ formatTimeToRead(article.timeto_read) }}</small>
      </div>
    </div>
  </article>
</template>
<script>
import moment from "moment";
import articlesQuery from "~/apollo/queries/articles/articles";
export default {
  data: () => ({
    articles: []
  }),
  methods: {
    excerpt(post, length, clamp) {
      if (post.excerpt) {
        return post.excerpt;
      }
      length = length || 280;
      clamp = clamp || " ...";
      const text = post
        .replace(/<pre(.|\n)*?<\/pre>/gm, "")
        .replace(/<[^>]+>/gm, "");
      return text.length > length ? `${text.slice(0, length)}${clamp}` : text;
    },
    formatedDate(date) {
      return moment(date).format("DD MMMM, YYYY");
    },
    formatTimeToRead(time) {
      return time + " min read";
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery
    }
  }
};
</script>
<style>
.note {
  transition: all 0.3s;
  padding: 25px 25px;
  border-radius: 5px;
  background-color: var(--bg-secondary);
  color: var(--color-secondary);
}
</style>