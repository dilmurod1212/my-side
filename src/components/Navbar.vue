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
  <div
    v-if="!state"
    @click="state = true"
    class="hidden max-md:block cursor-pointer"
  >
    <i class="fas fa-bars text-2xl"></i>
  </div>
  <div v-else @click="state = false" class="hidden max-md:block cursor-pointer">
    <i class="fas fa-close relative z-50 text-2xl"></i>
  </div>
  <div
    :class="{ '!translate-x-0 transition-all': state }"
    class="translate-x-full transition-all container flex fixed left-0 top-0 z-40 h-screen w-screen bg-black/90"
  >
    <div
      class="flex flex-col items-start justify-start border border-white/40 p-4 h-[75%] my-auto w-full"
    >
      <router-link
        v-for="el in navLinks"
        :key="el.id"
        :to="el.path"
        class="text-gray-400 py-1 mb-2 border-b border-b-transparent item"
        ><h2 class="capitalize">{{ el.title }}</h2></router-link
      >
    </div>
  </div>
</template>

<script setup>
import { navLinks } from "../data/navLinks";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const state = ref(false);
watch(
  () => route.path,
  () => {
    console.log(state.value);
    state.value = false;
    if (state.value) {
      document.body.style.overflowY = "hidden";
    }
  },
  { deep: true }
);
watch(
  () => state.value,
  () => {
    if (state.value) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
$gold: #ffbd33;
.item:hover {
  color: white;
  // border-bottom: 2px solid $gold;
  transition: all 0.3s;
}
</style>
