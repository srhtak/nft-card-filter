<template>
  <div class="flex justify-center">
    <div>
      <div class="dropdown relative">
        <button @click="dropdown = true" class="btn-dropdown" type="button">
          Dropdown button
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-down"
            class="w-2 ml-2"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
            ></path>
          </svg>
        </button>
        <ul
          v-if="dropdown"
          ref="dropdownRef"
          class="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
        >
          <li>
            <button
              @click="sortingDate"
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
            >
              Sorting date
            </button>
          </li>
          <li>
            <button
              @click="sortingPrice"
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
            >
              Sorting price
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const emit = defineEmits();

const sortedDate = ref(false);
const sortedPrice = ref(false);
const dropdownRef = ref(null);
const dropdown = ref(false);

const sortingPrice = () => {
  sortedPrice.value = !sortedPrice.value;
  emit("sortingPrice", sortedPrice.value);
};

const sortingDate = () => {
  sortedDate.value = !sortedDate.value;
  emit("sortingDate", sortedDate.value);
};

onClickOutside(dropdownRef, (event) => {
  console.log(event);
  dropdown.value = false;
});
</script>

<style lang="scss" scoped></style>
