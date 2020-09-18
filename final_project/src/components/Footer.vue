<template>
  <div id="footer" class="container-fluid d-flex justify-content-between p-2">
    <div>Copyright © 2020 <b>Sleep Sheep</b> All Rights Reserved.</div>
    <div>
      <a href="#" class="text-secondary mr-2">
        <i class="fab fa-github-square"></i>
      </a>
      <a href="#" class="text-secondary mr-2">
        <i class="fas fa-envelope"></i>
      </a>
      <router-link to="/admin" class="text-secondary">
        <i class="fas fa-database"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  i {
    font-size: 1.3rem;
  }
</style>
