export type NoxFieldType = 'text' | 'email' | 'password' | 'search' | 'tel' | 'url'

export interface NoxFieldProps {
    disabled?: boolean
    errorText?: string
    form?: string
    helperText?: string
    id?: string
    invalid?: boolean
    label?: string
    name?: string
    placeholder?: string
    readonly?: boolean
    required?: boolean
    type?: NoxFieldType
}
