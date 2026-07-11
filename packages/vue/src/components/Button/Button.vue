<script lang="ts" setup>
import type { NoxButtonProps } from './Button.types.ts'

withDefaults(defineProps<NoxButtonProps>(), {
    variant: 'solid',
    intent: 'primary',
    type: 'button',
})
</script>

<template>
    <button
        class="nox-focusable"
        :data-block="block"
        :data-intent="intent"
        :data-variant="variant"
        :disabled="disabled"
        :id="id"
        :type="type">
        <span v-if="$slots.leading"
            class="icon"
            aria-hidden="true">
            <slot name="leading" />
        </span>

        <span class="label">
            <slot />
        </span>

        <span v-if="$slots.trailing"
            class="icon"
            aria-hidden="true">
            <slot name="trailing" />
        </span>
    </button>
</template>

<style lang="css" scoped>
button {
    --button-transition: var(--nox-transition-duration-fast) var(--nox-transition-easing-base);

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--nox-spacing-sm);
    padding: var(--nox-spacing-sm) var(--nox-spacing-md);
    border: var(--nox-border-base) solid transparent;
    border-radius: var(--nox-radius-md);
    background-color: transparent;
    font-family: var(--nox-font-family-special);
    font-size: var(--nox-font-size-lg);
    font-weight: var(--nox-font-weight-medium);
    line-height: var(--nox-leading-none);
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    transition:
        background-color var(--button-transition),
        border-color var(--button-transition),
        color var(--button-transition);

    &[data-block="true"] {
        width: 100%;
    }

    &:disabled {
        cursor: not-allowed;
    }

    &[data-variant="solid"] {
        background-color: var(--nox-intent-default);
        color: var(--nox-intent-foreground-default);

        &:hover:not(:disabled) {
            background-color: var(--nox-intent-subtle);
        }

        &:active:not(:disabled) {
            background-color: var(--nox-intent-emphasis);
        }

        &:disabled {
            border-color: transparent;
            background-color: var(--nox-disabled-default);
            color: var(--nox-fg-disabled);
        }
    }

    &[data-variant="ghost"] {
        font-family: var(--nox-font-family-sans);
        font-size: var(--nox-font-size-base);
        color: var(--nox-fg-muted);

        &:hover:not(:disabled) {
            color: var(--nox-fg-default);
        }

        &:disabled {
            color: var(--nox-fg-disabled);
        }
    }
}

.label {
    display: inline-flex;
    align-items: center;
}

.icon {
    font-size: var(--nox-font-size-base);

    &:deep(svg) {
        width: 1em;
        height: 1em;
    }
}
</style>
