<script setup>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedDate from "dayjs/plugin/localizedFormat";
dayjs.extend(relativeTime);
dayjs.extend(localizedDate);

const props = defineProps(["timestamp"]);

const hummanFriendlyDate = () => {
  return dayjs.unix(props.timestamp).format("DD/MM/YYYY");
};
</script>

<template>
  <span class="text-white" :title="hummanFriendlyDate()">
    {{ hummanFriendlyDate() }}
  </span>
</template>

<style lang="scss" scoped></style>
