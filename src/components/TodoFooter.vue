<template>
  <div class="clearAllcontainer shadow">
    <span class="claarAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$store.commit('clearAllItem');
    },
  },
};
</script>

<style scoped>
.clearAllcontainer {
  width: 8rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.claarAllBtn {
  color: #e20303;
  /* 추가 */
  display: block;
}
</style>
