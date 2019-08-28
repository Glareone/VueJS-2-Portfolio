<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Q Value: {{ $route.query.q }}</p>
    <div style="height: 700px"></div>
    <!-- to demonstrate how work scrolling to hash tag "data" http://localhost:8080/user/2/edit?locale=en&q=100#data-->
    <p id="data">Extra data to test # for redirecting to this place.</p>
  </div>
</template>