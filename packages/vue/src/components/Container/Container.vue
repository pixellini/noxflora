<script lang="ts" setup>
import type { NoxContainerProps } from './Container.types.ts'

defineProps<NoxContainerProps>()
</script>

<template>
    <div class="container" :data-flush="flush">
        <slot />
    </div>
</template>

<style lang="css" scoped>
.container {
    padding: var(--nox-spacing-xl);
    border: var(--nox-border-base) solid var(--nox-border-default);
    border-radius: var(--nox-radius-lg);
    background-color: var(--nox-surface-default);

    &[data-flush="true"] {
        padding: 0;
    }
}
</style>
