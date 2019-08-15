<template>
  <div>
    <app-server-status v-for="server in 5"></app-server-status>
  </div>
</template>

<script>
  // Home component uses ServerStatus component locally.
  import ServerStatus from './ServerStatus';

  export default {
    components: {
      'app-server-status': ServerStatus // It will be a local component here. Local registration
    }
  }
</script>

<style scoped>

</style>
