<template>
  <div class="control">
    <label for="firstName">First Name</label>
    <input id="firstName" @change="onChange" v-model="firstName">
    <hr>
    <label for="lastName">Last Name</label>
    <input id="lastName" @change="onChange" v-model="lastName">
  </div>
</template>

<script>
  export default {
    name: 'MyFullNameControl',
    data() {
      return {
        firstName: '',
        lastName: '',
      }
    },
    methods: {
      onChange() {
        if(this.firstName && this.lastName) {
          this.$emit('change', `${this.firstName} ${this.lastName}`);
        }

      }
    }
  }
</script>

<style scoped>
  .control {
    padding: 10px 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  input {
    padding-bottom: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>