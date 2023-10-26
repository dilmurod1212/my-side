<template>
  <div>
    <div class="flex items-center gap-4">
      <p class="max-md:text-sm uppercase opacity-70">{{ descr }}</p>
      <div class="w-[120px] max-md:w-[80px] h-[1px] bg-green-500"></div>
    </div>
    <h2
      class="uppercase text-4xl max-lg:text-3xl max-md:text-xl mt-4 font-bold"
    >
      {{ title }}
    </h2>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({ descr: String, title: String });
</script>

<style lang="scss" scoped></style>
