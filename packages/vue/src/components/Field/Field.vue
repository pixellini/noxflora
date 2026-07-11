<script lang="ts" setup>
import { Field } from '@ark-ui/vue/field'
import type { NoxFieldProps } from './Field.types.ts'

withDefaults(defineProps<NoxFieldProps>(), {
    type: 'text',
})

const value = defineModel<string>({ default: '' })
</script>

<template>
    <Field.Root
        :disabled="disabled"
        :id="id"
        :invalid="invalid || Boolean(errorText)"
        :read-only="readonly"
        :required="required">
        <Field.Label
            v-if="label"
            class="nox-label">
            {{ label }}
        </Field.Label>
        <Field.Input
            v-model="value"
            class="nox-focusable"
            :form="form"
            :name="name"
            :placeholder="placeholder"
            :type="type"
            :disabled="disabled"
        />
        <Field.HelperText v-if="helperText">
            {{ helperText }}
        </Field.HelperText>
        <Field.ErrorText v-if="errorText">
            {{ errorText }}
        </Field.ErrorText>
    </Field.Root>
</template>

<style lang="css" scoped>
[data-part='root'] {
    display: inline-flex;
    flex-direction: column;
    gap: var(--nox-spacing-xs);
}

[data-part='label'] {
    font-family: var(--nox-font-family-special);
}

[data-part='input'] {
    --nox-intent-ring: var(--nox-intent-ring-primary);
    --input-transition: var(--nox-transition-duration-fast) var(--nox-transition-easing-base);

    padding: var(--nox-spacing-sm) var(--nox-spacing-md);
    border: var(--nox-border-base) solid var(--nox-border-default);
    border-radius: var(--nox-radius-md);
    background-color: var(--nox-surface-input-default);
    font-family: var(--nox-font-family-sans);
    font-size: var(--nox-font-size-base);
    color: var(--nox-fg-default);
    transition:
        border-color var(--input-transition),
        outline-color var(--input-transition);

    &::placeholder {
        color: var(--nox-fg-muted);

        &:disabled {
            color: var(--nox-fg-disabled);
        }
    }

    &:hover {
        border-color: var(--nox-border-hover);
    }

    &[data-invalid] {
        --nox-intent-ring: var(--nox-intent-ring-danger);

        border-color: var(--nox-intent-danger-default);
    }

    &:disabled {
        border-color: transparent;
        background-color: var(--nox-surface-input-disabled);
        color: var(--nox-fg-disabled);
        cursor: not-allowed;
    }
}

[data-part='helper-text'],
[data-part='error-text'] {
    font-family: var(--nox-font-family-sans);
    font-size: var(--nox-font-size-xs);
}

[data-part='helper-text'] {
    color: var(--nox-fg-muted);
}

[data-part='error-text'] {
    color: var(--nox-intent-danger-default);
}
</style>
