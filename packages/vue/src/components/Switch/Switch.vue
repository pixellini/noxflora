<script lang="ts" setup>
import { Switch } from '@ark-ui/vue/switch'
import type { NoxSwitchProps } from './Switch.types.ts'

withDefaults(defineProps<NoxSwitchProps>(), {
    intent: 'primary',
})

const checked = defineModel<boolean>('checked', { default: false })
</script>

<template>
    <Switch.Root
        v-model:checked="checked"
        :data-intent="intent"
        :disabled="disabled"
        :form="form"
        :id="id"
        :invalid="invalid"
        :name="name"
        :read-only="readonly"
        :required="required"
        :value="value">
        <Switch.Control>
            <Switch.Thumb />
        </Switch.Control>
        <Switch.Label v-if="label">{{ label }}</Switch.Label>
        <Switch.HiddenInput />
    </Switch.Root>
</template>

<style lang="css" scoped>
[data-part='root'] {
    --switch-width: var(--nox-space-12);
    --switch-height: var(--nox-space-7);
    --switch-thumb-size: var(--nox-space-5);
    --switch-transition: var(--nox-transition-duration-fast) var(--nox-transition-easing-base);

    display: inline-flex;
    align-items: center;
    gap: var(--nox-spacing-sm);
    cursor: pointer;
    user-select: none;

    &:has([data-disabled]) {
        cursor: not-allowed;
    }
}

[data-part='control'] {
    display: inline-flex;
    align-items: center;
    width: var(--switch-width);
    height: var(--switch-height);
    border-radius: var(--nox-radius-md);
    background-color: var(--nox-surface-hover);
    transition:
        background-color var(--switch-transition),
        border-color var(--switch-transition);

    &[data-focus] {
        outline: var(--nox-border-2) solid var(--nox-intent-ring);
        outline-offset: var(--nox-border-2);
    }

    &[data-state='checked'] {
        border-color: transparent;
        background-color: var(--nox-intent-default);

        &:hover:not([data-disabled]) {
            background-color: var(--nox-intent-emphasis);
        }
    }

    &[data-disabled] {
        border-color: transparent;
        background-color: var(--nox-disabled-default);
    }
}

[data-part='thumb'] {
    width: var(--switch-thumb-size);
    height: var(--switch-thumb-size);
    margin-left: var(--nox-space-1);
    border-radius: var(--nox-radius-md);
    background-color: var(--nox-surface-thumb);
    transition: transform var(--switch-transition);

    &[data-state='checked'] {
        transform: translateX(calc(var(--switch-width) - var(--switch-thumb-size) - 2 * var(--nox-space-1))) rotate(90deg);
    }

    &[data-disabled] {
        background-color: var(--nox-surface-thumb-disabled);
    }
}

[data-part='label'] {
    font-family: var(--nox-font-family-sans);
    font-size: var(--nox-font-size-base);
    color: var(--nox-fg-default);

    &[data-disabled] {
        color: var(--nox-disabled-foreground-default);
    }
}
</style>
