<template>
  <div>
    <main>
      <div>
        <ModePicker />
      </div>
      <header>
        <div
          class="max-w-xl md:max-w-3xl xl:max-w-4xl mx-auto text-center px-6 py-10 md:py-32 border-b border-gray-300"
        >
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-display mb-1">
            <a>Pergi.Jauh</a>
          </h1>
        </div>
      </header>
      <section>
        <ListPost />
      </section>
    </main>
  </div>
</template>

<script>
import ListPost from "~/components/ListPost";
import ModePicker from "~/components/ModePicker";
export default {
  components: {
    ListPost,
    ModePicker
  }
};
</script>
