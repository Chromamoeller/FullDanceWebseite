<template>
  <div class="p-4">
    <table class="min-w-full border border-gray-300">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-2 border border-gray-300 text-left">Name</th>
          <th class="px-4 py-2 border border-gray-300">Woche 1</th>
          <th class="px-4 py-2 border border-gray-300">Woche 2</th>
          <th class="px-4 py-2 border border-gray-300">Woche 3</th>
          <th class="px-4 py-2 border border-gray-300">Woche 4</th>
          <th class="px-4 py-2 border border-gray-300">Bezahlt</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(person, index) in people"
          :key="index"
          class="odd:bg-white even:bg-gray-50"
        >
          <td class="px-4 py-2 border border-gray-300 text-left">
            {{ person.name }}
          </td>
          <td class="px-4 py-2 border border-gray-300 text-center">
            {{ person.wocheEins ? "✅" : "❌" }}
          </td>
          <td class="px-4 py-2 border border-gray-300 text-center">
            {{ person.wocheZwei ? "✅" : "❌" }}
          </td>
          <td class="px-4 py-2 border border-gray-300 text-center">
            {{ person.wocheDrei ? "✅" : "❌" }}
          </td>
          <td class="px-4 py-2 border border-gray-300 text-center">
            {{ person.wocheVier ? "✅" : "❌" }}
          </td>
          <td class="px-4 py-2 border border-gray-300 text-center">
            {{ person.bezahlt ? "✅" : "❌" }}
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <input class="w-40 h-10 bg-red-200 py-2 my-2 px-2 mx-2" type="text" />
      <input class="w-40 h-10 bg-red-200 py-2 my-2 px-2 mx-2" type="text" />
      <input class="w-40 h-10 bg-red-200 py-2 my-2 px-2 mx-2" type="text" />
      <button
        @click="store.addAttendance(2, true, '2025-08-18 20:10:00')"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Send Data
      </button>
    </div>
    <!-- <button
      @click="store.fetchAttendance()"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Action
    </button>
    <button
      @click="store.addAttendance(1, false)"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Nicht Anwesend
    </button> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAttendanceStore } from "../store/attendanceStore";

const fakeData = ref([
  {
    customer_id: 4,
    present: true,
    present_at: "2025-08-18 20:10:00",
  },
]);

const store = useAttendanceStore();
const people = ref([
  {
    name: "Marcos & Sabine Pineda",
    wocheEins: true,
    wocheZwei: true,
    wocheDrei: true,
    wocheVier: true,
    bezahlt: true,
  },
  {
    name: "Ralf & Kathrin Schmitz",
    wocheEins: true,
    wocheZwei: true,
    wocheDrei: false,
    wocheVier: true,
    bezahlt: true,
  },
  {
    name: "Stefan & Kathrin Novack",
    wocheEins: false,
    wocheZwei: true,
    wocheDrei: false,
    wocheVier: true,
    bezahlt: true,
  },
  {
    name: "Harald & Sabine Goldmann",
    wocheEins: true,
    wocheZwei: true,
    wocheDrei: true,
    wocheVier: true,
    bezahlt: true,
  },
  {
    name: "Phillip & Tina LeDrenn",
    wocheEins: true,
    wocheZwei: true,
    wocheDrei: true,
    wocheVier: true,
    bezahlt: true,
  },
]);
</script>
