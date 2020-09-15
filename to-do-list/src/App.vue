<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList
      v-bind:propsdata="todoItems"
      v-on:removeItem="removeOneItem"
      v-on:toggleTodo="toggleComplete"
    ></TodoList>
    <TodoFooter v-on:clearAll="clearList"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  data: () => {
    return {
      todoItems: [],
    };
  },
  methods: {
    addOneItem: function (item) {
      var obj = {
        completed: false,
        item,
      };
      localStorage.setItem(item, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem: function (todo, index) {
      localStorage.removeItem(todo.item);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function (todo, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todo.item);
      localStorage.setItem(todo.item, JSON.stringify(todo));
    },
    clearList: function () {
      localStorage.clear();
      this.todoItems = [];
    },
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          let itemObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.todoItems.push(itemObj);
        }
      }
    }
  },
};
</script>

<style>
html {
  font-family: "Do Hyeon", sans-serif;
}

body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>