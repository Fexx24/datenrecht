<script setup>
// Keine externe Logik nötig – statische Seite mit CSS-Styling
const logo = new URL('@/assets/images/logo-credocheck.png', import.meta.url).href
</script>

<template>
  <main class="about-page">
    <h1>Über CredoCheck</h1>

    <section class="mission-section">
      <div class="mission-content">
        <h2>Unsere Mission: Glaubwürdigkeit durch Verifikation</h2>
        <p>
          CredoCheck bietet Unternehmen eine sichere, transparente Lösung zur digitalen Verifikation
          von Bildern, Videos und PDF-Dokumenten. Unser Ziel ist es, <strong>Vertrauen zu schaffen</strong>,
          indem geprüfte Dateien für Kunden nachvollziehbar und online überprüfbar gemacht werden.
        </p>
        <p>
          Das Wort <em>"Credo"</em> (lateinisch: "Ich glaube") steht für <strong>Glaubwürdigkeit und Vertrauen</strong>.
          Kombiniert mit <em>"Check"</em> (Überprüfung) entsteht eine Marke, die unsere Kernphilosophie ausdrückt:
          <strong>Vertrauenswürdige Verifikation auf höchstem Niveau</strong>.
        </p>
      </div>
    </section>

    <section class="brands-section">
      <h2>Unsere Markenidentität</h2>
      <p class="intro-text">
        CredoCheck wird durch drei unterschiedliche Markenformen geschützt, die zusammen unsere Unternehmensidentität bilden:
      </p>

      <!-- Brand Form 1: Wortmarke -->
      <div class="brand-card brand-word">
        <div class="brand-header">
          <h3>1. Wortmarke</h3>
        </div>
        <div class="brand-display">
          <div class="word-mark">CredoCheck</div>
        </div>
        <div class="brand-details">
          <p>
            <strong>Marke:</strong> CredoCheck
          </p>
          <p>
            <strong>Beschreibung:</strong>
            Die Wortmarke „CredoCheck" ist eine eigenständige, fünfstellige Wortkomposition,
            die sich durch ihre Einzigartigkeit von anderen Verifikationsdienstleistern unterscheidet.
          </p>
          <p>
            <strong>Bedeutung:</strong>
            <em>Credo</em> (lat. „Glaubensbekenntnis", „Ich glaube") symbolisiert Glaubwürdigkeit,
            Vertrauen und Zuverlässigkeit. <em>Check</em> bedeutet Überprüfung und Validierung.
            Zusammen versprechen wir: <strong>Vertrauenswürdige Verifikation.</strong>
          </p>
          <p>
            <strong>Nizza-Klassen:</strong>
            <span class="nizza-badge">Klasse 9</span>
            <span class="nizza-badge">Klasse 42</span>
          </p>
          <ul class="nizza-details">
            <li>
              <strong>Klasse 9:</strong> Softwareprodukte, digitale Inhalte, Computer-Programme,
              Apps für die Dateiverifikation und digitale Authentifizierung
            </li>
            <li>
              <strong>Klasse 42:</strong> Dienstleistungen im Bereich Softwareentwicklung,
              digitale Verifikation, Datenverwaltung und IT-Sicherheit, SaaS-Plattformen
            </li>
          </ul>
        </div>
      </div>

      <div class="brand-card brand-logo">
        <div class="brand-header">
          <h3>2. Bildmarke</h3>
        </div>
        <div class="brand-display logo-display">
          <img :src="logo" alt="CredoCheck Logo" class="logo-image">
        </div>
        <div class="brand-details">
          <p>
            <strong>Marke:</strong> CredoCheck Logo
          </p>
          <p>
            <strong>Beschreibung:</strong>
            Ein modernes Logo bestehend aus zwei ineinandergreifenden Kreisen
            in Blau und Grün, die die zwei C von CredoCheck darstellen sollen,
            zusätzlich ist ein Häkchen integriert, das Verifikation und Bestätigung symbolisiert.
          </p>
          <p>
            <strong>Designelemente:</strong>
          </p>
          <ul>
            <li><strong>Zwei Kreisform:</strong> Zwei ineinandergreifende Kreise symbolisieren gegenseitige Überprüfung und die zwei C</li>
            <li><strong>Grünes Häkchen:</strong> Das klassische Symbol für Genehmigung, Bestätigung und Sicherheit</li>
            <li><strong>Moderne Geometrie:</strong> Nadlos ineinander übergehende Linien vermitteln Professionalität und Technologie</li>
          </ul>
          <p>
            <strong>Nizza-Klassen:</strong>
            <span class="nizza-badge">Klasse 9</span>
            <span class="nizza-badge">Klasse 42</span>
          </p>
          <ul class="nizza-details">
            <li>
              <strong>Klasse 9:</strong> Grafische Symbole, Designs und Markenzeichen für digitale Produkte und Software-Schnittstellen
            </li>
            <li>
              <strong>Klasse 42:</strong> Grafische Darstellung und Benutzeroberflächen-Design für Verifikationsdienste
            </li>
          </ul>
        </div>
      </div>

      <div class="brand-card brand-color">
        <div class="brand-header">
          <h3>3. Farbmarke</h3>
        </div>
        <div class="brand-display color-display">
          <div class="color-sample primary-color">
            <div class="color-name">Primary Blue</div>
            <div class="color-hex">#1A4A89</div>
          </div>
          <div class="color-sample secondary-color">
            <div class="color-name">Secondary Green</div>
            <div class="color-hex">#68B830</div>
          </div>
        </div>
        <div class="brand-details">
          <p>
            <strong>Marke:</strong> Farbmarke
          </p>
          <p>
            <strong>Beschreibung:</strong>
            Eine Kombination von zwei spezifischen Farben als Markenidentität:
            tiefes Blau und Grün. Diese Farbmarke wird in unserem Logo, auf der Website und
            in allen Vermarktungsmaterialien durchgehend verwendet.
          </p>
          <p>
            <strong>Farbpalette:</strong>
          </p>
          <ul>
            <li>
              <strong>Primary Blue:</strong> #1A4A89<br>
              <em>Eigenschaften:</em> Vertrauenswürdigkeit, Professionalität, Sicherheit, Stabilität
            </li>
            <li>
              <strong>Primary Blue Hover:</strong> #103F74<br>
              <em>Verwendung:</em> Interaktive Elemente und Hover-Effekte
            </li>
            <li>
              <strong>Secondary Green:</strong> #68B830<br>
              <em>Eigenschaften:</em> Erfolg, Genehmigung, Verifikation, Vertrauen, Sicherheit
            </li>
            <li>
              <strong>Secondary Green Hover:</strong> #559C29<br>
              <em>Verwendung:</em> Interaktive Elemente und Hover-Effekte
            </li>
          </ul>
          <p>
            <strong>Symbolik:</strong>
            Blau steht für Vertrauen und Sicherheit, Grün für Genehmigung und positives Feedback.
            Zusammen bilden sie CredoCheck: <strong>sichere und vertrauenswürdige Verifikation</strong>.
          </p>
          <p>
            <strong>Nizza-Klassen:</strong>
            <span class="nizza-badge">Klasse 9</span>
            <span class="nizza-badge">Klasse 42</span>
          </p>
          <ul class="nizza-details">
            <li>
              <strong>Klasse 9:</strong> Farbcodes für Software-Schnittstellen und digitale Produkte
            </li>
            <li>
              <strong>Klasse 42:</strong> Corporate Design und Farbschema für IT-Dienstleistungen und Verifikationsplattformen
            </li>
          </ul>
        </div>
      </div>

    </section>

    <section class="team-section">
      <h2>Das Team hinter CredoCheck</h2>
      <ul style="list-style-type: none">
        <li>
          <strong>Felix Anders</strong>: Projektleitung & Entwicklung<br>
          <em>Verantwortlich für strategische Richtung und technische Umsetzung</em>
        </li>
        <li>
          <strong>Anna Beispiel</strong>: UX/UI Design<br>
          <em>Schöpferin der visuellen Identität und Markengestaltung</em>
        </li>
        <li>
          <strong>Max Mustermann</strong>: Datenschutz & Recht<br>
          <em>Gewährleistung von Compliance und Markenrechtsschutz</em>
        </li>
      </ul>
    </section>

    <section class="values-section">
      <h2>Unsere Werte</h2>
      <div class="values-grid">
        <div class="value-card">
          <h3>Sicherheit</h3>
          <p>
            Verifikation ist vertrauenssensitiv. Wir setzen daher auf höchste Sicherheitsstandards,
            um Ihre Daten und Verifikationsergebnisse zu schützen.
          </p>
        </div>
        <div class="value-card">
          <h3>Barrierefreiheit</h3>
          <p>
            Digitale Verifikation sollte für alle zugänglich sein. Wir folgen WCAG 2.2 AA Standards.
          </p>
        </div>
        <div class="value-card">
          <h3>Datenschutz</h3>
          <p>
            DSGVO-Konformität ist für uns eine Grundhaltung.
            Ihre Daten sind bei uns sicher.
          </p>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <h2>Kontakt & Mehr Informationen</h2>
      <p>
        Sie erreichen uns über das <router-link to="/contact">Kontaktformular</router-link>
        oder per E-Mail an <a href="mailto:hello@credocheck.example">hello@credocheck.example</a>.
      </p>
      <p style="margin-top: var(--spacing-md);">
        Weitere Informationen zu unseren Richtlinien finden Sie in unserer
        <router-link to="/privacy">Datenschutzerklärung</router-link>,
        <router-link to="/license">Lizenzbedingungen</router-link> und
        <router-link to="/imprint">Impressum</router-link>.
      </p>
    </section>

  </main>
</template>

<style scoped>
.about-page {
  font-family: var(--font-sans);
  color: var(--neutral-dark);
  padding: var(--spacing-lg) var(--spacing-md);
  width: 100%;
  background: linear-gradient(135deg, #f5f7fa 0%, #eef6ff 100%);
}

/* Headings */
.about-page h1 {
  font-size: 2.5rem;
  margin: 0 auto var(--spacing-lg);
  max-width: 1000px;
  text-align: center;
  color: var(--primary, #1a4a89);
  font-weight: 700;
}

.about-page h2 {
  font-size: 1.8rem;
  color: var(--primary, #1a4a89);
  margin-bottom: var(--spacing-md);
  border-bottom: 3px solid var(--secondary);
  padding-bottom: var(--spacing-sm);
}

.about-page h3 {
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: var(--spacing-sm);
}

.about-page h4 {
  font-size: 1.05rem;
  color: var(--primary);
  margin-top: var(--spacing-md);
  margin-bottom: var(--spacing-xs);
}

/* Sections */
.about-page section {
  background: #fff;
  border-radius: var(--radius-md, 12px);
  box-shadow: var(--shadow-sm, 0 2px 8px rgba(0, 0, 0, 0.1));
  padding: var(--spacing-lg, 24px);
  margin: 0 auto var(--spacing-lg);
  max-width: 1000px;
}

.about-page p {
  line-height: 1.7;
  margin-bottom: var(--spacing-sm, 12px);
  font-size: 1rem;
}

.about-page ul {
  margin: var(--spacing-sm) 0 var(--spacing-md);
  padding-left: 1.5em;
}

.about-page li {
  margin-bottom: var(--spacing-sm);
  line-height: 1.6;
}

.about-page a {
  color: var(--primary);
  text-decoration: underline;
  font-weight: 500;
}

.about-page a:hover {
  color: var(--primary-hover);
  opacity: 0.8;
}

/* Mission Section */
.mission-section {
  background: linear-gradient(135deg, #1a4a89 0%, #103f74 100%) !important;
  color: #fff;
  text-align: center;
}

.mission-section h2,
.mission-section p {
  color: #fff;
}

.mission-section a {
  color: #68b830;
}

.mission-section em {
  font-style: italic;
  font-weight: 600;
  color: #68b830;
}

/* Brands Section */
.brands-section {
  background: #fff !important;
}

.intro-text {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--neutral-dark);
  margin-bottom: var(--spacing-lg);
  text-align: center;
}

/* Brand Cards */
.brand-card {
  border: 2px solid #e0e0e0;
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  background: #fafafa;
  transition: all 0.3s ease;
}

.brand-card:hover {
  border-color: var(--primary);
  box-shadow: 0 4px 12px rgba(26, 74, 137, 0.15);
}

.brand-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid #e0e0e0;
}

.brand-header h3 {
  margin: 0;
}

.brand-number {
  background: var(--primary);
  color: #fff;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.brand-display {
  background: #fff;
  border-radius: var(--radius-sm);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  text-align: center;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Wortmarke */
.word-mark {
  font-size: 3rem;
  font-weight: 700;
  background: var(--primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 1px;
}

/* Logo Display */
.logo-display {
  padding: var(--spacing-lg);
}

.logo-image {
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
}

/* Color Display */
.color-display {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-md);
  padding: 0;
}

.color-sample {
  border-radius: var(--radius-sm);
  padding: var(--spacing-md);
  text-align: center;
  color: #fff;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.primary-color {
  background: linear-gradient(135deg, #1a4a89 0%, #103f74 100%);
}

.secondary-color {
  background: linear-gradient(135deg, #68b830 0%, #559c29 100%);
}

.color-name {
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.color-hex {
  font-size: 0.9rem;
  opacity: 0.9;
}

.color-hex-hover {
  font-size: 0.85rem;
  opacity: 0.8;
  margin-top: 4px;
}

/* Brand Details */
.brand-details {
  background: #fff;
  border-radius: var(--radius-sm);
  padding: var(--spacing-md);
}

.brand-details p {
  margin-bottom: var(--spacing-sm);
}

.brand-details ul {
  margin: var(--spacing-sm) 0;
  padding-left: 1.5em;
}

.nizza-badge {
  display: inline-block;
  background: var(--primary, #1a4a89);
  color: #fff;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-right: 6px;
  margin-top: 4px;
}

.nizza-details {
  background: #f5f5f5;
  border-left: 4px solid var(--secondary, #68b830);
  padding: var(--spacing-sm) var(--spacing-md);
  margin: var(--spacing-md) 0;
  border-radius: var(--radius-sm);
}

.nizza-details li {
  margin-bottom: var(--spacing-xs);
  font-size: 0.95rem;
}

/* Trademark Protection */
.trademark-protection {
  background: #fff !important;
}

.protection-content h3 {
  color: var(--secondary, #68b830);
  margin-top: 0;
}

.protection-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.protection-item {
  background: #f5f5f5;
  padding: var(--spacing-md);
  border-radius: var(--radius-sm);
  border-left: 4px solid var(--primary, #1a4a89);
}

.protection-item h4 {
  margin-top: 0;
  color: var(--primary, #1a4a89);
}

/* Team Section */
.team-section ul {
  margin: var(--spacing-lg) 0;
}

.team-section li {
  background: #f5f5f5;
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  border-radius: var(--radius-sm);
  border-left: 4px solid var(--secondary, #68b830);
}

.team-section strong {
  color: var(--primary, #1a4a89);
}

.team-section em {
  color: #666;
  font-size: 0.95rem;
}

/* Values Section */
.values-section {
  background: #fff !important;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.value-card {
  background: linear-gradient(135deg, #f5f7fa 0%, #eef6ff 100%);
  padding: var(--spacing-lg);
  border-radius: var(--radius-sm);
  border-top: 4px solid var(--secondary, #68b830);
  text-align: center;
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(26, 74, 137, 0.15);
}

.value-card h3 {
  margin-top: 0;
  color: var(--primary, #1a4a89);
  font-size: 1.15rem;
}

.value-card p {
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Contact Section */
.contact-section {
  background: linear-gradient(135deg, #1a4a89 0%, #103f74 100%) !important;
  color: #fff;
  text-align: center;
}

.contact-section h2 {
  color: #fff;
  border-bottom-color: var(--secondary, #68b830);
}

.contact-section p {
  color: #fff;
}

.contact-section a {
  color: #68b830;
  text-decoration: underline;
}

.contact-section a:hover {
  color: #559c29;
  opacity: 0.9;
}

/* Responsive */
@media (max-width: 768px) {
  .about-page {
    padding: var(--spacing-md) var(--spacing-sm);
  }

  .about-page h1 {
    font-size: 1.8rem;
  }

  .about-page h2 {
    font-size: 1.4rem;
  }

  .about-page section {
    padding: var(--spacing-md);
    margin-bottom: var(--spacing-md);
  }

  .brand-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .brand-number {
    margin-top: var(--spacing-sm);
  }

  .word-mark {
    font-size: 2rem;
  }

  .protection-grid,
  .values-grid {
    grid-template-columns: 1fr;
  }

  .color-display {
    grid-template-columns: 1fr;
  }
}
</style>