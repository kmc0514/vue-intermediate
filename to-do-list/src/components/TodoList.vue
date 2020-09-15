<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todo, index) in propsdata" v-bind:key="todo.item">
        <i
          class="fas fa-check"
          v-bind:class="{check_btn_completed: todo.completed}"
          v-on:click="toggleComplete(todo, index)"
        ></i>
        <span v-bind:class="{text_completed: todo.completed}">{{todo.item}}</span>
        <span class="remove_btn" v-on:click="remove_todos(todo, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    remove_todos: function (todo, index) {
      this.$emit("removeItem", todo, index);
    },
    toggleComplete: function (todo, index) {
      this.$emit("toggleTodo", todo, index);
    },
  },
};
</script>

<style scoped>
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

/* 리스트아이템 트렌지션 효과 */

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>