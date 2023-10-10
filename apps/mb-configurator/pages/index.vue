<script setup lang="ts">
import type { MarketItem } from "@/types";

const { data } = await useFetch<MarketItem[]>(`/api/markets`);
</script>
<template>
  <div v-if="data?.length">
    hello
    <div v-for="market in data">
      <NuxtLink :to="`/market/${market.marketId}`">{{
        market.marketId
      }}</NuxtLink>
    </div>
  </div>
</template>
