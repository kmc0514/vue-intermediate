<template>
  <div class="input_box shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="add_container" v-on:click="addTodo">
      <i class="fas fa-plus add_btn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo: function () {
      console.log(this.newTodoItem);
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
      this.clearInput();
    },
    clearInput: function () {
      this.newTodoItem = "";
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}

.input_box {
  background: white;
  height: 56px;
  line-height: 56px;
  border-radius: 5px;
}

.input_box input {
  border-style: none;
  font-size: 1rem;
}

.add_container {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.add_btn {
  color: white;
  vertical-align: middle;
}
</style>