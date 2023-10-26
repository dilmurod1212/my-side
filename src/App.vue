<template>
  <div class="font-montserrat">
    <img
      src="/images/bg-2.jpg"
      alt=""
      class="w-full h-screen object-cover fixed -z-20"
    />
    <div class="w-full h-screen fixed left-0 top-0 bg-black/40 -z-10"></div>
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style lang="scss">
$gold: #ffbd33;
.router-link-exact-active {
  color: white;
  border-bottom: 2px solid $gold;
}
.home {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("/images/bg-2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
