<template>
  <div>
    <ul>
      <li class="list-item" v-for="index in 5">Server #{{ index }}
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style>
    .list-item {
        list-style: none;
        padding: 5px 10px;
        border: 1px solid darkgrey;
    }
</style>
