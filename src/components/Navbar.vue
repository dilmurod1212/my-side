<template>
  <div class="flex gap-4 max-md:hidden">
    <router-link
      v-for="el in navLinks"
      :key="el.id"
      :to="el.path"
      class="text-gray-400 py-2 border-b border-b-transparent item"
      ><h2 class="capitalize">{{ el.title }}</h2></router-link
    >
  </div>
  <div @click="state = !state" class="hidden max-md:block">
    <i class="fas fa-bars text-xl"></i>
  </div>
  <div
    v-if="state"
    class="fixed p-4 left-0 top-0 z-40 h-screen w-full bg-black/90"
  >
    <div class="border p-4 border-white/40 h-full w-full">
      <router-link
        v-for="el in navLinks"
        :key="el.id"
        :to="el.path"
        class="text-gray-400 py-2 border-b border-b-transparent item"
        ><h2 class="capitalize">{{ el.title }}</h2></router-link
      >
    </div>
  </div>
</template>

<script setup>
import { navLinks } from "../data/navLinks";
import { ref } from "vue";
const state = ref(false);
</script>

<style lang="scss" scoped>
$gold: #ffbd33;
.item:hover {
  color: white;
  // border-bottom: 2px solid $gold;
  transition: all 0.3s;
}
</style>
