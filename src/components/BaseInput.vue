<template>
  <div class="flex justify-center p-2 items-center">
    <label
      for="minValue"
      class="text-sm font-medium p-2 text-white dark:text-gray-300"
      >{{ label }}</label
    >
    <input
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      min="0"
      max="100"
      :type="props.type"
      id="minValue"
      step="10"
      class="input-number"
      placeholder="0"
      required
    />
  </div>
</template>

<script setup>
const emit = defineEmits();

const props = defineProps({
  label: {
    type: String,
    default: "text",
  },
  type: {
    type: String,
    default: "number",
  },
  modelValue: {
    type: Number,
    default: 0,
  },
});
</script>

<style lang="scss" scoped></style>
