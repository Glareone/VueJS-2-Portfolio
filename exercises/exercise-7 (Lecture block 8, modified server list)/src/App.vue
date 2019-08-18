<template>
    <div class="app">
        <page-server-status class="page" />
    </div>
</template>

<script>
    import ServerStatusPage from './pages/ServerStatusPage.vue';

    export default {
        components: {
            'page-server-status': ServerStatusPage,
        }
    }
</script>

<!-- scoped means that this styles are applied only for this component and not in the other places -->
<style scoped>
    .app {
        display: grid;
        grid-template-columns: 40px 1fr 40px;
    }
    .page {
        grid-column: 2 / 3;
    }
</style>
