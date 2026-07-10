import type { NoxIntent } from '@/shared/types.ts'

export interface NoxSwitchProps {
    disabled?: boolean
    form?: string
    id?: string
    intent?: NoxIntent
    invalid?: boolean
    label?: string
    name?: string
    readonly?: boolean
    required?: boolean
    value?: string
}
