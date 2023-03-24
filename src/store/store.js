import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // use: vue의 plugin 기능, vue를 사용하는 모든 영역(전역, global functionality)에 특정 기능을 추가하고 싶을 때 사용하는 메서드

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  mutations: {
    addOneItem(state, payload) {
      const obj = { completed: false, item: payload.todoItem };
      localStorage.setItem(payload.todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed =
        !state.todoItems[payload.index].completed;
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(
        payload.todoItem.item,
        JSON.stringify(payload.todoItem)
      );
    },
    clearAllItem(state) {
      localStorage.clear();
      state.todoItems.splice(0);
    },
  },
});
