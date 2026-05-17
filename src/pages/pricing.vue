<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function selectPlan(name){
  router.push({ name: 'Contact', query: { plan: name } })
}
</script>

<template>
  <main class="pricing-page">
    <h1>Preise</h1>

    <section class="pricing-cards">
      <article class="card">
        <header>
          <h2>Free</h2>
          <p class="subtitle">30 Tage Test</p>
          <p class="price">Kostenlos</p>
        </header>
        <ul>
          <li>Bis zu 10 Verifizierungen</li>
          <li>Bild- und PDF-Verifikation (JPG, PNG, PDF)</li>
          <li>Basis Prüfprotokoll</li>
        </ul>
        <footer>
          <button class="btn btn-outline" @click.prevent="selectPlan('Free')">Kostenlos testen</button>
        </footer>
      </article>

      <article class="card recommended">
        <header>
          <h2>Pro</h2>
          <p class="subtitle">Für wachsende Teams</p>
          <p class="price">200€ / Monat</p>
        </header>
        <ul>
          <li>Bis zu 500 Verifizierungen pro Monat</li>
          <li>Bild-, Video- und PDF-Verifikation (JPG, PNG, MP4, PDF)</li>
          <li>Erweiterte Prüfprotokolle & Export</li>
        </ul>
        <footer>
          <button class="btn btn-primary" @click.prevent="selectPlan('Pro')">Pro kaufen</button>
        </footer>
      </article>

      <article class="card">
        <header>
          <h2>Max</h2>
          <p class="subtitle">Für höchste Anforderungen</p>
          <p class="price">500€ / Monat</p>
        </header>
        <ul>
          <li>Bis zu 10.000 Verifizierungen pro Monat</li>
          <li>Alle Formate (inkl. TIFF, RAW, MOV, AVI, verschlüsselte PDFs)</li>
          <li>Priorisierte Verarbeitung & SLA</li>
        </ul>
        <footer>
          <button class="btn btn-secondary" @click.prevent="selectPlan('Max')">Max kaufen</button>
        </footer>
      </article>
    </section>

    <section class="note">
      <p>Wenn Sie spezielle Anforderungen oder ein individuelles Volumen benötigen, kontaktieren Sie uns über das <router-link to="/contact">Kontaktformular</router-link>.</p>
    </section>
  </main>
</template>

<style scoped>
.pricing-page{font-family:var(--font-sans);color:var(--neutral-dark);padding:var(--spacing-lg) var(--spacing-md);max-width:1100px;margin:0 auto}
.pricing-page h1{font-size:2rem;margin:0 0 var(--spacing-md);max-width:900px}
.pricing-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--spacing-lg)}
.card{background:#fff;border-radius:var(--radius-md);box-shadow:var(--shadow-sm);padding:var(--spacing-lg);display:flex;flex-direction:column;justify-content:space-between}
.card.recommended{border:2px solid var(--primary)}
.card header h2{margin:0;font-size:1.25rem}
.subtitle{color:var(--info);margin:0.25rem 0}
.price{font-weight:700;font-size:1.15rem;margin:0.5rem 0}
.card ul{list-style:none;padding:0;margin:0 0 var(--spacing-md)}
.card li{margin-bottom:0.5rem}
.btn{border-radius:8px;padding:0.6rem 1rem;border:none;cursor:pointer;font-weight:600}
.btn-primary{background:var(--primary);color:#fff}
.btn-primary:hover{background:var(--primary-hover)}
.btn-secondary{background:var(--secondary);color:#fff}
.btn-secondary:hover{background:var(--secondary-hover)}
.btn-outline{background:transparent;border:1px solid rgba(15,23,34,0.08);color:var(--neutral-dark)}
.note{margin-top:var(--spacing-lg);background:transparent}

@media (max-width: 900px){.pricing-cards{grid-template-columns:repeat(2,1fr)}}
@media (max-width: 640px){.pricing-cards{grid-template-columns:1fr}.pricing-page h1{text-align:left}}
</style>