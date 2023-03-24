<template>
  <header>
    <h1 @click="double = double * 2">TODO it!</h1>
    <div>{{ num }}</div>
    <div>{{ double }}</div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      num: 5,
    };
  },
  computed: {
    double: {
      get() {
        return this.num * 2;
      },
      set(value) {
        this.num = value / 2;
      },
    },
  },
};
</script>

<style scoped>
h1 {
  color: #2f3b52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>
