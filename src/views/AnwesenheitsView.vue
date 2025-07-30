<template>
  <section class="attendance">
    <h1>Anwesenheit – Juli 2025</h1>

    <table>
      <thead>
        <tr>
          <th>Tanzpaar</th>
          <th v-for="date in dates" :key="date">{{ date }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pair in dancePairs" :key="pair.name">
          <td>{{ pair.name }}</td>
          <td v-for="date in dates" :key="date">
            <span>Test </span>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup lang="ts">
const dates = ["01.07.", "08.07.", "15.07.", "22.07."];

const dancePairs = [
  {
    name: "Anna & Max",
    attendance: {
      "01.07.": true,
      "08.07.": true,
      "15.07.": false,
      "22.07.": true,
    },
  },
  {
    name: "Lisa & Tom",
    attendance: {
      "01.07.": true,
      "08.07.": false,
      "15.07.": true,
      "22.07.": true,
    },
  },
  {
    name: "Jenny & Chris",
    attendance: {
      "01.07.": true,
      "08.07.": true,
      "15.07.": true,
      "22.07.": true,
    },
  },
  {
    name: "Sophie & Jan",
    attendance: {
      "01.07.": false,
      "08.07.": false,
      "15.07.": false,
      "22.07.": true,
    },
  },
];
</script>

<style scoped>
.attendance {
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: rgb(94, 93, 93);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  overflow: hidden;
}

th,
td {
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid #eee;
}

th {
  background: #170277;
  font-weight: 600;
}

.present {
  color: green;
}

.absent {
  color: red;
}
</style>
