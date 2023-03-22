<template>
  <div class="inputBox shadow">
    <div class="inputContainer">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    </div>
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newTodoItem: '',
    };
  },
  methods: {
    addTodo: function () {
      // 저장하는 로직
      if (this.newTodoItem !== '') {
        var obj = { completed: false, item: this.newTodoItem };
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    clearInput: function () {
      this.newTodoItem = '';
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  display: flex;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  background: white;
}
.inputBox .inputContainer {
  display: flex;
  width: 100%;
}
.inputBox input {
  width: 100%;
  padding: 0 12px;
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
