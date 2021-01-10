<template>
  <div id="app">
    <login class="mt-5"/>
  </div>
</template>

<script>
import login from '../src/view/Login.vue'
export default {
  data() {
    return {};
  },
  components: {
    'login': login,
  }
};
</script>

<style scoped>

</style>
