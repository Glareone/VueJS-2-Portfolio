<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>

            <!-- NUMBER MODIFIER: Will be updated after unfocus from input
                https://ru.vuejs.org/v2/guide/forms.html#trim
            -->
            <input
                type="text"
                id="email"
                class="form-control"
                v-model.trim="userData.email"
            >
          </div>
          <div class="form-group">
            <label for="password">Password</label>

            <!-- LAZY MODIFIER: Will be updated after unfocus from input
                https://ru.vuejs.org/v2/guide/forms.html#lazy
            -->
            <input
                type="password"
                id="password"
                class="form-control"
                v-model.lazy="userData.password"
            >
          </div>
          <div class="form-group">
            <label for="age">Age</label>

            <!-- NUMBER MODIFIER: Will be updated after unfocus from input
              https://ru.vuejs.org/v2/guide/forms.html#number
            -->
            <input
                type="number"
                id="age"
                class="form-control"
                v-model.number="userData.age"
            >
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea
              id="message"
              rows="5"
              class="form-control"
              v-model="message"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <!-- Pay attention of v-model here. We use v-model with array.
                We could group the data from similar controls like checkboxes in array
                It will add value: SendMail
              -->
              <input
                  type="checkbox"
                  id="sendmail"
                  value="SendMail"
                  v-model="sendMail"
              >
              Send Mail
            </label>
            <label for="sendInfomail">
              <!-- Pay attention of v-model here. We use v-model with array.
                We could group the data from similar controls like checkboxes in array
                It will add value: SendInfoMail
              -->
              <input
                  type="checkbox"
                  id="sendInfomail"
                  value="SendInfoMail"
                  v-model="sendMail"
              >
              Send Info mail
            </label>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <!-- we could simply group radio buttons only use v-model.
             We also could do this with name="group1" in html5 native code
              https://developer.mozilla.org/ru/docs/Web/HTML/Element/Input/radio
              -->
            <input
                type="radio"
                id="male"
                value="Male"
                v-model="gender"
            >
            Male
          </label>
          <!-- we could simply group radio buttons only use v-model.
           We also could do this with name="group1" in html5 native code -->
          <label for="female">
            <input
                type="radio"
                id="female"
                value="Female"
                v-model="gender"
            >
            Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <!-- we could use v-model also on select element. It will be a default value for select and will override :selected prop -->
          <select
              id="priority"
              class="form-control"
              v-model="selectedPriority"
          >
            <!--
                Pay attention on :selected property, we could bind default value like here. Or using v-model like in "select v-model"
                v-model in select overrides :selected property here.
             -->
            <option v-for="priority in priorities" :selected="priority === 'Medium'">
              {{ priority }}
            </option>
          </select>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button
              class="btn btn-primary">Submit!
          </button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Age: {{ userData.age }}</p>
            <!-- white-space: pre allows us to show text with padding in text from text area. Like enter padding -->
            <p style="white-space: pre">Message: {{ message }}</p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="mail in sendMail">{{ mail }}</li>
            </ul>
            <p>Gender: {{ gender }}</p>
            <p>Priority: {{ selectedPriority }}</p>
            <p>Switched:</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    // data: function replacement es6
    data() {
      return {
        userData: {
          email: '',
          password: '',
          age: 30,
        },
        message: 'A new message in Text Area',
        sendMail: [],
        gender: 'Male',
        priorities: ['High', 'Medium', 'Low'],
        selectedPriority: 'High'
      };
    }
  }
</script>

<style>

</style>
