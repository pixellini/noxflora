import type { App } from 'vue'
import { components } from './components/registry.ts'

export function createNoxFlora() {
    return {
        install(app: App) {
            for (const [name, component] of Object.entries(components)) {
                app.component(name, component)
            }

            if (typeof document !== 'undefined' && document.body) {
                document.body.classList.add('nox-base')
            }
        },
    }
}
