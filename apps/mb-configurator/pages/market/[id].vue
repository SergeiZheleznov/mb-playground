<script setup lang="ts">
import { MarketItem } from "~/types";

const { params } = useRoute();
const { id } = params;

const { data } = await useFetch<MarketItem[]>(`/api/markets/${id}`);
</script>
<template>
  <div>-- {{ JSON.stringify(data) }}</div>
</template>
