<script setup>
import AppDate from "./AppDate.vue";
const props = defineProps(["item"]);
</script>

<template>
  <div
    href=""
    class="block p-4 rounded-lg shadow-mdbackdrop-blur backdrop-filter bg-black/20 m-4"
  >
    <img
      :alt="item.image"
      :src="item.image"
      class="object-cover w-full h-56 rounded-md"
    />

    <div class="mt-2">
      <dl>
        <div>
          <dd class="font-medium tracking-wide text-2xl text-white">
            {{ item.title }}
          </dd>
        </div>

        <div>
          <dd class="font-medium">{{ item.description }}</dd>
        </div>
      </dl>

      <dl class="flex items-center mt-6 space-x-8 text-xs">
        <div class="sm:inline-flex sm:items-center sm:shrink-0">
          <div class="sm:ml-3 mt-1.5 sm:mt-0">
            <dt class="text-black font-semibold">Price</dt>

            <dd class="font-semibold text-md text-white">
              {{ item.price }} {{ item.currency }}
            </dd>
          </div>
        </div>

        <div class="sm:inline-flex sm:items-center sm:shrink-0">
          <div class="sm:ml-3 mt-1.5 sm:mt-0">
            <dt class="text-black font-semibold">Category</dt>

            <dd class="font-semibold text-md text-white">
              {{ item.type }}
            </dd>
          </div>
        </div>

        <div class="sm:inline-flex sm:items-center sm:shrink-0">
          <div class="sm:ml-3 mt-1.5 sm:mt-0">
            <dt class="text-black font-semibold">Published At</dt>

            <AppDate :timestamp="item.publishedAt" />
          </div>
        </div>
        <button class="btn-submit">Buy</button>
      </dl>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
