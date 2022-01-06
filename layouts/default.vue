<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
// import Navbar from '~/components/Navbar'
if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
}

export default {
  components: {
    // Navbar
  }
}
</script>