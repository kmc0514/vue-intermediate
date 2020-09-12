<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todoItems" v-bind:key="todo">
        {{todo}}
        <span class="remove_btn" v-on:click="remove_todos(todo, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      todoItems: [],
    };
  },
  methods: {
    remove_todos: function (item, index) {
      localStorage.removeItem(item);
      this.todoItems.splice(index, 1);
    },
  },
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(localStorage.key(i));
        }
      }
    }
  },
};
</script>

<style>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.check_btn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.check_btn_completed {
  color: #b3adad;
}
.text_completed {
  text-decoration: line-through;
  color: #b3adad;
}
.remove_btn {
  margin-left: auto;
  color: #de4343;
}
</style>