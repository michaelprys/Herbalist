<template>
    <img :style="{ background: `url(${src})`, blurhash: hash }" />
</template>

<script setup>
const props = defineProps(['src', 'hash']);
</script>

<style></style>
