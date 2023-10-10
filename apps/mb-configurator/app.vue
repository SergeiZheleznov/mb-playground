<script setup lang="ts">
import { useAuthStore } from "@/stores";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { authenticated } = storeToRefs(authStore);
const { authenticate, logout } = authStore;
const handleLogin = async () => {
  await authenticate("test");
};

const handleLogout = async () => logout();
</script>
<template>
  <div>
    {{ authenticated }}
    <NuxtPage v-if="authenticated" />
    <button v-if="authenticated" v-on:click="handleLogout">logout</button>
    <button v-else v-on:click="handleLogin">authenticate</button>
  </div>
</template>
