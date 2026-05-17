<script setup>
import { ref } from 'vue'
const heroImg = new URL('@/assets/images/verification-stock.jpg', import.meta.url).href

// Testimonials Daten
const testimonials = [
  {
    quote: 'CredoCheck hat unseren Verifikationsprozess um 80% beschleunigt. Die Transparenz der Prüfprotokolle ist beeindruckend.',
    author: 'Sarah Mueller',
    company: 'Digital Media AG'
  },
  {
    quote: 'Endlich ein System, das wir unseren Kunden mit gutem Gewissen empfehlen können. DSGVO-konform und zuverlässig.',
    author: 'Thomas Keller',
    company: 'TrustVerify GmbH'
  },
  {
    quote: 'Die API-Integration war einfach und die technische Unterstützung exzellent. Sehr zu empfehlen.',
    author: 'Jessica Rodriguez',
    company: 'ContentAuth Solutions'
  }
]

// Features mit Beschreibungen
const features = [
  {
    title: 'Bilder verifizieren',
    description: 'Prüfen Sie Authentizität und Herkunft von Bildmaterial mit modernen Algorithmen'
  },
  {
    title: 'Videos & Audio validieren',
    description: 'Umfassende Analyse von Video- und Audiodateien auf Manipulationen'
  },
  {
    title: 'PDF-Dokumente prüfen',
    description: 'Sichere Verifikation von Dokumenten mit nachvollziehbaren Prüfprotokollen'
  },
  {
    title: 'Transparente Berichte',
    description: 'Detaillierte, verständliche Prüfberichte für Ihre Kunden'
  },
  {
    title: 'Datenschutz-konform',
    description: 'DSGVO-konformität als Standard'
  },
  {
    title: 'Einfache Integration',
    description: 'Moderne API und Dokumentation für schnelle Implementierung'
  }
]

// Process Steps
const processSteps = [
  {
    title: 'Hochladen',
    description: 'Laden Sie Bilder, Videos oder PDF-Dateien hoch'
  },
  {
    title: 'Analysieren',
    description: 'Unser System führt automatisierte Verifikation durch'
  },
  {
    title: 'Bericht',
    description: 'Erhalten Sie detaillierte Prüfprotokolle und Ergebnisse'
  },
  {
    title: 'Freigeben',
    description: 'Teilen Sie verifizierte Dateien mit Ihren Kunden'
  }
]
</script>

<template>
  <main class="home-page">

    <!-- Hero Section with SVG Background -->
    <section class="hero">
      <div class="hero-background" :style="{ backgroundImage: `url(${heroImg})` }">
      </div>

      <div class="hero-content">
        <h1>Willkommen bei CredoCheck</h1>
        <p>Digitale Verifikation für Bilder, Videos und PDF-Dateien. Zuverlässig, nachvollziehbar und prüfbar für Ihre Kunden.</p>
        <div class="hero-buttons">
          <router-link to="/about" class="btn btn-primary">Mehr erfahren</router-link>
          <router-link to="/contact" class="btn btn-secondary">Kontakt aufnehmen</router-link>
        </div>
      </div>
    </section>

    <!-- Features Grid Section -->
    <section class="features-section">
      <div class="section-header">
        <h2>Unsere Stärken</h2>
        <p>Alles, was Sie für sichere digitale Verifikation benötigen</p>
      </div>

      <div class="features-grid">
        <div v-for="(feature, index) in features" :key="index" class="feature-card">
          <div class="feature-icon">
            <!-- SVG Icons für verschiedene Features -->
            <svg v-if="index === 0" xmlns="http://www.w3.org/2000/svg" height="62px" viewBox="0 -960 960 960" width="62px" fill="#1A4A89"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z"/></svg>
            <svg v-else-if="index === 1" xmlns="http://www.w3.org/2000/svg" height="62px" viewBox="0 -960 960 960" width="62px" fill="#1A4A89"><path d="M430-200q38 0 64-26t26-64v-150h120v-80H480v155q-11-8-23.5-11.5T430-380q-38 0-64 26t-26 64q0 38 26 64t64 26ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
            <svg v-else-if="index === 2" xmlns="http://www.w3.org/2000/svg" height="62px" viewBox="0 -960 960 960" width="62px" fill="#1A4A89"><path d="M360-460h40v-80h40q17 0 28.5-11.5T480-580v-40q0-17-11.5-28.5T440-660h-80v200Zm40-120v-40h40v40h-40Zm120 120h80q17 0 28.5-11.5T640-500v-120q0-17-11.5-28.5T600-660h-80v200Zm40-40v-120h40v120h-40Zm120 40h40v-80h40v-40h-40v-40h40v-40h-80v200ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg>
            <svg v-else-if="index === 3" xmlns="http://www.w3.org/2000/svg" height="62px" viewBox="0 -960 960 960" width="62px" fill="#1A4A89"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            <svg v-else-if="index === 4" xmlns="http://www.w3.org/2000/svg" height="62px" viewBox="0 -960 960 960" width="62px" fill="#1A4A89"><path d="M480-80q-83 0-156-31.5t-127-86Q143-252 111.5-325T80-480q0-157 104-270t256-128v120q-103 14-171.5 92.5T200-480q0 116 82 198t198 82q66 0 123.5-28t96.5-76l104 60q-54 75-139 119.5T480-80Zm366-238-104-60q9-24 13.5-49.5T760-480q0-107-68.5-185.5T520-758v-120q152 15 256 128t104 270q0 44-8 85t-26 77Z"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" height="62px" viewBox="0 -960 960 960" width="62px" fill="#1A4A89"><path d="m256-120-56-56 193-194q23-23 35-52t12-61v-204l-64 63-56-56 160-160 160 160-56 56-64-63v204q0 32 12 61t35 52l193 194-56 56-224-224-224 224Z"/></svg>
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
      <div class="section-header">
        <h2>So funktioniert CredoCheck</h2>
        <p>Vier einfache Schritte zur sicheren Verifikation</p>
      </div>

      <div class="process-timeline">
        <div v-for="(step, index) in processSteps" :key="index" class="process-step">
          <svg v-if="index === 0" xmlns="http://www.w3.org/2000/svg" height="62px" viewBox="0 -960 960 960" width="62px" fill="#68B830">
            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm-20 200h80v-400H380v80h80v320Z"/>          </svg>
          <svg v-else-if="index === 1" xmlns="http://www.w3.org/2000/svg" height="62px" viewBox="0 -960 960 960" width="62px" fill="#68B830">
            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320ZM360-280h240v-80H440v-80h80q33 0 56.5-23.5T600-520v-80q0-33-23.5-56.5T520-680H360v80h160v80h-80q-33 0-56.5 23.5T360-440v160Z"/>          </svg>
          <svg v-else-if="index === 2" xmlns="http://www.w3.org/2000/svg" height="62px" viewBox="0 -960 960 960" width="62px" fill="#68B830">
            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320ZM360-280h160q33 0 56.5-23.5T600-360v-60q0-26-17-43t-43-17q26 0 43-17t17-43v-60q0-33-23.5-56.5T520-680H360v80h160v80h-80v80h80v80H360v80Z"/>          </svg>
          <svg v-else-if="index === 3" xmlns="http://www.w3.org/2000/svg" height="62px" viewBox="0 -960 960 960" width="62px" fill="#68B830">
            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Zm40 200h80v-400h-80v160h-80v-160h-80v240h160v160Z"/>          </svg>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
          </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="section-header">
        <h2>Das sagen unsere Kunden</h2>
        <p>Vertrauen durch Erfahrung</p>
      </div>

      <div class="testimonials-grid">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#68B830"><path d="m228-240 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T458-480L320-240h-92Zm360 0 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T818-480L680-240h-92ZM362.5-517.5Q380-535 380-560t-17.5-42.5Q345-620 320-620t-42.5 17.5Q260-585 260-560t17.5 42.5Q295-500 320-500t42.5-17.5Zm360 0Q740-535 740-560t-17.5-42.5Q705-620 680-620t-42.5 17.5Q620-585 620-560t17.5 42.5Q655-500 680-500t42.5-17.5ZM680-560Zm-360 0Z"/></svg>          <p class="quote">{{ testimonial.quote }}</p>
          <div class="testimonial-author">
            <strong>{{ testimonial.author }}</strong>
            <span class="company">{{ testimonial.company }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <h2>Bereit für sichere Verifikation?</h2>
      <p>Starten Sie heute noch mit CredoCheck und erhalten Sie sofort Zugang zu allen Funktionen.</p>
      <div class="cta-buttons">
        <router-link to="/pricing" class="btn btn-primary">Kostenlose Demo anfordern</router-link>
      </div>
    </section>

    <!-- Media Credits Section -->
    <section class="credits-section">
      <div class="section-header">
        <h2>Medien und Lizenzen</h2>
        <p>Transparente Dokumentation aller verwendeten Medien-Assets</p>
      </div>

      <div class="credits-content">
        <div class="credit-category">
          <h3>Grafiken und Icons</h3>
          <ul>
            <li>
              <strong>Hero-Bild:</strong> Lizenziertes Stock-Foto
              <br/>
              <small>Quelle: <a href="https://www.pexels.com/photo/close-up-photo-of-magnifying-glass-4205767/" target="_blank">Pexels</a> | Lizenz: frei</small>
            </li>
            <li>
              <strong>SVG-Icons:</strong> Google Material Icons
              <br/>
              <small>Icons: <a href="https://fonts.google.com/icons" target="_blank">Google Material Symbols</a> | Lizenz: <a href="https://www.apache.org/licenses/LICENSE-2.0.html" target="_blank">Apache 2.0</a></small>
            </li>
            <li>
              <strong>Logo und Branding:</strong> Eigentum von CredoCheck GmbH
              <span class="license-badge">Intern</span>
            </li>
            <li>
              <strong>Hero-Illustration:</strong> Benutzerdefinierte SVG-Grafiken
              <span class="license-badge">Intern</span>
            </li>
          </ul>
        </div>

        <div class="credit-category">
          <h3>Schriftarten</h3>
          <ul>
            <li>
              <strong>Primäre Schriftart:</strong> System-Schriftarten
              <span class="license-badge">System</span>
            </li>
          </ul>
        </div>

        <div class="credit-category">
          <h3>Text und Inhalte</h3>
          <ul>
            <li>
              <strong>Alle Texte und Inhalte:</strong> Originalwerke von CredoCheck GmbH
              <span class="license-badge">Copyright</span>
            </li>
            <li>
              <strong>Urheberrecht:</strong> © 2026 CredoCheck GmbH Alle Rechte vorbehalten.
              <span class="license-badge">Geschützt</span>
            </li>
          </ul>
        </div>

        <div class="credit-category">
          <h3>Externe Ressourcen und Tools</h3>
          <ul>
            <li>
              <strong>Vue.js Framework:</strong> Open Source
              <br/>
              <small>Quelle: <a href="https://vuejs.org" target="_blank">vuejs.org</a> | Lizenz: MIT</small>
            </li>
            <li>
              <strong>CSS-Framework:</strong> Benutzerdefiniertes CSS
              <span class="license-badge">Intern</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

  </main>
</template>

<style scoped>
.home-page {
  font-family: var(--font-sans);
  color: var(--neutral-dark);
  background: var(--neutral-light);
  overflow: hidden;
}

/* Hero Section */
.hero {
  position: relative;
  padding: 100px var(--spacing-lg) 80px;
  text-align: center;
  color: #fff;
  overflow: hidden;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* slightly darken background for text contrast */
  filter: brightness(0.55);
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 700px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.hero p {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
  opacity: 0.95;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}

.hero-buttons {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 12px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.btn-primary {
  background: #68B830;
  color: #fff;
}

.btn-primary:hover {
  background: #559C29;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(104, 184, 48, 0.3);
}

.btn-secondary {
  background: transparent;
  color: #fff;
  border-color: #fff;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Features Section */
.features-section {
  padding: var(--spacing-xl) var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
  color: var(--primary, #1a4a89);
}

.section-header p {
  font-size: 1.1rem;
  color: #666;
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.feature-card {
  background: #fff;
  padding: var(--spacing-lg);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(26, 74, 137, 0.15);
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto var(--spacing-md);
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: var(--spacing-sm);
  color: var(--primary, #1a4a89);
}

.feature-card p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

/* Process Section */
.process-section {
  padding: var(--spacing-xl) var(--spacing-lg);
  background: linear-gradient(135deg, #f5f7fa 0%, #eef6ff 100%);
}

.process-section .section-header {
  max-width: 1200px;
  margin: 0 auto var(--spacing-xl);
}

.process-timeline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.process-step {
  background: #fff;
  padding: var(--spacing-lg);
  border-radius: 12px;
  border-left: 4px solid var(--primary, #1a4a89);
  text-align: center;
  position: relative;
}

.process-step h3 {
  color: var(--primary, #1a4a89);
  margin-bottom: var(--spacing-sm);
}

.process-step p {
  color: #666;
  margin: 0;
}

/* Testimonials Section */
.testimonials-section {
  padding: var(--spacing-xl) var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-lg);
}

.testimonial-card {
  background: #fff;
  padding: var(--spacing-lg);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-top: 4px solid #68B830;
  position: relative;
}

.quote {
  font-size: 1rem;
  font-style: italic;
  color: #333;
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
  margin-top: 0;
}

.testimonial-author {
  display: flex;
  flex-direction: column;
}

.testimonial-author strong {
  color: var(--primary, #1a4a89);
  margin-bottom: 4px;
}

.company {
  font-size: 0.9rem;
  color: #999;
}

/* Video Section */
.video-section .section-header {
  max-width: 1200px;
  margin: 0 auto var(--spacing-xl);
}

/* CTA Section */
.cta-section {
  padding: var(--spacing-xl) var(--spacing-lg);
  background: linear-gradient(135deg, #1A4A89 0%, #103F74 100%);
  color: #fff;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 12px;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: var(--spacing-md);
}

.cta-section p {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-lg);
  opacity: 0.95;
}

.cta-buttons {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

/* Credits Section */
.credits-section {
  padding: var(--spacing-xl) var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
  background: #fff;
}

.credits-content {
  background: #f9f9f9;
  padding: var(--spacing-lg);
  border-radius: 12px;
  margin: var(--spacing-lg) 0;
}

.credit-category {
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid #e0e0e0;
}

.credit-category:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.credit-category h3 {
  color: var(--primary, #1a4a89);
  font-size: 1.2rem;
  margin-bottom: var(--spacing-md);
}

.credit-category ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.credit-category li {
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center; /* vertically center badges with text */
  gap: var(--spacing-md);
}

.credit-category li:last-child {
  border-bottom: none;
}

.credit-category strong {
  color: var(--primary, #1a4a89);
}

.credit-category small {
  display: block;
  margin-top: 4px;
  color: #999;
}

.license-badge {
  display: inline-block;
  background: var(--primary, #1a4a89);
  color: #fff;
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}

.licensing-notice h3 {
  color: var(--primary, #1a4a89);
  margin-top: 0;
}

.licensing-notice p {
  margin: var(--spacing-sm) 0;
  line-height: 1.6;
  color: #555;
}

.licensing-notice a {
  color: var(--primary, #1a4a89);
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    padding: 60px var(--spacing-md) 40px;
    min-height: 500px;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .process-timeline {
    grid-template-columns: 1fr;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .hero-buttons,
  .cta-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    text-align: center;
  }

  .credit-category li {
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .hero h1 {
    font-size: 1.5rem;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .cta-section h2 {
    font-size: 1.5rem;
  }
}
</style>