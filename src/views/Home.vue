<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">首頁</router-link>
      <button
        class="navbar-toggler shadow-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/products">所有商品</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">購物車</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">登入後台</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container pt-5">
    <router-view></router-view>
  </div>
  <footer class="text-center fixed-bottom bg-dark text-white">
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2021 Copyright : 僅個人作品練習，無商業用途。
    </div>
    <!-- Copyright -->
  </footer>
</template>

<style></style>
<script>
export default {
  name: 'Home',
  data() {
    return {};
  },
};
</script>
