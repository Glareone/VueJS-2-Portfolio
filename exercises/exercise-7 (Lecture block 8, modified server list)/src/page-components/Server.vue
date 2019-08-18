<template>
  <div>
    <p>Id: {{ id }}. Current Status: {{ status }}</p>
    <button @click="reloadServer">Reload Server</button>
  </div>
</template>

<script>
  import { eventBusUpdateServerStatus } from '../main';

  export default {
    name: 'Server',
    props: {
      id: Number,
      status: String,
    },
    methods: {
      reloadServer() {
        eventBusUpdateServerStatus.updateServerStatus(this.id, 'Server is reloading...');
        setTimeout(() => {
          eventBusUpdateServerStatus.updateServerStatus(this.id, 'Normal');
        }, 3000);
      }
    }
  }
</script>

<style scoped>

</style>