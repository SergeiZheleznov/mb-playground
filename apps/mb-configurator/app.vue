<script setup lang="ts">
import type { MarketItem } from "@/types";
const config = useRuntimeConfig();

const { data } = await useFetch<MarketItem[]>(
  `${config.public.apiBase}/markets`,
  {
    mode: "no-cors",
    headers: {
      accept: "application/json",
      "x-api-key": config.apiSecret,
    },
  }
);

if (process.server) {
  console.log("API secret:", config.apiSecret);
}
</script>
<template>
  <div v-if="data?.length">
    <div v-for="market in data">
      {{ market.marketId }}
    </div>
  </div>
</template>
