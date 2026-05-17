<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const mobileMenuOpen = ref(false)
function toggleMenu(){ mobileMenuOpen.value = !mobileMenuOpen.value }
function closeMenu(){ mobileMenuOpen.value = false }
const logo = new URL('@/assets/images/logo-credocheck.png', import.meta.url).href
</script>

<template>
  <header role="banner">
    <nav role="navigation" aria-label="Hauptnavigation">
      <div class="logo">
        <img :src="logo" alt="CredoCheck" class="logo-img" />
        <span>CredoCheck</span>
      </div>

      <button
        class="menu-toggle"
        @click="toggleMenu"
        :aria-expanded="mobileMenuOpen"
        aria-controls="primary-navigation"
        aria-label="Navigation umschalten"
      >
        <span class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <ul id="primary-navigation" class="nav-menu" :class="{ active: mobileMenuOpen }">
        <li>
          <router-link to="/" :class="[{ 'router-link-exact-active': route.path === '/' }, 'home']" @click="closeMenu">Home</router-link>
        </li>
        <li>
          <router-link to="/about" :class="[{ 'router-link-exact-active': route.path.startsWith('/about') }, 'about']" @click="closeMenu">Über uns</router-link>
        </li>
        <li>
          <router-link to="/pricing" :class="[{ 'router-link-exact-active': route.path.startsWith('/pricing') }, 'pricing']" @click="closeMenu">Preise</router-link>
        </li>
        <li>
          <router-link to="/contact" :class="[{ 'router-link-exact-active': route.path.startsWith('/contact') }, 'contact']" @click="closeMenu">Kontakt</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import "./Header.scss";
</style>