<template>
  <div>
    <div id="nav">
      <router-link to="/">回前台</router-link> |
      <router-link to="/admin/products">商品管理列表</router-link> |
      <router-link to="/admin/orders">訂單管理</router-link> ｜
      <!-- <router-link to="/admin/coupons">優惠券管理</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>
