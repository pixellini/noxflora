import NoxButton from './Button/Button.vue'
import NoxContainer from './Container/Container.vue'
import NoxField from './Field/Field.vue'
import NoxSwitch from './Switch/Switch.vue'

declare module 'vue' {
    export interface GlobalComponents extends NoxComponents {}
}

export const components = {
    NoxButton,
    NoxContainer,
    NoxField,
    NoxSwitch,
}

type NoxComponents = typeof components
