import NoxButton from './Button/Button.vue'

declare module 'vue' {
    export interface GlobalComponents extends NoxComponents {}
}

export const components = {
    NoxButton,
}

type NoxComponents = typeof components
