<template>
  <div class="clear_all_container">
    <span class="clear_all_btn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo: function() {
      this.$state.commit("clearList");
    },
  },
};
</script>

<style scoped>
.clear_all_container {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}

.clear_all_btn {
  color: #e20303;
  display: block;
}
</style>
