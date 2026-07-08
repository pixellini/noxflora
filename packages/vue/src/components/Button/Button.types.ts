export type NoxButtonIntent = 'primary' | 'neutral' | 'info' | 'success' | 'warning' | 'danger'

export type NoxButtonVariant = 'solid' | 'ghost'

export type NoxButtonType = 'button' | 'submit' | 'reset'

export interface NoxButtonProps {
    variant?: NoxButtonVariant
    intent?: NoxButtonIntent
    disabled?: boolean
    type?: NoxButtonType
    block?: boolean
}
