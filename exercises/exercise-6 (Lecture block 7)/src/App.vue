<template>
    <div>
        <page-server-status />
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

<style>
 .container {
     display: grid;
     grid-template-columns: 1fr 80vw 1fr;
     grid-row-gap: 1.5rem;
     grid-column-gap: 2rem;
 }
</style>
