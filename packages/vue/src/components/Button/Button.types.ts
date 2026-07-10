import type { NoxIntent } from '@/shared/types.ts'

export type NoxButtonVariant = 'solid' | 'ghost'

export type NoxButtonType = 'button' | 'submit' | 'reset'

export interface NoxButtonProps {
    block?: boolean
    disabled?: boolean
    id?: string
    intent?: NoxIntent
    type?: NoxButtonType
    variant?: NoxButtonVariant
}
