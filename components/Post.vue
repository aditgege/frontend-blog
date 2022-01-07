<template>
  <article>
    <div class="mx-auto max-w-3xl px-6">
      <div class="py-4">
        <h2 class="text-3xl sm:text-4xl leading-tight font-display mb-1 sm:mb-3 text-left">
          <a class="text-black">{{ article.title }}</a>
        </h2>
        
        <!-- <p
          v-html="$md.render(article.content)"
          class="font-content text-left leading-normal text-gray-700 lg:text-lg sm:text-sm px-2 sm:px-4 md:px-10"
        /> -->
        <nuxt-content :document="article" />
        <div class="md:text-right mt-5 sm:text-center">
          <small class="text-gray-700 text-md">{{ formatedDate(article.published_at) }} &nbsp;•</small>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import moment from 'moment'
export default {
  data: () => ({
    article: {}
  }),
  // async asyncData({ $content, params, error }) {
  //   let article;
  //   try {
  //     article = await $content("blog", params.slug).fetch();
  //     console.log(article)
  //     // OR const article = await $content(`articles/${params.slug}`).fetch()
  //   } catch (e) {
  //     error({ message: "Blog Post not found" });
  //   }

  //   return {
  //     article,
  //   };
  // },
  methods: {

    async getArticle () {
      const article = await this.$content('blog', this.$route.params.slug).fetch();

      this.article = article
    },
    formatedDate (date) {
      return moment(date).format('DD MMMM, YYYY')
    },
    formatTimeToRead (time) {
      return time + 'min read'
    },
    convertString (string) {
      return string.toString()
    }
  },
}
</script>
