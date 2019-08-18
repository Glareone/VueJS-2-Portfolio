<template>
  <div>
    <ul>
      <li class="list-item" v-for="server in servers">
        <server
          :id="server.id"
          :status="server.status"
        />
      </li>
    </ul>
  </div>
</template>

<script>
  import Server from './Server.vue';
  import { eventBusUpdateServerStatus } from '../main';

  export default {
    data: function() {
      return {
        servers: [
          { id: 1, status: 'Normal' },
          { id: 2, status: 'Critical' },
          { id: 3, status: 'Warning' },
          { id: 4, status: 'Not established' },
          { id: 5, status: 'Unknown' },
          { id: 6, status: 'Normal' },
        ]
      }
    },
    components: {
      server: Server
    },
    created() {
      eventBusUpdateServerStatus.$on('updateServerStatus', (data) => {
        const currentServer = this.servers.find(server => server.id === data.id);
        currentServer.status = data.status;
      });
    }
  }
</script>

<style>
    .list-item {
        list-style: none;
        padding: 5px 10px;
        border: 1px solid darkgrey;
    }
</style>
