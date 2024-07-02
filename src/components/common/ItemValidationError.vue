<template v-if="issues?.[fieldName]">
    <div>
        <span v-for="(issue, i) in issues[fieldName]" :key="i">
            {{ issue }}
        </span>
        <slot name="icon"></slot>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    fieldName: {
        type: String,
        required: true,
    },
    issues: {
        type: Object,
        default: () => ({}),
        required: true,
    },
});
</script>
