<script setup>

</script>

<template>
  <header role="banner">
    <nav role="navigation" aria-label="Hauptnavigation">
      <div class="logo">
        <div class="logo-icon">⚡</div>
        <span>FlowTask</span>
      </div>

      <ul class="nav-menu" :class="{ active: mobileMenuOpen }">
        <li>
          <a href="#home" class="home" aria-current="page">
            Home1
          </a>
        </li>
        <li>
          <a href="#about" class="about" aria-current="page">
            Über uns
          </a>
        </li>
        <li>
          <a href="#contact" class="contact" aria-current="page">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

</style>