<script setup>
import { ref, onMounted } from 'vue'
const show = ref(false)
const consentKey = 'credocheck_cookie_consent'

onMounted(() => {
  try {
    const val = localStorage.getItem(consentKey)
    show.value = !val
  } catch (e) {
    show.value = true
  }
})

function setConsent(value) {
  try {
    localStorage.setItem(consentKey, value)
    // also set a demo cookie for server-side visibility
    document.cookie = `credocheck_consent=${value}; path=/; max-age=${60*60*24*365};`
  } catch (e) {
    // ignore
  }
  show.value = false
}
</script>

<template>
  <div v-if="show" class="cookie-banner" role="dialog" aria-modal="true" aria-live="polite" aria-label="Cookie Einstellungen">
    <div class="cookie-inner">
      <div class="cookie-text">
        <h3>Cookie-Einstellungen</h3>
        <p>Wir bei CredoCheck setzen auf Basis unserer berechtigten Interessen „funktionsnotwendige Cookies" ein, welche die Funktionalität und Sicherheit der Webseite gewährleisten. Zudem verwenden wir – sofern Sie uns durch Anhaken der nachstehenden Checkbox(en) Ihre Einwilligung erteilen – nicht-funktionsnotwendige Cookies, um unsere Services zu verbessern und die Ihnen angezeigten Webseiteninhalte zu personalisieren.</p>
        <p>Einige der Cookies wie etwa jene von Google werden von Dienstleistern in den USA angeboten, sodass es bei Verwendung der Cookies zu Übertragung der Daten in die USA kommt. Insoweit diese Services nach dem EU-US Data Privacy Framework (DPF) zertifiziert sind, besteht auch in den USA ein dem europäischen Recht entsprechender Datenschutz. Ist ein Service in den USA hingegen nicht DPF-zertifiziert, gewährleistet das US-Recht kein angemessenes Datenschutzniveau; insbesondere können in diesem Fall US-Behörden zu Kontroll- und Überwachungszwecken auf personenbezogene Daten zugreifen, ohne dass die Betroffenen darüber informiert werden und dagegen rechtlich vorgehen können. Durch die Einwilligung zur Cookie-Setzung erklären Sie sich daher auch mit einem Datentransfer an Empfänger in den USA außerhalb des DPF bzw. in sonstigen Drittstaaten ohne angemessenes Datenschutzniveau einverstanden.</p>
        <p>Sie können Ihre Einwilligung jederzeit widerrufen oder nutzen Sie "Optionen" zur individuellen Anpassung. Die Rechtmäßigkeit der bis zum Zeitpunkt des Widerrufs erfolgten Datenverarbeitung wird dadurch allerdings nicht berührt.</p>
      </div>

      <div class="cookie-actions" role="group" aria-label="Cookie Aktionen">
        <button class="btn btn-ghost" @click="setConsent('none')">Alle ablehnen</button>
        <button class="btn btn-primary" @click="setConsent('all')">Alle akzeptieren</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cookie-banner {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 16px;
  background: rgba(0,0,0,0.35);
}
.cookie-inner {
  width: 100%;
  max-width: 720px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 40px rgba(10,10,10,0.18);
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: stretch;
  padding: 20px;
}
.cookie-text { font-size: 0.95rem; color: var(--neutral-dark); }
.cookie-text h3 { margin: 0 0 8px 0; color: var(--primary); }
.cookie-actions { display: flex; gap: 10px; align-items: center; justify-content: center; margin-top: 8px; }
.btn { padding: 10px 18px; border-radius: 8px; border: none; cursor: pointer; font-weight: 600 }
.btn-ghost { background: transparent; color: var(--neutral-dark); border: 1px solid rgba(0,0,0,0.08) }
.btn-primary { background: var(--primary); color: #fff }
.btn-primary:hover { background: var(--primary-hover) }
</style>
