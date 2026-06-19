import { semantics } from '@noxflora/tokens'
import { buildVarName, createStylesheet, cssVar } from './utils'

const intentRoles = [
    { name: 'subtle', token: 'subtle' },
    { name: 'default', token: 'default' },
    { name: 'emphasis', token: 'emphasis' },
    { name: 'foreground-subtle', token: 'foreground.subtle' },
    { name: 'foreground-default', token: 'foreground.default' },
    { name: 'foreground-emphasis', token: 'foreground.emphasis' },
] as const

export function buildIntents(): string {
    const blocks: string[] = []

    for (const [intent, palette] of Object.entries(semantics.palettes)) {
        if (!('foreground' in palette)) {
            continue
        }

        const declarations: string[] = []

        for (const role of intentRoles) {
            const variable = buildVarName(['intent', role.name])
            const token = cssVar(`color.${intent}.${role.token}`)
            declarations.push(`${variable}: ${token};`)
        }

        blocks.push(`[data-intent="${intent}"] {\n${declarations.join('\n')}\n}`)
    }

    return createStylesheet(blocks.join('\n\n'))
}
