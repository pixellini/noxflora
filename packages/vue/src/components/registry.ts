import NoxButton from './Button/Button.vue'
import NoxSwitch from './Switch/Switch.vue'
import NoxField from './Field/Field.vue'

declare module 'vue' {
    export interface GlobalComponents extends NoxComponents {}
}

export const components = {
    NoxButton,
    NoxSwitch,
    NoxField,
}

type NoxComponents = typeof components
