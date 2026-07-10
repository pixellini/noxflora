import '@noxflora/styles/tokens.css'
import '@noxflora/styles/intents.css'
import '@noxflora/styles/base.css'
import '@noxflora/styles/prose.css'

// Plugin
export * from './plugin.ts'

// Types
export * from './shared/types.ts'

// Components
export * from './components/Button/Button.types.ts'
export { default as NoxButton } from './components/Button/Button.vue'

export * from './components/Switch/Switch.types.ts'
export { default as NoxSwitch } from './components/Switch/Switch.vue'
