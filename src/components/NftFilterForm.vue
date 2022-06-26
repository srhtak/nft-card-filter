<template>
  <div class="filter-component">
    <BaseInput v-model="minValue" type="number" label="From" />
    <BaseInput v-model="maxValue" type="number" label="To" />
    <div class="flex items-center p-2">
      <input
        v-model="checkedTags"
        type="checkbox"
        id="image"
        value="image"
        class="checkbox-component"
      />
      <label
        for="image"
        class="ml-2 text-sm font-medium text-white dark:text-gray-300"
        >Image</label
      >
    </div>
    <div class="flex items-center p-2">
      <input
        v-model="checkedTags"
        type="checkbox"
        value="video"
        id="video"
        class="checkbox-component"
      />
      <label
        for="video"
        class="ml-2 text-sm font-medium text-white dark:text-gray-300"
        >Video</label
      >
    </div>
    <FilterDropdown @sortingPrice="sortingPrice" @sortingDate="sortingDate" />
    <button @click="clearFilter" class="btn-dropdown" type="button">
      Clear Filter
    </button>
  </div>
  <div class="flex justify-center">
    <Paginate @currentPage="changeCurrentPage" />
  </div>
</template>

<script setup>
import { ref, watchEffect, computed } from "vue";
import { useNft } from "../stores/nft";
import Paginate from "../components/Paginate.vue";
import BaseInput from "./BaseInput.vue";
import FilterDropdown from "./FilterDropdown.vue";

const store = useNft();
const products = computed(() => {
  return store.getProducts;
});
const emit = defineEmits();
const filterData = ref(products.value);

const checkedTags = ref([]);
const minValue = ref(0);
const maxValue = ref(100);
const sortedDate = ref(false);
const sortedPrice = ref(false);
const currentPage = ref(1);

//Reset filter data when clear filter button is clicked
const clearFilter = () => {
  sortedDate.value = false;
  sortedPrice.value = false;
  minValue.value = 0;
  maxValue.value = 100;
  checkedTags.value = [];
};

//Sorting by date
const sortingDate = (data) => {
  sortedDate.value = !data;
};

const sortingByDate = (array) => {
  if (sortedDate.value == false) {
    return array;
  }
  return array.sort(
    (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)
  );
};
//Sorting by price
const sortingPrice = (data) => {
  sortedPrice.value = !data;
};

const sortingByPrice = (array) => {
  if (sortedPrice.value == false) {
    return array;
  }
  return array.sort((a, b) => b.price - a.price);
};

//Filter by tags
const filterByTag = (array) => {
  if (!checkedTags.value.length) {
    return array;
  }
  return array.filter((item) => checkedTags.value.includes(item.type));
};
//Filter by range
const filterByRange = (array) => {
  return array.filter(
    (item) => item.price < maxValue.value && item.price > minValue.value
  );
};

//Paginate
const changeCurrentPage = (current) => {
  currentPage.value = current;
};

const paginate = (array, page_size) => {
  return array.slice(
    (currentPage.value - 1) * page_size,
    currentPage.value * page_size
  );
};

watchEffect(() => {
  let result = store.products;
  result = filterByTag(result);
  result = filterByRange(result);
  result = sortingByDate(result);
  result = sortingByPrice(paginate(result, 5));
  filterData.value = result;
  emit("filter", filterData.value);
}, [
  minValue.value,
  maxValue.value,
  checkedTags.value,
  sortedDate.value,
  sortedPrice.value,
  currentPage.value,
]);
</script>

<style lang="scss" scoped></style>
