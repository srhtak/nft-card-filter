<script setup>
import NftCard from "../components/NftCard.vue";
import NftFilterForm from "../components/NftFilterForm.vue";
import { ref, onMounted } from "vue";
import { useNft } from "../stores/nft";

const store = useNft();
const filterData = ref([]);

const filterByForm = (data) => {
  filterData.value = data;
};

onMounted(() => {
  store.fetchProducts();
});
</script>

<template>
  <NftFilterForm @filter="filterByForm" />
  <div v-auto-animate class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div v-for="item in filterData" :key="item.id">
      <NftCard :item="item" />
    </div>
  </div>
  <div></div>
</template>
