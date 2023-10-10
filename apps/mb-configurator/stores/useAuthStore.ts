import { defineStore } from "pinia";

export const useAuthStore = defineStore("authentication", {
  state: () => ({ authenticated: false }),
  actions: {
    async authenticate(pwd: string) {
      console.log("Login");
      this.authenticated = true;
    },
    logout() {
      console.log("Logout");
      this.authenticated = false;
    },
  },
});
