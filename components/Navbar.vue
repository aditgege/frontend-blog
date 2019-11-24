<template>
  <ul class="flex">
    <li class="mr-6"  v-for="menu in menus" :key="menu.index">
      <a class="text-blue-500 hover:text-blue-800" href="#">{{menu.name}}</a>
    </li>
  </ul>
</template>
<script>
import menuQuery from '~/apollo/queries/menu/menus'
export default {
  name: 'Navbar',
  data: () => ({
    menus: []
  }),
  apollo: {
    menus: {
      prefetch: true,
      query: menuQuery
    }
  }
}
</script>
