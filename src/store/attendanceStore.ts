import { defineStore } from "pinia";
import axios from "axios";

export const useAttendanceStore = defineStore("attendance", {
  state: () => ({
    entries: [] as {
      id: number;
      student_id: number;
      present: boolean;
      present_at: string;
    }[],
  }),

  actions: {
    async fetchAttendance() {
      const res = await axios.get("http://localhost:3000/api/attendance");
      this.entries = res.data;
      console.log(res.data);
    },

    async addAttendance(
      customer_id: number,
      present: boolean,
      present_at: string
    ) {
      const res = await axios.post("http://localhost:3000/api/attendance", {
        customer_id,
        present,
        present_at,
      });
      this.entries.unshift(res.data);
      console.log(res.data);
    },
  },
});
