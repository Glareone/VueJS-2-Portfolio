<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input" :class="{invalid: $v.email.$error}">
          <label for="email">Mail</label>
          <!-- $v exposed from vuelidate package. reserved name like $event.
            using "." we could access to its fields in validations.
            that's why we want to use $v.email. (take a look on validations in vue component below).

            "$touch()" - is a method which automatically exposes by vuelidate package (to connect default behavior with vuelidate).
            @input="$v.email.$touch()" - on any changes
            @blur="$v.email.$touch()" - on leave from input

           -->
          <input
              id="email"
              @blur="$v.email.$touch()"
              type="email"
              v-model="email">
          <!-- will be displayed when field is not empty AND incorrect -->
          <p v-if="!$v.email.email">Please provide a valid email address.</p>
          <!-- will be displayed if it's empty and required -->
          <p v-if="$v.email.$dirty && !$v.email.required">This field should not be empty.</p>
        <!-- to take a look what $v contains <div>{{ $v }}</div> -->
        </div>
        <div class="input" :class="{invalid: $v.age.$error}">
          <label for="age">Your Age</label>
          <input
              id="age"
              @blur="$v.age.$touch()"
              type="number"
              v-model.number="age">
          <!-- params contains all properties and their values of validation object. Each object has his own structure. -->
          <p v-if="!$v.age.minVal">You have to be at least {{ $v.age.$params.minVal.min }} age old.</p>
        </div>
        <div class="input" :class="{invalid: $v.password.$error}">
          <label for="password">Password</label>
          <input
              id="password"
              type="password"
              @blur="$v.password.$touch()"
              v-model="password">
        </div>
        <div class="input" :class="{invalid: $v.confirmPassword.$error}">
          <label for="confirm-password">Confirm Password</label>
          <input
              id="confirm-password"
              type="password"
              @blur="$v.confirmPassword.$touch()"
              v-model="confirmPassword">
        </div>
        <div class="input">
          <label for="country">Country</label>
          <select id="country" v-model="country">
            <option value="usa">USA</option>
            <option value="india">India</option>
            <option value="uk">UK</option>
            <option value="germany">Germany</option>
          </select>
        </div>
        <div class="hobbies">
          <h3>Add some Hobbies</h3>
          <button @click="onAddHobby" type="button">Add Hobby</button>
          <div class="hobby-list">
            <!-- another option: {invalid: $v.hobbyInputs.$each[index].value.$error} - for one of them.
             only $each.$error - means any error in multiple inputs
             -->
            <div
                :key="hobbyInput.id"
                class="input"
                :class="{invalid: $v.hobbyInputs.$each[index].$error}"
                v-for="(hobbyInput, index) in hobbyInputs">
              <label :for="hobbyInput.id">Hobby #{{ index }}</label>
              <!-- GOOD Example of making validation for arrays.
                We added $touch on each element in array.
               -->
              <input
                  :id="hobbyInput.id"
                  type="text"
                  @blur="$v.hobbyInputs.$each[index].value.$touch()"
                  v-model="hobbyInput.value">
              <button @click="onDeleteHobby(hobbyInput.id)" type="button">X</button>
            </div>
          </div>
          <!-- params contains all properties and their values of validation object. Each object has his own structure. -->
          <p v-if="!$v.hobbyInputs.minLen">You have to specify at least {{ $v.hobbyInputs.$params.minLen.min }} of your hobbies.</p>
        </div>
        <p v-if="!$v.hobbyInputs.required">Please add a hobbies</p>
        <!-- custom validation "terms". Pay attention on $invalid instead of $error -->
        <div class="input inline" :class="{invalid: $v.terms.$invalid}">
          <input
              id="terms"
              type="checkbox"
              @change="$v.terms.$touch()"
              v-model="terms"
          >
          <label for="terms">Accept Terms of Use</label>
        </div>
        <div class="submit">
          <!-- disabled if any of input field on form has an error -->
          <button type="submit" :disabled="$v.$invalid">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  // built-in validators: https://vuelidate.netlify.com/#sub-builtin-validators
  import {
    required,
    email,
    numeric,
    minValue,
    minLength,
    sameAs,
    requiredUnless,
  } from 'vuelidate/lib/validators';

  import axios from 'axios';

  export default {
    data() {
      return {
        email: '',
        age: null,
        password: '',
        confirmPassword: '',
        country: 'usa',
        hobbyInputs: [],
        terms: false
      }
    },
    validations: {
      // vuelidate requires that your validation has the same names with fields which they validate
      // if you field named email - validation has to have the same name. Pay attention on data() field "email".
      // (not on id, hobbyInputs is an example).
      // We have to connect them to fields adding @input \ @blur \ @change event to fields.
      email: {
        // is a js object with configuration. we added 2 validators to email field.
        required, // required: required
        email,
        // PAY ATTENTION: CUSTOM SYNC \ ASYNC VALIDATION.
        unique: (value) => {
          if (value === '') {
            // we don't care about empty input. Rule will pass.
            return true;
          }
          // return value !== 'test@test.com' - sync example. Password shouldn't be a 'test@test.com'
          return axios.get(`/users.json?orderBy="email"&equalTo="${value}"`)
            .then(res => {
              console.log(res);
              // if firebase returns empty objects - it means that this email is available.
              return Object.keys(res.data).length === 0;
            });
        }
      },
      age: {
        required,
        numeric,
        minVal: minValue(18) // age is higher than XX. minVal name is up to us.
      },
      password: {
        required,
        minLen: minLength(6)
      },
      // same fields data for 2 fields:
      confirmPassword: {
        sameAs: sameAs('password') // make sure you type the name exactly the same with property name from data().
        // sameAs((vueInstance) => { return vueInstance.password === vueInstance.confirmPassword; })  - second option.
        // sameAs((vueInstance) => { return vueInstance.password + 'b' })  - You could do whatever you want inside function
      },
      // custom validation: terms checkbox is valid if selected country is not Germany.
      terms: {
        required: requiredUnless((vueInstance) => {
          // return true // will always be valid.
          return vueInstance.country !== 'Germany';
        })
      },
      hobbyInputs: {
        // required also works for arrays
        required,
        minLen: minLength(2),
        // pay attention on this prop.
        // every of them has value. Take a look on onAddHobby
        $each: {
          value: {
            required,
            minLen: minLength(5)
          }
        }
      }
    },
    methods: {
      onAddHobby() {
        const newHobby = {
          id: Math.random() * Math.random() * 1000,
          value: ''
        };
        this.hobbyInputs.push(newHobby)
      },
      onDeleteHobby(id) {
        this.hobbyInputs = this.hobbyInputs.filter(hobby => hobby.id !== id)
      },
      onSubmit() {
        const formData = {
          email: this.email,
          age: this.age,
          password: this.password,
          confirmPassword: this.confirmPassword,
          country: this.country,
          hobbies: this.hobbyInputs.map(hobby => hobby.value),
          terms: this.terms
        };
        console.log(formData);

        this.$store.dispatch('signUp', formData);
      }
    }
  }
</script>

<style scoped>
  .signup-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .input.invalid input {
    border: 1px solid red;
    background-color: #ffaf4f;
  }

  .input.invalid label {
    color: red;
  }

  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .hobbies button {
    border: 1px solid #521751;
    background: #521751;
    color: white;
    padding: 6px;
    font: inherit;
    cursor: pointer;
  }

  .hobbies button:hover,
  .hobbies button:active {
    background-color: #8d4288;
  }

  .hobbies input {
    width: 90%;
  }

  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>