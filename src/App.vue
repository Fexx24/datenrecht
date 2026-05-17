<script setup>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import CookieConsent from '@/components/CookieConsent/CookieConsent.vue'
</script>

<template>
  <Header/>
  <main>
    <router-view />
  </main>
  <Footer/>
  <CookieConsent />
</template>

<style scoped>

</style>
