<template>
  <div class="clearAllcontainer shadow">
    <span class="claarAllBtn" v-on:click="clearAllItem">Clear All</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations(['clearAllItem']),
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
