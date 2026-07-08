<script lang="ts" setup>
import type { NoxButtonProps } from './Button.types.ts'

withDefaults(defineProps<NoxButtonProps>(), {
    variant: 'solid',
    intent: 'primary',
    disabled: false,
    type: 'button',
    block: false,
})
</script>

<template>
    <button
        :type="type"
        :data-variant="variant"
        :data-intent="intent"
        :data-block="block"
        :disabled="disabled">
        <span v-if="$slots.leading" class="icon" aria-hidden="true">
            <slot name="leading" />
        </span>

        <span class="label">
            <slot />
        </span>

        <span v-if="$slots.trailing" class="icon" aria-hidden="true">
            <slot name="trailing" />
        </span>
    </button>
</template>

<style lang="css" scoped>
button {
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
    transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;

    &[data-block="true"] {
        width: 100%;
    }

    &:focus-visible {
        outline: var(--nox-border-2) solid var(--nox-intent-ring-default);
        outline-offset: var(--nox-border-2);
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
            color: var(--nox-disabled-foreground-default);
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
            color: var(--nox-disabled-foreground-default);
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
