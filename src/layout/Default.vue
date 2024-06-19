<template>
  <div class="flex flex-col min-h-screen bg-dark">
    <Header />
    <main class="h-full grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
<script setup lang="js">
import Header from "@/components/Header.vue";
</script>
