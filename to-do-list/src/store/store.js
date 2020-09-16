import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          let itemObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
          arr.push(itemObj);
        }
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    headerText: "to do it",
    todoItems: storage.fetch(),
  },
  mutations: {
    addOneItem(state, value) {
      const obj = {
        completed: false,
        item: value,
      };
      localStorage.setItem(value, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeTodo(state, todoInfo) {
      localStorage.removeItem(todoInfo.todo.item);
      state.todoItems.splice(todoInfo.index, 1);
    },
    toggleComplete(state, todoInfo) {
      state.todoItems[todoInfo.index].completed = !state.todoItems[
        todoInfo.index
      ].completed;
      localStorage.removeItem(todoInfo.todo.item);
      localStorage.setItem(todoInfo.todo.item, JSON.stringify(todoInfo.todo));
    },
    clearList(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  },
});
