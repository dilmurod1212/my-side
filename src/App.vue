<template>
  <div class="font-montserrat overflow-hidden">
    <img
      src="/images/bg-2.jpg"
      alt=""
      class="w-full h-screen object-cover fixed -z-20"
    />
    <div class="w-full h-screen fixed left-0 top-0 bg-black/40 -z-10"></div>
    <home />
  </div>
</template>

<script setup>
import Home from "@/layout/Home.vue";
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
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

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
