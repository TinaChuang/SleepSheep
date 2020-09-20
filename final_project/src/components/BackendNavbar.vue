<template>
<div id="nav" class="sticky-top shadow-sm">
  <div class="navbar navbar-expand-md navbar-light" style="background-color: #AAC9CE;">
    <router-link class="navbar-brand" to="/admin">
      <img src="@/assets/logo.svg" alt="Sleep-Sheep" title="Sleep-Sheep" style="height: 50px;">
    </router-link>
    <!-- <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#backNavbarNav"
      aria-controls="backNavbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <div id="backNavbarNav" class="navbar-collapse collapse">
      <div class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link ml-md-2" to="/">回前台</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link ml-md-2" to="/admin/products">商品管理列表</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link ml-md-2" to="/admin/orders">訂單管理</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link ml-md-2" to="/admin/coupons">優惠券管理</router-link>
        </li> -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
