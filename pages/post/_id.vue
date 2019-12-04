<template>
  <div>
    <div class="max-w-xl md:max-w-3xl xl:max-w-4xl mx-auto text-center px-6 py-10 md:py-32 border-b border-gray-300">
      <section>
        <Post />
      </section>
    </div>
  </div>
</template>
<script>
import Post from '~/components/Post'
export default {
  components: {
    Post
  },
  created () {
    console.log('test' + process.env.BACKEND_URL)
  }
}
</script>
