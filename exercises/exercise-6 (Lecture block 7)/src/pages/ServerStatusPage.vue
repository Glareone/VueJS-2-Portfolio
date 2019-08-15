<template>
    <div class="page">
        <app-header class="header" />
        <hr>
        <div class="info-block">
            <app-servers class="servers-info-block" />
            <app-server-details class="servers-details-block" />
        </div>
        <hr>
        <app-footer class="footer" />
    </div>
</template>

<script>
  import Header from '../page-components/Header.vue';
  import Footer from '../page-components/Footer.vue';
  import Servers from '../page-components/Servers.vue';
  import ServerDetails from '../page-components/ServerDetails.vue';

  export default {
    components: {
      'app-header': Header,
      'app-servers': Servers,
      'app-server-details': ServerDetails,
      'app-footer': Footer
    }
  }
</script>

<!-- scoped means that this styles are applied only for this component and not in the other places -->
<style scoped>
    .page {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    .header {
        display: flex;
        justify-content: center;
        margin: 0 0 50px 0;
        border-bottom: 1px solid darkgrey;

        grid-row: 1 / 2;
        grid-column: 1 / -1;
    }
    .info-block {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: min-content;
        grid-column-gap: 15px;

        grid-row: 2 / 3;
        grid-column: 1 / -1;
    }
    .footer {
        display: flex;
        justify-content: center;
        border-top: 1px solid darkgrey;

        grid-row: 3 / 4;
        grid-column: 1 / -1;
    }
    .servers-info-block {

    }
</style>
