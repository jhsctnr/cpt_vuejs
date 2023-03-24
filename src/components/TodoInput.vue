<template>
  <div class="inputBox shadow">
    <div class="inputContainer">
      <input type="text" v-model="newTodoItem" v-on:keypress.enter="addTodo" />
    </div>
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>

    <TodoModal v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
    -->
      <h3 slot="header">
        경고!
        <i
          class="fa-solid fa-xmark closeModalBtn"
          @click="showModal = false"
        ></i>
      </h3>

      <span slot="body"> 값을 입력하셔야해유 </span>
    </TodoModal>
  </div>
</template>

<script>
import TodoModal from './common/TodoModal.vue';

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      // 저장하는 로직
      if (this.newTodoItem !== '') {
        // this.$emit('addTodoItem', this.newTodoItem);
        this.$store.commit('addOneItem', { todoItem: this.newTodoItem.trim() });
        this.clearInput();
      } else {
        this.showModal = true;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
  },
  components: {
    TodoModal,
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
.closeModalBtn {
  color: #42b983;
}
</style>
