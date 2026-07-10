import NoxButton from './Button/Button.vue'
import NoxSwitch from './Switch/Switch.vue'

declare module 'vue' {
    export interface GlobalComponents extends NoxComponents {}
}

export const components = {
    NoxButton,
    NoxSwitch,
}

type NoxComponents = typeof components
