<template>
  <div class="logs">
    <div v-if="serverStatusLogs.length === 0">
      <p>Server Log is empty</p>
    </div>
    <div v-else v-for="serverStatus in serverStatusLogs" class="logs__element">
      <p> server Id: {{ serverStatus.id }}</p>
      <p> server Status: {{ serverStatus.status }}</p>
    </div>
  </div>
</template>

<script>
  import { eventBusUpdateServerStatus } from '../main';

  export default {
    data: function() {
      return {
        serverStatusLogs: []
      }
    },
    created() {
      eventBusUpdateServerStatus.$on('updateServerStatus', (data) => {
        this.serverStatusLogs.push(data);
      });
    }
  }
</script>

<style>
  .logs {
    padding-top: 16px;
  }
  .logs__element {
    border: solid darkgrey 1px;
  }
</style>
