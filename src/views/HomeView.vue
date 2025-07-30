<template>
  <section class="home">
    <div class="hero">
      <h1>Willkommen bei FullDance</h1>
      <p>Deine Plattform für Kurse, Choreografien und Tanzvideos</p>
      <RouterLink to="/about" class="btn">Zu den Kursen</RouterLink>
    </div>

    <div class="features">
      <div class="feature">
        <h2>📅 Anwesenheit verwalten</h2>
        <p>Behalte den Überblick, wer im Kurs war – mit nur einem Klick.</p>
      </div>
      <div class="feature">
        <h2>🎬 Videos hochladen</h2>
        <p>Teile Tanzvideos mit deinen Teilnehmern und Choreografen.</p>
      </div>
      <div class="feature">
        <h2>🕺 Eigene Choreos</h2>
        <p>Verwalte und plane Tänze mit Tempo, Takt & Stilrichtung.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Kein zusätzlicher Code nötig
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;
}

.hero {
  text-align: center;
  background: #6d2121;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(141, 125, 125, 0.1);
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  background: #c92a2a;
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: bold;
}

.btn:hover {
  background: #a51111;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.feature {
  background: #05869c;
  border: 1px solid #eee;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.feature h2 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}
</style>
