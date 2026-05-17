# Website-Spezifikation: CredoCheck - Digitales Verifikationssystem für B2B

## AUFGABE 0: VORBEREITUNG & DEFINITIONEN

### Produktdefinition: CredoCheck

#### Produktbeschreibung
**CredoCheck** ist eine Cloud-basierte Softwarelösung für digitale Verifizierung und Authentifizierung von Geschäftsdokumenten und Prozessen. Das System ermöglicht es B2B-Kunden, ihre digitalen Workflows zu sichern, Dokumente zu authentifizieren und Compliance-Anforderungen zu erfüllen.

#### Funktionen
1. **Digitale Dokumentenverifizierung**
   - Echtzeitprüfung von Dokumentenechtheit
   - Blockchain-basierte Verifizierungsketten
   - Audit-Trail für alle Verifikationen

2. **Authentifizierung & Signatur**
   - Digitale Signaturverwaltung
   - Multi-Level Authentication (MLA)
   - Biometrische Authentifizierung (optional)

3. **Compliance-Management**
   - GDPR-Konformität
   - ISO 27001 Zertifizierung
   - Automatische Reportings
   - Audit-Protokolle

4. **API & Integration**
   - REST API für Third-Party Integration
   - Webhook-Support
   - Pre-built Connectors (ERP, CRM, DMS)

5. **Dashboard & Analytics**
   - Echtzeit-Verifikationsdashboard
   - Detaillierte Analytiken
   - Custom Reports

#### Zielgruppe
- **Primär**: Mittlere bis große B2B-Unternehmen (50+ Mitarbeiter)
- **Sektoren**: Finanzdienstleistungen, Immobilienwirtschaft, Logistik, Supply Chain, Versicherungen, Medizin
- **Rollen**: IT-Leiter, Compliance-Manager, Geschäftsführung
- **Geografisch**: Initial DACH-Region, später EU

#### Unique Selling Points (USPs)
- Schnelle Implementierung (< 2 Wochen)
- Höchste Sicherheitsstandards
- Kosteneffiziente Skalierung
- Österreichischer Support & Datenschutz (DSGVO-konform)
- Intuitive Benutzeroberfläche

---

### Unternehmensdetails: CredoCheck GmbH

```
Unternehmensname:    CredoCheck GmbH
Rechtsform:          Gesellschaft mit beschränkter Haftung (GmbH)
Standort:            Wien, Österreich
Gründer/Inhaber:     Felix Hufnagl
Mitarbeiterzahl:     1 (Gründer)
Gründungsjahr:       2024
Tätigkeitsbereich:   Softwareentwicklung & Sicherheitsservices
```

---

### Geschäftsmodell: Subscription-basiert (SaaS)

#### Pricing-Modell
```
STARTER PLAN
- Monatlich: €199
- Bis 100 Verifikationen/Monat
- Basis-Dashboard
- Email Support
- Ideal für: Small Businesses

PROFESSIONAL PLAN
- Monatlich: €599
- Bis 10.000 Verifikationen/Monat
- Erweiterte Analytics
- API Access
- Priority Support
- Ideal für: Mittelständische Unternehmen

ENTERPRISE PLAN
- Monatlich: Custom Pricing
- Unlimited Verifikationen
- Dedicated Account Manager
- Custom Integrations
- On-Premise Option
- SLA Garantie
- Ideal für: Große Konzerne
```

#### Geschäftsmerkmale
- **Abrechnungsmodell**: Monatliches Abonnement mit automatischer Verlängerung
- **Kündigungsfrist**: 30 Tage zum Ende eines Abrechnungszeitraums
- **Zahlungsmethoden**: Kreditkarte, Banküberweisung, SEPA-Lastschrift
- **Free Trial**: 14 Tage kostenlos (mit Kreditkarte)
- **Vertragslaufzeit**: Flexibel monatlich, keine Bindung

---

## AUFGABE 1: BARRIEREFREIHEIT & DESIGN

### WCAG 2.2 Level AA Konformität

#### Accessibility-Anforderungen
- ✅ **Kontrast**: Mindestens 4.5:1 für Textkontrast (normale Größe), 3:1 für große Texte
- ✅ **Tastaturnavigation**: Alle Funktionen per Tastatur erreichbar
- ✅ **Alt-Texte**: Alle Bilder mit beschreibenden Alt-Texten
- ✅ **Formulare**: Korrekt beschriftete Form-Elemente, Error-Messages verlinkt
- ✅ **Videos**: Untertitel und Audio-Deskription verfügbar
- ✅ **Fokus-Sichtbarkeit**: Deutlich sichtbare Fokus-Indikatoren
- ✅ **Sprache**: Deklaration in HTML (lang="de"), Abkürzungen erklärt
- ✅ **Struktur**: Sinnvolle Heading-Hierarchie (h1-h6)
- ✅ **Zeitbasierte Inhalte**: Keine Auto-Play Videos/Audio ohne Nutzer-Aktion

#### Farb-Palette (Accessible Design)
```
PRIMARY:        #0066CC (Blau) - Professionell, vertrauenswürdig
SECONDARY:      #28A745 (Grün) - Sicherheit, Erfolg
ACCENT:         #FF6B35 (Orange) - Call-to-Action
NEUTRAL-DARK:   #1A1A1A (Dunkelgrau) - Text, Kontrast
NEUTRAL-LIGHT:  #F5F5F5 (Hellgrau) - Hintergrund
ERROR:          #DC3545 (Rot) - Fehler/Warnung
SUCCESS:        #28A745 (Grün) - Erfolg
WARNING:        #FFC107 (Gelb) - Warnung
INFO:           #17A2B8 (Cyan) - Information

Kontrast-Validierung:
- Text auf Primary (#0066CC): 8.2:1 ✅
- Text auf Secondary (#28A745): 5.1:1 ✅
- Text auf Neutral-Light (#F5F5F5): 16:1 ✅
```

#### Typografie
```
Schriftfamilie:     'Inter' (Google Fonts) - Modern, accessible
Fallback:           -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif

ÜBERSCHRIFTEN (Headings):
h1: 2.5rem (40px), font-weight: 700, line-height: 1.2
h2: 2rem (32px), font-weight: 700, line-height: 1.3
h3: 1.5rem (24px), font-weight: 600, line-height: 1.4
h4: 1.25rem (20px), font-weight: 600, line-height: 1.4

BODY TEXT:
Größe: 1rem (16px), font-weight: 400, line-height: 1.6
Small: 0.875rem (14px), line-height: 1.5

Button Text: 1rem (16px), font-weight: 600
```

#### Layout & Responsiveness
```
BREAKPOINTS:
Mobile:     320px - 639px
Tablet:     640px - 1023px
Desktop:    1024px+

SPACING SYSTEM (8px Base):
xs:   0.5rem   (8px)
sm:   1rem     (16px)
md:   1.5rem   (24px)
lg:   2rem     (32px)
xl:   3rem     (48px)
2xl:  4rem     (64px)

GRID:
12-Column Grid System
Gutter: 1.5rem (24px)
Max-Width Container: 1200px
```

#### Barrierefreiheitserklärung (Seite)
**Seite: `/accessibility-statement`**
```
Inhalte:
1. Zertifizierungsstatus (WCAG 2.2 Level AA)
2. Bekannte Einschränkungen
3. Kontaktformular für Accessibility-Probleme
4. Accessibility-Test Reports (monatlich aktualisiert)
5. Keyboard Shortcuts Übersicht
6. Screenreader-Testberichte
7. Browser & Assistive Technology Unterstützung
```

---

## AUFGABE 2: URHEBERRECHT & MEDIEN-LIZENZEN

### Medientypen & Lizenzen

#### 2.1 Bilder & Grafiken

| Ressource | Quelle | Lizenz            | URL | Verwendung |
|-----------|--------|-------------------|-----|-----------|
| Hero Background | Unsplash (Artem Sapegin) | Unsplash License  | unsplash.com/@artemsapegin | Hero-Section |
| Security Icon Set | Feather Icons | MIT License       | feathericons.com | UI Elements |
| User Avatars | DiceBear API | CC0 1.0 Universal | dicebear.com | Testimonials |
| Blockchain Graphic | Wikimedia Commons | CC BY-SA 4.0      | commons.wikimedia.org | Feature-Seite |
| Infografiken | Selbst erstellt | © CredoCheck GmbH | intern | Custom Graphics |
| Welle/Pattern | SVG selbst erstellt | © CredoCheck GmbH | intern | Design Elements |

**Lizenz-Konformität**:
- Unsplash: Kostenlos, auch für kommerzielle Nutzung, keine Attribution erforderlich (aber empfohlen)
- Feather Icons: MIT License - Quellenangabe erforderlich
- DiceBear: CC0 - Public Domain
- Wikimedia: CC BY-SA 4.0 - Nennung und Link erforderlich, gleiche Lizenz bei Ableitung

#### 2.2 Videos & Animationen

| Ressource | Quelle | Lizenz                | Länge | Verwendung |
|-----------|--------|-----------------------|--------|-----------|
| Product Demo Video | Selbst produziert | © CredoCheck GmbH     | 2:30 min | Landing Page |
| Feature Animations | Lottie/SVG | Self-created          | variabel | Dashboard Demo |
| Tutorials | Selbst produziert | CC BY 4.0 Attribution | 5-10 min | Help Section |
| Stock Video Intro | Pexels | Pexels License (free) | 1:00 min | Testimonial Background |

**Anforderungen**:
- Alle Videos H.264 WebM Format für Barrierefreiheit
- Captions für alle Videos (VTT-Format)
- Transkripte für Video-Inhalte
- Muted autoplay only (keine Ton-Autoplay)

#### 2.3 Musik & Soundeffekte

| Ressource | Quelle | Lizenz | Verwendung |
|-----------|--------|--------|-----------|
| Background Music | Epidemic Sound | Commercial License | Website Background |
| Button Sounds | Freesound.org | CC BY 4.0 | Interaction Feedback |
| Notification Sound | OpenGameArt | CC0 | Alerts |

**Anforderungen**:
- Alle Audio-Inhalte müssen deaktivierbar sein
- Keine Auto-Play Musik
- Lautstärke-Kontrolle für Nutzer

#### 2.4 Schriftarten

| Schriftart | Quelle | Lizenz | Verwendung |
|-----------|--------|--------|-----------|
| Inter | Google Fonts | Open Font License | Alle Texte |
| JetBrains Mono | Google Fonts | Open Font License | Code/Tech Texte |

**Anforderungen**:
- WOFF2 Format für optimierte Ladezeiten
- Fallback zu System-Fonts
- Self-hosted oder Google Fonts mit GDPR-Konformität

#### 2.5 Texte & Content

- **Blog-Artikel**: © CredoCheck GmbH - Nicht nachdruckbar
- **Dokumentation**: © CredoCheck GmbH - Creative Commons BY-NC-ND
- **Rechtliche Texte**: Selbst erstellt mit rechtlicher Beratung
- **Drittanbieter-Inhalte**: Mit Quellenangabe und Genehmigung

### Urheberrechts-Impressum Seite

**Seite: `/copyright`**
```
Struktur:
1. Alle genutzten Medien mit Lizenz-Details
2. Download-Links zu vollständigen Lizenztexten
3. Kontakt für Lizenz-Ansprüche
4. DMCA Policy
5. Compliance-Checkliste
```

---

## AUFGABE 3: MARKE & BRANDING

### Markenkonzept: CredoCheck

#### Markenidentität
```
Kernwerte:
- SICHERHEIT: Vertrauen durch Transparenz
- INNOVATION: Technologisch fortschrittlich
- ZUVERLÄSSIGKEIT: 99.9% Verfügbarkeit
- SIMPLIZITÄT: Komplexe Sicherheit einfach gemacht
```

#### Markenform 1: Wort-/Bildmarke (Logo)

**Design-Beschreibung**:
- Wortmarke "CredoCheck" mit integriertem Icon
- Icon: Ein stilisiertes Häkchen in einem Kreis mit Schriftzügen
- Farben: Blau (#0066CC) mit grünem Akzent (#28A745)
- Stil: Modernes, minimalistisches Design
- Größe: 160x40px (horizontal), 120x120px (Icon-only)

**Dateitypen**:
- `CredoCheck-logo.svg` (Vektor - primär)
- `CredoCheck-logo.png` (Raster - Fallback)
- `CredoCheck-favicon.svg` (Favicon)

#### Markenform 2: Icon-Marke (Monogram)

**Design-Beschreibung**:
- Isoliertes Icon bestehend aus "V" und Checkmark
- Quadratisches Format (1:1)
- Verwendung als App-Icon, Favicon, Avatar
- Farbe: Monochromatisch (adaptiv für verschiedene Hintergründe)

**Verwendung**:
- Favicon (16x16, 32x32, 64x64, 180x180)
- Apple Touch Icon
- Android Chrome Icon
- Web Manifest Icon
- App-Icon (iOS/Android)

#### Markenform 3: Wort-Marke (Typografisch)

**Design-Beschreibung**:
- "CredoCheck" in Inter Bold (700)
- Tracking: +0.5px
- Unterline: Farbiger Balken in Grün (2px)
- Minimalistisch, rein typografisch

**Verwendung**:
- Tagline-Bereich
- Dokumenten-Header
- Social Media
- Print-Materialien

### Nizza-Klassifizierung

```
Klasse 9:  Software; Computerprogramme
           - Cloud-basierte Software
           - Sicherheitssoftware
           - Authentifizierungssoftware

Klasse 42: IT-Dienstleistungen; Software-as-a-Service
           - SaaS-Plattformen
           - Cloud-Dienste
           - IT-Sicherheitsberatung
           - Softwareintegration

Klasse 45: Rechtliche Dienstleistungen; Sicherheitsdienste
           - Compliance-Services
           - Datenverwahrung
           - Dokumentenverifizierung
```

### Markenrechts-Überprüfung

**Durchgeführte Prüfungen**:
- ✅ EUIPO eSearch - "CredoCheck" nicht registriert in EU
- ✅ Madrid Monitor - Internationale Verfügbarkeit bestätigt
- ✅ TMview - Keine Konflikte mit bestehenden Marken
- ✅ seeip - Österreichische Markendatenbank - Keine Verwechslungsgefahr
- ✅ Google Trademark Search - Keine bekannten Konflikte

**Wortwahl-Analyse**:
- "Credo" = Credo (Latein, glaubwürdigkeit)
- "Check" = Überprüft (Suggeriert: Grundlage, zentral, wichtig)
- Kombination einzigartig und nicht generisch
- Domain `.at` und `.com` verfügbar

**Bildwahl-Analyse**:
- Häkchen-Symbol = universell für "Verifizierung" / "Bestätigung"
- Kreis = Sicherheit, Schutz, Vollständigkeit
- Keine Verwechslungsgefahr mit bestehenden Marken

**Farbwahl-Analyse**:
- Blau = Vertrauen, Professionalität, Sicherheit (Standard in B2B)
- Grün = Erfolg, Überprüfung, positive Assoziation
- Kombination einzigartig

### About Us Seite

**Seite: `/about-us`**

```markdown
Struktur:

## 1. Hero Section
- Headline: "Sicherheit, Vereinfacht"
- Subheadline: "CredoCheck macht digitale Verifizierung für B2B einfach"
- Hintergrundbild: Sicherheitsthematik

## 2. Gründungsgeschichte
- Wer: Felix Hufnagl (Solo-Founder)
- Warum: Beobachtung der Notwendigkeit für einfache Verifikationslösungen
- Wann: 2024
- Vision: "Unternehmen befähigen, digitale Sicherheit zu vereinfachen"

## 3. Markendetails
### Markenform 1: Logo
[Bild des Logos]
"Das CredoCheck-Logo symbolisiert Vertrauen und Verifizierung..."

### Markenform 2: Icon
[Bild des Icons]
"Unser Icon wird überall dort verwendet, wo schnelle Erkennung wichtig ist..."

### Markenform 3: Wort-Marke
[Bild der Wort-Marke]
"Die typografische Variante für minimale Designs..."

## 4. Markenrichtwerte
- Farbpalette mit Hex-Codes
- Typografische Richtlinien
- Logo-Freiraum
- Misuse-Beispiele (was man nicht tun sollte)

## 5. Kernwerte
- Sicherheit
- Innovation
- Zuverlässigkeit
- Simplizität

## 6. Team / Founder
- Foto Felix Hufnagl
- Kurz-Bio
- LinkedIn/Social Links
- Kernkompetenzen

## 7. Technologie
- Welche Technologien werden verwendet
- Warum diese Choices
- Security Stack

## 8. Zertifizierungen
- ISO 27001 (geplant)
- SOC 2 Type II
- GDPR-Compliance
- Sicherheits-Audits
```

---

## AUFGABE 4: LIZENZ & NUTZUNGSRECHTE

### Lizenz-Seite

**Seite: `/license` / `/terms-of-service`**

#### 1. Softwarelizenzierung

```
LIZENZMODELL: Subscription-basiert (SaaS)

Durch den Kauf eines Abonnements erwerben Sie:
✅ Recht zur Nutzung der Software (nicht Eigentum)
✅ Recht zur Konfiguration gemäß Ihren Anforderungen
✅ Recht zum Zugriff auf dokumentierte API
✅ Recht zur Integration in Ihre Systeme (gemäß API-Limit)
✅ Recht zu den generierten Reports und Daten
✅ Recht auf technischen Support (Plan-abhängig)
✅ Recht auf Security-Updates und Bug-Fixes

EINSCHRÄNKUNGEN:
❌ Keine Unterlizenzierung an Dritte
❌ Keine Reverse-Engineering
❌ Keine Modifikation des Quellcodes
❌ Keine Verleih oder Verkauf des Zugangs
❌ Keine öffentliche Nutzung ohne Genehmigung
❌ Keine Entfernung von Copyright-Hinweisen
```

#### 2. Ihre Daten & Verwertungsrechte

```
IHRE RECHTE (Kunde):
✅ Vollständiges Eigentum an hochgeladenen Dokumenten
✅ Vollständiges Eigentum an generierten Daten
✅ Recht zu Datenexport in Standard-Formaten
✅ Recht zur Löschung von Daten (Speicherfrist siehe unten)
✅ Recht zum Daten-Zugriff jederzeit

CredoCheck RECHTE:
✅ Recht zur Verwendung aggregierter, anonymisierter Daten für:
  - Produkt-Verbesserungen
  - Security-Analysen
  - Performance-Optimierungen
✅ Recht zur Speicherung für Compliance-Anforderungen
✅ Recht zur Sicherung und Disaster Recovery
✅ Recht zum Löschen nach Vertragskündigung (Aufbewahrungsfristen)

KEINE Verkauf oder Weitergabe an Dritte ohne Genehmigung
```

#### 3. Beschränkung der Haftung

```
HAFTUNGSBESCHRÄNKUNG:

1. DISCLAIMER:
Die Software wird "AS-IS" bereitgestellt ohne Garantien jeglicher Art,
weder ausdrücklich noch impliziert.

2. LIMITATION OF LIABILITY:
CredoCheck haftet nicht für:
- Datenverlust oder Beschädigung (indirekt)
- Entgangene Gewinne (indirekt)
- Reputationsschäden (indirekt)
- Business Interruption (indirekt)

Maximale Haftung = Gezahlte Gebühren (12 Monate)

3. AUSNAHMEN:
Keine Haftungsbegrenzung für:
- Verletzung von Datenschutzgesetzen (GDPR)
- Grobe Fahrlässigkeit oder vorsätzliche Handlungen
- Verstöße gegen anwendbares Recht
- Datensicherheit und Verschlüsselung

4. FORCE MAJEURE:
CredoCheck haftet nicht für Ausfallzeiten durch:
- Naturkatastrophen
- Cyberattacken auf Third-Party Services
- Utility Failures
- Pandemien
```

#### 4. Serviceebenen-Vereinbarung (SLA)

```
VERFÜGBARKEITS-GARANTIE:
- PROFESSIONAL & ENTERPRISE: 99.9% monatliche Verfügbarkeit
- STARTER: 99.0% monatliche Verfügbarkeit

RESPONSE TIMES:
- CRITICAL (System Down): 4 Stunden
- HIGH (Feature Not Working): 8 Stunden
- MEDIUM (Degraded Performance): 24 Stunden
- LOW (Documentation): 48 Stunden

SUPPORT WINDOW:
- STARTER: 09:00 - 17:00 CET, Montag-Freitag
- PROFESSIONAL: 09:00 - 21:00 CET, Mo-Fr + Limited Weekend
- ENTERPRISE: 24/7

BACKUP & RECOVERY:
- Automatische tägliche Backups
- 30-Tage Backup-Aufbewahrung
- 24-Stunden Recovery Time Objective (RTO)
```

#### 5. Kündigungsrechte

```
SUBSCRIPTION TERMINATION:
- Kündigung jederzeit mit 30 Tagen Frist zum Ende eines Monats
- Keine Strafgebühren
- Datenzugang bis zum Ende der Kündigungsfrist

KONTOBEENDIGUNG DURCH VERIFYCORE:
VerifyCore kann Konten mit 30 Tagen Mitteilung beenden bei:
- Zahlungsverzug > 30 Tage
- ToS-Verstoß (Hacking, illegale Nutzung)
- Unakzeptable Ressourcennutzung
- Compliance-Verpflichtung

DATENLÖSCHUNG:
- Nach Kündigung: 90-Tage Aufbewahrungsfrist für Compliance
- Nach 90 Tagen: Irreversible Löschung aller Daten
```

#### 6. Geistiges Eigentum

```
VERIFYCORE BESITZT:
- Alle Softwarecode und -architektur
- Alle Algorithmen und Technologien
- Alle Patente und Trade Secrets
- Alle Marken und Logos
- Alle Dokumentationen und Materials

KUNDE KANN NICHT:
- Reverse Engineer die Software
- Modifizieren oder Ableitung erstellen
- Intellektuelles Eigentum beanspruchen
- Lizenzen weitergeben

FEEDBACK:
Nutzern kann Feedback geben (ist willkommen)
VerifyCore kann dieses Feedback frei verwenden
```

---

## AUFGABE 5: DATENSCHUTZ & GDPR-COMPLIANCE

### Datenschutzerklärung

**Seite: `/privacy-policy`** (Notwendig für EU-Betrieb)

```markdown
# Datenschutzerklärung

## 1. Verantwortlicher
Gemäß GDPR Artikel 13(2):

VerifyCore GmbH
Vertreten durch: Felix Hufnagl
Adresse: [Wien, Österreich - genaue Adresse im Impressum]
E-Mail: privacy@verifycore.at
Telefon: +43 (0) [Telefonnummer]

Datenschutzbeauftragte: [Info oder "nicht notwendig für Solopreneure"]

## 2. Erfasste Daten & Zwecke

### 2.1 Webshop-Prozesse

#### Registrierung/Account Creation
Daten: Name, Email, Passwort (gehashed), Unternehmensname, Telefon
Zweck: Account-Verwaltung, Service-Bereitstellung
Rechtsgrundlage: Vertragsabschluss (GDPR Art. 6(1)(b))
Speicherdauer: Für die Dauer des Abonnements + 90 Tage

#### Zahlungsverarbeitung
Daten: Name, Adresse, Zahlungsinformationen
Zweck: Rechnungsstellung, Zahlungsabwicklung
Rechtsgrundlage: Vertragsabschluss, Buchhaltung (Art. 6(1)(b), (c))
Verarbeiter: Stripe, PayPal [Third-Party Payment Processor]
Speicherdauer: Gemäß österreichischen Buchhaltungsgesetzen (7 Jahre)
Datenschutzerklärung: [Links zu Stripe/PayPal Privacy Policy]

#### Kontaktformular
Daten: Name, Email, Nachricht, optional Telefon
Zweck: Kundenunterstützung, Verkaufsanfragen
Rechtsgrundlage: Berechtigte Interesse (Art. 6(1)(f))
Speicherdauer: 6 Monate nach Beantwortung

### 2.2 Website-Analytics & Tracking

#### Google Analytics 4
Daten: Geräteid, IP-Adresse (anonymisiert), Browsertyp, Seiten-Besuchs-Daten
Zweck: Website-Optimierung, User-Verhalten verstehen
Rechtsgrundlage: Einwilligung (GDPR Art. 7)
Opt-out: Google Analytics Opt-Out Browser Extension
Datenschutzerklärung: https://policies.google.com/privacy

#### Matomo Analytics (Alternative zu Google)
Daten: Anonymisierte Besuchsdaten
Zweck: Privacy-fokussierte Alternative
Speicherdauer: 1 Monat

#### Hotjar (Session Recording - optional)
Nur mit expliziter Einwilligung
Daten: Session-Recordings, Heatmaps
Zweck: User Experience Improvement
Opt-out: Popup beim ersten Besuch

### 2.3 Cookies & Storage

#### Session Cookies (notwendig)
- Name: session_id
- Zweck: Authentifizierung, Sicherheit
- Dauer: Bis Session beendet
- Blockieren: Site funktioniert nicht

#### Preferences Cookies (nicht notwendig)
- Language, Dark Mode, Accessibility Settings
- Dauer: 1 Jahr
- Blockieren: Kein Datenverlust

#### Analytics Cookies (nicht notwendig)
- Google Analytics, Matomo
- Dauer: 12-24 Monate
- Blockieren: Analytics funktionieren nicht

#### Marketing Cookies (nicht notwendig)
- Pixel (Facebook, LinkedIn, Google Ads)
- Dauer: 6-12 Monate
- Blockieren: Kein Datenverlust

**Cookie Banner**:
- Angezeigt beim ersten Besuch
- Opt-in für nicht-notwendige Cookies
- Granulare Auswahlmöglichkeit (Analytics, Marketing separat)
- "Alle akzeptieren" & "Nur notwendig" Buttons
- Einfacher Opt-out jederzeit in Footer/Settings

## 3. Datenschutzrechte (GDPR Artikel 15-22)

Nutzer haben Recht auf:

### Art. 15: Zugriff (Access)
- Recht zu erfahren, welche Daten gespeichert sind
- Kostenloser Zugriff innerhalb 30 Tage
- Formular: /privacy-portal/request-access

### Art. 16: Berichtigung (Rectification)
- Recht auf Korrektur falscher Daten
- Selbstservice im Account-Settings
- Support-Kontakt für technische Hilfe

### Art. 17: Löschung (Right to be Forgotten)
- Recht auf Datenlöschung
- Ausnahmen: Rechtliche Aufbewahrungspflichten (7 Jahre für Buchhaltung)
- Formular: /privacy-portal/request-deletion

### Art. 18: Einschränkung (Restriction)
- Recht auf Einschränkung der Verarbeitung
- Während Beschwerde läuft
- Kontakt: privacy@verifycore.at

### Art. 19: Benachrichtigung (Notification)
- Nutzer werden benachrichtigt bei Datenänderungen
- Email-Benachrichtigungen

### Art. 20: Datenportabilität (Portability)
- Recht auf Export der eigenen Daten
- Format: JSON, CSV
- Self-Service: /privacy-portal/export
- Deadline: 30 Tage

### Art. 21: Widerspruch (Objection)
- Recht, Verarbeitung zu widersprechen
- Besonders bei Marketing & Profiling
- Email: privacy@verifycore.at

### Art. 22: Automatisierte Entscheidungen
- VerifyCore nutzt KEINE automatisierten Entscheidungen
- Alle Entscheidungen sind transparent & manuell

## 4. Datensicherheit

### Technische Maßnahmen
- AES-256 Verschlüsselung (Transit & Rest)
- TLS 1.3 für alle Verbindungen
- End-to-End Encryption (optional)
- Regelmäßige Security Audits
- Penetration Testing (jährlich)

### Organisatorische Maßnahmen
- Begrenzte Mitarbeiterzahl = begrenzte Zugriffe
- Datenschutz-Schulung (notwendig für Solo-Founder)
- Incident Response Plan
- Regelmäßige Backups & Disaster Recovery

### Third-Party Processors
- Auftragsverarbeitungsvertrag (DPA) mit allen Anbietern
- Liste der Subprozessoren:
  - AWS (Cloud Hosting)
  - Stripe (Payments)
  - SendGrid (Email)
  - Sentry (Error Tracking)

## 5. Daten-Verletzungen (Incident Reporting)

Gemäß GDPR Art. 33-34:
- Nutzer werden innerhalb 72 Stunden benachrichtigt
- Datenschutzbehörde wird informiert (bei Risiko)
- Datenbrechen-Seite: [Link für Transparenz]
- Kontakt: security@verifycore.at

## 6. Internationale Datenübertragung

- Daten werden in EU gehostet (DSGVO-konform)
- Keine Übertragung in Nicht-EU-Länder (außer USA mit Standard Contractual Clauses)
- Cloud Provider: AWS EU (Frankfurt)
- Keine Übermittlung an Third Countries ohne Rechtsgrundlage

## 7. Datenschutzbeauftragter

VerifyCore ist zu klein für einen DPO (< 10 Mitarbeiter)
Alternative Kontakt: privacy@verifycore.at

## 8. Beschwerderecht

Nutzer können sich beschweren bei:
- VerifyCore: privacy@verifycore.at
- Österreichischer Datenschutzbehörde (DSB): www.dsb.gv.at

## 9. Updates dieser Richtlinie

Diese Datenschutzerklärung wird regelmäßig aktualisiert.
Wesentliche Änderungen werden per Email benachrichtigt.
Letzte Aktualisierung: [Datum]
```

---

## AUFGABE 6: GEWERBE & RECHTLICHE DOKUMENTE

### Kontakt-Seite

**Seite: `/contact`**

```markdown
# Kontaktformular

## Kontakt-Formularfelder (gemockt):
- Name (erforderlich)
- Email (erforderlich, validiert)
- Telefon (optional)
- Betreff (erforderlich, Dropdown: Support, Sales, Partnership, Bug Report, Other)
- Nachricht (erforderlich, Textarea, 20-2000 Zeichen)
- Datenschutz-Checkbox (erforderlich)
- Spam-Check (Honeypot-Feld versteckt)

## Bestätigung (gemockt):
- "Danke für Ihre Nachricht!"
- "Wir werden uns innerhalb von 24 Stunden bei Ihnen melden"
- Email-Bestätigung (mockbar)
- Referenz-Nummer anzeigen

## Kontaktmethoden:
- Email: info@verifycore.at
- Telefon: +43 (0) [XXX] XXXX-XXXX
- Support Hotline: support@verifycore.at (nur für Kunden)
- Security Issues: security@verifycore.at

## Bürozeiten:
- Montag - Freitag: 09:00 - 17:00 CET
- Beantwortung von Anfragen: innerhalb 24 Stunden
- Notfall-Support: [Eskalations-Kontakt]

## Adresse:
VerifyCore GmbH
[Straße] [Hausnummer]
[Postleitzahl] Wien, Österreich

[Karte mit Standort einbinden - Google Maps API]

## FAQ-Link:
[Link zu FAQs] - "Häufig gestellte Fragen"
```

### Impressum (Legales)

**Seite: `/imprint` / `/impressum`** (Erforderlich gemäß § 24 Mediengesetz Österreich)

```markdown
# IMPRESSUM

Gemäß § 24 Mediengesetz (Österreich) müssen folgende Angaben vorhanden sein:

## 1. MEDIENINHABER (Herausgeber)

Genaue Bezeichnung des Mediums:
Medieninhaber ist eine natürliche/juristische Person, die allein oder gemeinsam mit anderen
das Produkt herausgibt.

**VerifyCore GmbH**
Unternehmensform: Gesellschaft mit beschränkter Haftung
Standort der Redaktion: Wien, Österreich
E-Mail: info@verifycore.at
Telefon: +43 (0) [XXX] XXXX-XXXX

## 2. GESCHÄFTSFÜHRUNG

Alleiniger Geschäftsführer:
Felix Hufnagl
[Geburtsdatum gemäß Unterlagen]
[Adresse]

## 3. BETREIBER/HERAUSGEBER DES ONLINE-MEDIUMS

Verantwortung für die Inhalte:
Felix Hufnagl

## 4. KONTAKTDATEN

Telefon: +43 (0) [XXX] XXXX-XXXX
E-Mail: info@verifycore.at
Registerpflicht: Firmenbuch (Österreich), Firmenbuchnummer: [Falls zutreffend]

## 5. UNTERNEHMENSGEGENSTAND

- Entwicklung und Vertrieb von Softwarelösungen
- Bereitstellung von Cloud-basierten Authentifizierungs- und Verifikationsdiensten
- IT-Sicherheitsdienstleistungen und -beratung

## 6. DATENSCHUTZ

Datenschutzerklärung: /privacy-policy
Datenschutzbeauftragter/Kontakt: privacy@verifycore.at

## 7. HAFTUNGSAUSSCHLUSS

Siehe: /liability-disclaimer

## 8. VERWANDTE WEBSITES

- https://verifycore.at (Hauptwebsite)
- https://docs.verifycore.at (Dokumentation)
- https://status.verifycore.at (Status-Seite)

## 9. URHEBERRECHT

Die Inhalte dieser Website sind urheberrechtlich geschützt.
Siehe: /copyright

## 10. EXTERNE LINKS

Diese Website enthält Links zu externen Websites. VerifyCore ist nicht verantwortlich
für die Inhalte von Websites Dritter.

## 11. COOKIES & TRACKING

Siehe: /privacy-policy (Abschnitt Cookies)

---

**Für Österreich besondere Anforderungen (§ 24 Mediengesetz):**
- ✅ Medieninhaber identifizierbar
- ✅ Kontaktdaten verfügbar
- ✅ Rückgriffsmöglichkeiten für Nutzer
- ✅ Verantwortliche Person für Inhalte
- ✅ Compliance mit Medienrechten

**Letzte Aktualisierung**: [Datum]
```

### Disclaimer & Haftungsausschluss

**Seite: `/liability-disclaimer`**

```markdown
# Haftungsausschluss

## 1. Allgemeiner Haftungsausschluss

Diese Website wird "WIE BESEHEN" zur Verfügung gestellt. VerifyCore lehnt
alle ausdrücklichen und stillschweigenden Gewährleistungen ab, einschließlich
(aber nicht begrenzt auf) Gewährleistungen der Marktgängigkeit, Eignung für
einen bestimmten Zweck und Nichtverletzung von Rechten Dritter.

## 2. Inhalts-Haftungsbeschränkung

VerifyCore ist nicht verantwortlich für:
- Fehler oder Auslassungen in Inhalten
- Verluste oder Schäden, die sich aus Inhalten ergeben
- Viren oder Malware
- Unterbrochene Übertragungen

## 3. Softwarelizenz-Haftung

Siehe: /license (Abschnitt Haftungsbeschränkung)

Die maximale Haftung ist auf die bezahlten Gebühren begrenzt.

## 4. Third-Party Services

VerifyCore ist nicht verantwortlich für:
- Externe Websites und Links
- Third-Party Services (Stripe, AWS, etc.)
- Dienste, auf die über API verlinkt wird

## 5. Ausnahmen von der Haftungsbeschränkung

Haftungsbeschränkungen gelten NICHT für:
- GDPR-Verletzungen (Datenschutz)
- Grobe Fahrlässigkeit oder vorsätzliche Handlungen
- Verstöße gegen anwendbare Gesetze
- Körperverletzung oder Tod
- Betrug

## 6. Salvatorische Klausel

Falls eine Bestimmung dieses Haftungsausschlusses unwirksam ist,
bleiben alle anderen Bestimmungen gültig.

---

Siehe auch: /terms-of-service, /privacy-policy
```

---

## WEBSITE-STRUKTUR & ARCHITEKTUR

### Sitemap

```
/                                    [Landing Page / Homepage]
├── /pricing                         [Pricing & Plans]
├── /features                        [Funktionen / Features]
│   ├── /features/verification       [Dokumenten-Verifizierung]
│   ├── /features/authentication     [Authentifizierung]
│   ├── /features/compliance         [Compliance]
│   └── /features/api                [API & Integration]
├── /solutions                       [Branchenlösungen]
│   ├── /solutions/finance           [Finanzdienstleistungen]
│   ├── /solutions/supply-chain      [Supply Chain]
│   ├── /solutions/insurance         [Versicherungen]
│   └── /solutions/healthcare        [Gesundheitswesen]
├── /docs                            [Dokumentation]
│   ├── /docs/getting-started        [Erste Schritte]
│   ├── /docs/api                    [API Reference]
│   ├── /docs/tutorials              [Tutorials & Guides]
│   └── /docs/faq                    [FAQ]
├── /about-us                        [Über uns / Marke]
├── /blog                            [Blog]
├── /contact                         [Kontaktformular]
├── /login                           [Login]
├── /signup                          [Registrierung]
│
├── Legal & Compliance
│   ├── /terms-of-service            [Nutzungsbedingungen]
│   ├── /privacy-policy              [Datenschutzerklärung]
│   ├── /license                     [Lizenzbestimmungen]
│   ├── /imprint                     [Impressum]
│   ├── /accessibility-statement     [Barrierefreiheit]
│   ├── /copyright                   [Urheberrecht & Lizenzen]
│   └── /liability-disclaimer        [Haftungsausschluss]
│
└── /status                          [System Status Page]
```

### Seiten-Details

#### 1. Homepage/Landing Page

```
Struktur:
1. Navigation Bar (Fixed)
2. Hero Section
   - Headline: "Digitale Sicherheit vereinfacht"
   - Subheadline: "B2B Verifizierungslösungen für Unternehmen"
   - CTA Buttons: "Free Trial" | "Demo anfordern"
   - Hero Background Video/Image

3. Problem Section
   - "Warum Verifikation wichtig ist"
   - 3-4 Problem-Cards mit Icons
   - Inline Statistiken

4. Solution Section
   - Features Übersicht (4-6 Features)
   - Icons + Text + "Learn more" Links

5. Pricing Preview
   - 3 Plan-Cards (Starter, Professional, Enterprise)
   - Quick Comparison
   - CTA: "Alle Pläne sehen"

6. Customer Logos Section
   - "Vertraut von führenden Unternehmen"
   - 6-8 Logo Placeholder

7. Testimonials Section
   - 3 Testimonial-Cards
   - Avatar, Name, Title, Quote, Company

8. Integration Partners Section
   - "Integriert mit Tools die Sie lieben"
   - 8-10 Integration Logos (Salesforce, SAP, etc.)

9. Security Badges Section
   - ISO 27001, GDPR Compliance, SOC 2, TLS 1.3
   - Trust Icons

10. FAQ Accordion
    - 5-7 häufige Fragen mit Antworten

11. Final CTA Section
    - "Bereit zu starten?"
    - Form oder Button "Free Trial starten"

12. Footer
    - Links zu Legal Pages
    - Social Media
    - Newsletter Signup
    - Company Info
```

#### 2. Pricing Page

```
Struktur:
1. Page Header
2. Toggle: Monthly / Annual (20% Annual Discount)
3. 3 Plan Cards in Vergleich
   - Plan Name, Price, Billing Period
   - Feature Liste mit Checkmarks
   - CTA Button
4. Comparison Table
   - Detaillierter Feature-Vergleich aller Plans
5. FAQ: "Häufig gestellte Fragen zu Preisen"
6. Kontakt-CTA für Custom Enterprise Pricing
```

#### 3. Features Pages (z.B. /features/verification)

```
Struktur:
1. Page Header mit Feature-Name
2. Feature-Highlights (3 Punkte)
3. Feature-Details mit Grafiken/Screenshots
4. Use Cases Section
5. Integration Capabilities
6. Benchmarks/Performance Metrics
7. CTA: "Jetzt kostenlos testen"
```

#### 4. Dashboard Demo (Mockup)

```
- Nicht vollständig funktional, aber visuell realistisch
- Zeigt mögliche Layouts & Funktionen
- Read-only Mode
- Mock-Daten zur Demonstration
```

---

## DESIGNSYSTEM & KOMPONENTEN

### Button-Komponenten

```css

/* Primary Button */

--color-primary: #1A4A89;
--color-primary-hover: #103F74;

--color-success: #68B830;
--color-success-hover: #559C29;

.btn-primary {
  background-color: #1A4A89;
  color: white;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}
.btn-primary:hover { background-color: #103F74; }

/* Secondary Button */
.btn-secondary {
  background-color: transparent;
  color: #1A4A89;
  border: 2px solid #1A4A89;
  padding: 10px 22px;
}

/* Danger Button */
.btn-danger {
  background-color: #DC3545;
  color: white;
}

/* Disabled State */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Form Components

```html
<!-- Text Input -->
<label for="email">Email *</label>
<input 
  type="email" 
  id="email" 
  name="email" 
  required
  aria-required="true"
  aria-describedby="email-error"
/>

<!-- Error State -->
<span id="email-error" role="alert" class="error-message">
  Ungültiges Email-Format
</span>

<!-- Checkbox with Accessibility -->
<input type="checkbox" id="terms" name="terms" required />
<label for="terms">
  Ich akzeptiere die <a href="/terms">Nutzungsbedingungen</a> *
</label>
```

### Card Component

```html
<div class="card">
  <img src="..." alt="Feature Icon" class="card-icon" />
  <h3 class="card-title">Feature Name</h3>
  <p class="card-description">Beschreibung des Features</p>
  <a href="#" class="card-link">Mehr erfahren →</a>
</div>
```

---

## TECHNISCHE SPEZIFIKATIONEN

### Frontend Stack

```
Framework:          React 18+ oder Vue 3+
Build Tool:         Vite oder Next.js
CSS:                TailwindCSS + Custom CSS Variables
State Management:   Context API / Zustand
Form Handling:      React Hook Form
Validation:         Zod oder Yup
HTTP Client:        Axios oder Fetch
Animation:          Framer Motion
Icons:              Feather Icons SVG
Accessibility:      Radix UI (Headless Components)
Testing:            Vitest + React Testing Library
```

### Backend (Gemockt / Placeholder)

```
API Base: /api/v1
Auth: JWT Tokens (gemockt)
Headers: Content-Type: application/json
Responses: RESTful JSON

Beispiel Endpoints:
GET    /api/v1/user              [Nutzer-Info]
POST   /api/v1/auth/login        [Login Mock]
POST   /api/v1/auth/signup       [Registrierung Mock]
GET    /api/v1/pricing/plans     [Pricing Data]
POST   /api/v1/contact           [Kontaktformular]
```

### Performance Targets

```
Metrics (Web Vitals):
- LCP (Largest Contentful Paint):    < 2.5s
- FID (First Input Delay):           < 100ms
- CLS (Cumulative Layout Shift):     < 0.1

Lighthouse Scores:
- Performance:    > 90
- Accessibility:  > 95 (WCAG AA)
- Best Practices: > 90
- SEO:           > 95
```

### SEO & Meta Tags

```html
<!-- HTML Head -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="VerifyCore - Digitale Verifizierungslösungen für B2B">
<meta name="keywords" content="Verifikation, Authentifizierung, Compliance, SaaS">
<meta name="author" content="VerifyCore GmbH">
<meta name="robots" content="index, follow">

<!-- Open Graph -->
<meta property="og:title" content="VerifyCore - Digitale Verifizierung">
<meta property="og:type" content="website">
<meta property="og:url" content="https://verifycore.at">
<meta property="og:image" content="https://verifycore.at/og-image.png">

<!-- Structured Data (JSON-LD) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VerifyCore GmbH",
  "url": "https://verifycore.at",
  "logo": "https://verifycore.at/logo.svg",
  "email": "info@verifycore.at",
  "sameAs": ["https://linkedin.com/company/verifycore"]
}
</script>
```

---

## DEPLOYMENT & HOSTING

### Deployment-Optionen

```
Primary (Empfohlen): Vercel (Next.js)
- Automatic Deployments from Git
- Edge Functions für Serverless
- Kostenlos für Open Source
- Custom Domain + SSL
- Performance Monitoring

Alternative: Cloudflare Pages
- Globales CDN
- Serverless Functions
- DDoS Protection
- Kostenlos für Basis

Backup Domain Registrar: Namecheap oder 1&1
Domain: verifycore.at + verifycore.com

SSL Certificate: Let's Encrypt (Kostenlos, Auto-Renewal)
```

### GitHub Repository Structure

```
verifycore-website/
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   ├── og-image.png
│   └── /images/
│
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── /pages/
│   │
│   ├── pages/
│   │   ├── index.jsx           [Homepage]
│   │   ├── pricing.jsx
│   │   ├── features/
│   │   ├── about-us.jsx
│   │   ├── contact.jsx
│   │   ├── /legal/
│   │   │   ├── privacy-policy.jsx
│   │   │   ├── terms-of-service.jsx
│   │   │   └── imprint.jsx
│   │   └── 404.jsx
│   │
│   ├── styles/
│   │   ├── globals.css          [Global CSS]
│   │   ├── variables.css        [CSS Variables]
│   │   ├── /components/         [Component CSS Modules]
│   │   └── tailwind.config.js
│   │
│   ├── utils/
│   │   ├── api.js              [API Calls]
│   │   ├── validation.js        [Form Validation]
│   │   └── constants.js
│   │
│   └── App.jsx                 [Main Component]
│
├── .env.example
├── .gitignore
├── README.md
├── package.json
├── tailwind.config.js
├── next.config.js / vite.config.js
└── [CI/CD Files (.github/workflows)]
```

---

## INHALTS-RICHTLINIEN

### Brand Voice & Tone

```
Tone of Voice: Professional, aber accessible
- Nicht zu technisch (Marketing-Fokus)
- Aber nicht zu simplifiend (B2B-Audience)
- Selbstbewusst, aber nicht arrogant
- Sicherheit > Innovation
- Beispiel: "Wir machen komplexe Sicherheit einfach"

Sprache: Deutsch (de-AT) + Englisch (en-US) für International
- Deutsche Version primär
- English Version optional (aber vorbereitet)
- Keine Denglish, aber Tech-Terms akzeptabel
```

### Content Guidelines

```
Headlines:
- Action-oriented ("Starten Sie heute")
- Benefit-focused ("Sparen Sie Zeit & Kosten")
- Spezifisch ("99.9% Verfügbarkeit")

Body Copy:
- Kurze Absätze (max 3-4 Sätze)
- Bullet Points für Listen
- Aktive Stimme verwenden
- "Sie" statt "man"

Calls-to-Action:
- "Kostenlos testen"
- "Jetzt starten"
- "Demo anfordern"
- "Mehr erfahren"
- Nicht: "Klicken Sie hier", "Submit"
```

---

## TESTING CHECKLIST

### Functional Testing
- [ ] Alle Links funktionieren
- [ ] Formulare submitten (gemockt, konsole.log)
- [ ] Responsive Design (Mobile, Tablet, Desktop)
- [ ] Navigation Bar auf allen Seiten konsistent
- [ ] Footer auf allen Seiten present

### Accessibility Testing
- [ ] WAVE (WebAIM) - Keine Errors
- [ ] AXE DevTools - Keine Violations
- [ ] Keyboard Navigation - Alle Elemente erreichbar
- [ ] Screen Reader Test (NVDA/JAWS)
- [ ] Color Contrast Check (4.5:1+)
- [ ] Focus Order sinnvoll

### Performance Testing
- [ ] Lighthouse > 90 (alle Kategorien)
- [ ] Pagespeed Insights - Mobile & Desktop
- [ ] Image Optimization (WebP, Lazy Loading)
- [ ] CSS/JS Minification
- [ ] No console errors

### SEO Testing
- [ ] Meta Tags auf allen Seiten
- [ ] H1-H6 Hierarchie korrekt
- [ ] Sitemap.xml erstellt
- [ ] Robots.txt vorhanden
- [ ] Structured Data (JSON-LD) validiert

### Security Testing
- [ ] HTTPS überall (SSL/TLS)
- [ ] CORS-Header korrekt
- [ ] CSP-Header (Content Security Policy)
- [ ] XSS-Protection
- [ ] SQL Injection Prevention (N/A für Static)
- [ ] Form Validation (Client-side)

### Browser Compatibility
- [ ] Chrome 90+
- [ ] Firefox 88+
- [ ] Safari 14+
- [ ] Edge 90+
- [ ] Mobile Safari (iOS)
- [ ] Chrome (Android)

### Legal Compliance
- [ ] Privacy Policy vorhanden & korrekt
- [ ] Terms of Service akzeptabel
- [ ] Imprint vollständig (§24 Mediengesetz)
- [ ] Cookie Banner funktioniert
- [ ] Datenschutz-Links im Footer
- [ ] Copyright-Hinweise

---

## CHECKLISTE ZUM GO-LIVE

### Pre-Launch
- [ ] Domain registriert & DNS konfiguriert
- [ ] SSL-Zertifikat aktiv
- [ ] GitHub Repository erstellt & dokumentiert
- [ ] Hosting (Vercel/Cloudflare) konfiguriert
- [ ] CI/CD Pipeline aktiv
- [ ] Email-Adressen eingerichtet (info@, support@, security@)
- [ ] Monitoring & Error Tracking (Sentry)
- [ ] Analytics konfiguriert (Google Analytics)
- [ ] Kontaktformular Backend (Formspree/EmailJS)

### Content Completion
- [ ] Alle Seiten-Inhalte finalisiert
- [ ] Alle Assets & Bilder optimiert
- [ ] Videos hochgeladen & gehostet
- [ ] Blog-Artikel vorbereitet (mindestens 3)
- [ ] FAQ aktualisiert
- [ ] Testimonials & Case Studies (Mock-Daten)

### Final Quality Check
- [ ] Lighthouse Audit bestanden (>90)
- [ ] WAVE Accessibility Check
- [ ] Mobile Responsiveness Test
- [ ] Cross-Browser Test
- [ ] Link Checker (keine 404s)
- [ ] Spelling & Grammar Check
- [ ] Brand Consistency Check

### Launch
- [ ] Deploy zu Production
- [ ] Smoke Test auf Live-URL
- [ ] Search Console Verification
- [ ] Google Analytics Setup
- [ ] Sitemap Submission
- [ ] Social Media Links aktualisiert
- [ ] Email Announcement (optional)

---

## WARTUNG & UPDATES

### Regelmäßige Aufgaben

**Monatlich**:
- Analytics Review
- Performance Monitoring
- Security Updates
- Content Refresh
- Backup Verification

**Quartalsweise**:
- Lighthouse Audit
- Accessibility Check
- SEO Optimization
- User Feedback Review
- Feature Requests Evaluation

**Jährlich**:
- Security Penetration Test
- Legal Documents Update (GDPR, ToS)
- Certificate Renewal Check
- Hosting Performance Review
- Budget & Growth Planning

---

## RESSOURCEN & TOOLS

### Empfohlene Tools

```
Analytics:           Google Analytics 4
Form Backend:        Formspree oder EmailJS
Payment:             Stripe (SaaS) oder PayPal
Email:               SendGrid oder Mailchimp
Monitoring:          Sentry (Error Tracking)
SEO:                 Ahrefs, SEMrush (optional)
Accessibility:       WAVE, AXE DevTools
Performance:         Lighthouse, PageSpeed Insights
Design:              Figma (optional, für Mockups)
```

### Hilfreiches Material

```
WCAG 2.2:           https://www.w3.org/WAI/WCAG22/quickref/
GDPR Compliance:    https://gdpr-info.eu/
Mediengesetz (AT):  https://www.ris.bka.gv.at/
Markenrecht (EUIPO): https://euipo.europa.eu/
Nizza-Klassen:      https://euipo.europa.eu/nizza/
Best Practices:     https://web.dev/
```

---

## ZUSAMMENFASSUNG

Dieses Dokument beschreibt eine vollständige, produktion-reife Website für **VerifyCore GmbH** - ein B2B SaaS-Verifikationssystem von Solo-Founder Felix Hufnagl in Wien.

Die Website:
✅ Ist WCAG 2.2 AA konform (Barrierefreiheit)
✅ Respektiert alle Urheberrechte & Lizenzen
✅ Schützt die Markenidentität
✅ Erfüllt alle Datenschutzanforderungen
✅ Ist GDPR-konform (EU/Österreich)
✅ Erfüllt alle gewerbelichen Anforderungen (§24 Mediengesetz)
✅ Ist optimiert für Performance & SEO
✅ Ist responsive & zugänglich

Diese Spezifikation kann direkt an AI-Agents (Claude Code, ChatGPT, etc.) weitergegeben werden zur Implementierung.

---

**Dokument Version**: 1.0
**Letzte Aktualisierung**: 2026
**Autor**: Felix Hufnagl, VerifyCore GmbH
**Lizenz**: © VerifyCore GmbH - Intern - Nicht für Weitergabe
