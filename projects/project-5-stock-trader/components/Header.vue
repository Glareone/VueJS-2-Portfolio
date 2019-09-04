<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
          <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
        </ul>
        <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="endDay">End Day</a></li>
          <li
              class="dropdown"
              :class="{open: isDropdownOpen}"
              @click="isDropdownOpen = !isDropdownOpen">
            <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">
              Save & Load
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu animate slideIn">
              <li><a href="#" @click="saveData">Save Data</a></li>
              <li><a href="#" @click="loadData">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'Header',
    data() {
      return {
        isDropdownOpen: false,
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
    },
    methods: {
      ...mapActions([
        'randomizeStocks',
      ]),
      endDay() {
        this.randomizeStocks();
      },
      saveData() {
        // instead of calling mutations or actions from vuex (because we doesn't mutate any data in vuex store)
        // we will copy data from vuex and pass it to our storage
        // we could create comprehensive http class in this project for this purposes later
        const data = {
          funds: this.$store.getters.funds,
          stockPortfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks,
        };

        // PUT request (because in firebase you will override your data using PUT).
        // json is necessary for firebase. described in http lecture block.
        this.$http.put('data.json', data);
      },
      // instead of saving data - loadData mutates the vuex state and could execute via mutations and actions.
      loadData() {
        //this.$store.action
      },
    }
  }
</script>

<style scoped>
  /* For Bootstrap 3, for Bootstrap 4 use .dropdown.show instead of .dropdown.open */
  .dropdown .dropdown-menu {
    transition: all 0.4s;
    display: block;
    overflow: hidden;
    opacity: 0;
  }

  .dropdown.open .dropdown-menu {
    max-height: 300px;
    opacity: 1;
  }
</style>