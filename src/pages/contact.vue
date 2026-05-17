<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const name = ref('')
const email = ref('')
const message = ref('')

const route = useRoute()
const plan = ref(route.query.plan || '')

onMounted(() => {
  if (plan.value) {
    message.value = `Ich interessiere mich für das ${plan.value} Paket. Bitte kontaktieren Sie mich mit Informationen zu Preisen, Integration und Vertragsdetails.`
  }
})

const mailtoHref = computed(() => {
  const subj = `${plan.value ? plan.value + ' Paket - ' : ''}Kontaktanfrage von ${name.value || ''}`.trim()
  const body = `Name: ${name.value}\nE-Mail: ${email.value}\nNachricht: ${message.value}`
  return `mailto:hello@credocheck.example?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`
})
</script>

<template>
  <main class="contact-page">
    <h1>Kontakt</h1>
    <section>
      <form
        class="contact-form"
        :action="mailtoHref"
        method="POST"
        enctype="text/plain"
      >
        <label for="name">Name</label>
        <input id="name" v-model="name" name="name" type="text" required autocomplete="name" />

        <label for="email">E-Mail</label>
        <input id="email" v-model="email" name="email" type="email" required autocomplete="email" />

        <label for="message">Nachricht</label>
        <textarea id="message" v-model="message" name="message" rows="5" required></textarea>

        <button type="submit">Absenden</button>
      </form>

      <div class="contact-meta">
        <p class="form-note">Durch das Absenden wird Ihr E-Mail-Programm geöffnet.</p>
        <p>Alternativ: Schreiben Sie direkt an <a href="mailto:hello@credocheck.example">hello@credocheck.example</a>.</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-page {
  font-family: var(--font-sans);
  color: var(--neutral-dark);
  padding: var(--spacing-lg) var(--spacing-md);
  width: 100%;
}
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  background: #fff;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}
.contact-page h1 {
  font-size: 2rem;
  margin: 0 auto var(--spacing-md);
  max-width: 600px;
  text-align: left;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  background: #fff;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}
.contact-form label {
  font-weight: bold;
}
.contact-form input,
.contact-form textarea {
  font-family: var(--font-sans);
  border: 1px solid var(--neutral-dark);
  border-radius: var(--radius-sm);
  padding: var(--spacing-xs);
  font-size: 1rem;
}
.contact-form button {
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: var(--radius-md);
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: var(--spacing-sm);
  box-shadow: var(--shadow-sm);
}
.contact-form button:hover {
  background: var(--primary-hover);
}
.form-note {
  font-size: 0.95em;
  color: var(--info);
  margin-bottom: var(--spacing-xs);
}
.contact-meta {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}
.contact-page a {
  color: var(--primary);
  text-decoration: underline;
}
</style>
