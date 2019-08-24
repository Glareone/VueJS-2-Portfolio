<template>
  <div class="container">
    <form v-if="!isFormSubmitted">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <label for="fullName">Full Name</label>
          <input type="text" class="form-control" id="fullName" v-model="defaultInputFullName">

          <!-- Mail -->
          <label for="mail">Mail</label>
          <input type="text" class="form-control" id="mail" v-model.trim="mail">
          <!-- Password -->
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" v-model.trim="password">
          <!-- Store Data? Yes/No -->
          <input
              type="checkbox"
              id="sendInfomail"
              v-model="isDataStored"
          >
          Is Data Stored

          <hr>

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
          <label>This Control works on unfocus from input fields</label>
          <full-name-control @change="updateCustomInputFullName" />

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->
          <hr>

          <label for="submitButton">Submit button is enabled after filling all fields</label>
          <hr>
          <button
              id="submitButton"
              class="btn btn-primary"
              @click.prevent="submitted"
              :disabled="!defaultInputFullName || !customInputFullName || !mail || !password"
          >
            Submit!
          </button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="isFormSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name (Default Control): {{ defaultInputFullName }}</p>
            <p>Full Name (Custom control): {{ customInputFullName }}</p>
            <p>Mail: {{ mail }}</p>
            <p>Password: {{ password }}</p>
            <p>Store in Database?: {{ isDataStored }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FullNameControl from './components/FullNameControl.vue';

  export default {
    data() {
      return {
        defaultInputFullName: null,
        customInputFullName: null,
        mail: null,
        password: null,
        isFormSubmitted: false,
        isDataStored: false,
      }
    },
    methods: {
      submitted() {
        this.isFormSubmitted = true;
        setTimeout(() => {
          this.formCleanup();
        }, 4000);
      },
      formCleanup() {
        this.isFormSubmitted = false;
        this.defaultInputFullName = null;
        this.mail = null;
        this.password = null;
        this.isDataStored = false;
      },
      updateCustomInputFullName(value) {
        this.customInputFullName = value;
      }
    },
    components: {
      fullNameControl: FullNameControl
    }
  }
</script>

<style scoped>
</style>
