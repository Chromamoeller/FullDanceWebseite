import { defineStore } from "pinia";
import axios from "axios";

export const useAttendanceStore = defineStore("attendance", {
  state: () => ({
    entries: [] as {
      id: number;
      student_id: number;
      present: boolean;
      created_at: string;
    }[],
  }),

  actions: {
    async fetchAttendance() {
      const res = await axios.get("http://localhost:3000/api/attendance");
      this.entries = res.data;
      console.log(res.data);
    },

    async addAttendance(student_id: number, present: boolean) {
      const res = await axios.post("http://localhost:3000/api/attendance", {
        student_id,
        present,
      });
      this.entries.unshift(res.data);
      console.log(res.data);
    },
  },
});
