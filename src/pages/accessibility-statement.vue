<template>
  <main class="imprint-page">

    <h1>Barrierefreiheitserklärung CredoCheck</h1>
    <p class="updated">Stand Mai 2026</p>

    <section id="conformance">
      <h2>Grundsatz und Ziel</h2>
      <p>CredoCheck verpflichtet sich, die Zugänglichkeit seiner Website zu verbessern und Barrieren zu reduzieren. Ziel ist die weitestmögliche Einhaltung der Web Content Accessibility Guidelines (WCAG) 2.2 auf Level AA.</p>
    </section>

    <section id="scope">
      <h2>Geltungsbereich</h2>
      <p>Diese Erklärung bezieht sich auf Inhalte unter der Domain dieser Website. Drittinhalte und eingebettete Inhalte (z. B. externe Medienplayer, eingebettete Dokumente) unterliegen deren eigener Zugänglichkeitsverantwortung.</p>
    </section>

    <section id="measures">
      <h2>Getroffene Maßnahmen</h2>
      <ul>
        <li>Semantische HTML-Struktur und sinnvolle ARIA-Attribute</li>
        <li>Kontrastprüfung und ein kontraststarkes Farbkonzept</li>
        <li>Vollständige Tastatursteuerung und sichtbare Fokusindikatoren</li>
        <li>Alternative Texte für Bilder und Beschriftungen für Formulare</li>
        <li>Responsive Layouts für verschiedene Bildschirmgrößen</li>
      </ul>
    </section>

    <section id="conformance">
      <h2>Streben nach Barrierefreiheit ist eine fortlaufende Aufgabe</h2>
      <p>Websites können nie zu 100 % barrierefrei sein. So kann eine Website für Menschen mit Beeinträchtigungen Barrieren haben, obwohl sie nach WCAG AA als barrierefrei gilt. Wir betrachten die Barrierefreiheit von CredoCheck daher als kontinuierliche Aufgabe für unsere Entwickler. Dies erreichen wir durch regelmäßige Schulungen, Weiterbildungen und ggf. technische Nachbesserungen. Uns ist wichtig, dass Barrierefreiheit aus der Perspektive der Betroffenen angestrebt wird. Verbesserungsvorschläge nehmen wir ernst und immer gern entgegen. Stoßen Sie auf der Seite auf Barrieren, welche Sie bei der Benutzung behindern oder einschränken, oder haben Sie Fragen zur Barrierefreiheit der Seite, kontaktieren Sie uns bitte hier.
      </p>
    </section>

    <section id="review">
      <h2>Überprüfung & Aktualisierung</h2>
      <p>Diese Erklärung wird mindestens einmal jährlich überprüft und bei Bedarf aktualisiert. Die aktuelle Version finden Sie stets auf dieser Seite.</p>
    </section>
  </main>
</template>

<script setup>
</script>

<style scoped>
.imprint-page {
  font-family: var(--font-sans);
  color: var(--neutral-dark);
  background: var(--neutral-light);
  padding: var(--spacing-lg) var(--spacing-md);
  max-width: 1000px;
  margin: 0 auto;
}

.imprint-page h1 {
  font-size: 2rem;
  margin-bottom: var(--spacing-md);
}

.imprint-page h2 {
  font-size: 1.5rem;
  border-bottom: 1px solid var(--neutral-medium, #e0e0e0);
  padding-bottom: var(--spacing-xs, 4px);
  margin-top: var(--spacing-md);
}

.imprint-page h3 {
  font-size: 1.1rem;
  margin-top: var(--spacing-sm);
  margin-bottom: var(--spacing-xs);
}

.imprint-page section {
  background: #fff;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.imprint-page ul, .imprint-page ol {
  margin-left: 1.3rem;
  margin-bottom: var(--spacing-sm, 8px);
}

.imprint-page li {
  margin-bottom: 4px;
  line-height: 1.6;
}

.imprint-page p {
  line-height: 1.6;
  margin-bottom: var(--spacing-sm);
}

.imprint-page a {
  color: var(--primary);
  text-decoration: underline;
}

.imprint-page a:hover {
  opacity: 0.8;
}

.legal-notice {
  padding: var(--spacing-md);
  border-radius: var(--radius-sm, 4px);
  margin-bottom: var(--spacing-lg);
  line-height: 1.5;
}

.info-box {
  background-color: #eef6ff;
  border-left: 4px solid #2b7de9;
}

.contact-section {
  text-align: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

@media (max-width: 768px) {
  .imprint-page {
    padding: var(--spacing-md) var(--spacing-sm);
  }

  .imprint-page h1 {
    font-size: 1.5rem;
  }

  .imprint-page h2 {
    font-size: 1.2rem;
  }

  .imprint-page section {
    padding: var(--spacing-md);
  }
}
</style>
