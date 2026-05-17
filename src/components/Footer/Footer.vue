<script setup>
const logo = new URL('@/assets/images/logo-credocheck.png', import.meta.url).href
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <span class="brand-name">CredoCheck</span>
      </div>
      <nav class="footer-nav" aria-label="Footer Navigation">
        <router-link to="/" class="footer-link">Home</router-link>
        <router-link to="/about" class="footer-link">Über uns</router-link>
        <router-link to="/pricing" class="footer-link">Preise</router-link>
        <router-link to="/contact" class="footer-link">Kontakt</router-link>
        <router-link to="/license" class="footer-link">Lizenz</router-link>
        <router-link to="/privacy" class="footer-link">Datenschutz</router-link>
        <router-link to="/impressum" class="footer-link">Impressum</router-link>
        <router-link to="/accessibility-statement" class="footer-link">Barrierefreiheit</router-link>
      </nav>
      <div class="footer-meta">
        <span>© 2026 CredoCheck</span>
        <span class="footer-sep">|</span>
        <a href="mailto:hello@credocheck.example" class="footer-link">hello@credocheck.example</a>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "./Footer.scss";
</style>
