<template>
  <paginate
    :page-count="2"
    :page-range="5"
    :click-handler="clickCallBack"
    :prev-text="'Prev'"
    :prev-class="'cursor-pointer px-3 py-1 m-2 rounded-md bg-white text-black'"
    :next-text="'Next'"
    :next-class="'cursor-pointer px-3 py-1 m-2 rounded-md bg-white text-black'"
    :container-class="'flex w-48 p-3 items-center justify-evenly'"
    :page-class="'hover:bg-white m-1 px-2 cursor-pointer'"
    :active-class="'bg-white rounded-sm'"
  >
  </paginate>
</template>

<script setup>
import Paginate from "vuejs-paginate-next";
const emit = defineEmits();

const clickCallBack = (pageNum) => {
  emit("currentPage", pageNum);
};
</script>

<style lang="scss" scoped></style>
