<template>
  <div class="input_box shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="add_container" v-on:click="addTodo">
      <i class="fas fa-plus add_btn"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
      -->
      <h3 slot="header">
        알림
        <i class="close_modal_btn fas fa-times" @click="showModal = false"></i>
      </h3>
      <div slot="body">최소 1글자 이상 입력하세요.</div>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  data: () => {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodoItem !== "") {
        this.$emit("addTodoItem", this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput: function () {
      this.newTodoItem = "";
    },
  },
  components: {
    Modal,
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

.close_modal_btn {
  color: #42b983;
}
</style>