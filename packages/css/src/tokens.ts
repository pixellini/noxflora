import { dark, light, primitives, semantics } from '@noxflora/tokens'

import { createStylesheet, toCssVars } from './utils'

export function buildTokens(): string {
    return createStylesheet(`:root {
        ${toCssVars(primitives.fontFamily, ['font', 'family'])}
        ${toCssVars(primitives.fontWeight, ['font', 'weight'])}
        ${toCssVars(primitives.fontSize, ['font', 'size'])}
        ${toCssVars(primitives.lineHeight, ['font', 'line-height'])}
        ${toCssVars(primitives.borderRadius, ['border-radius'])}
        ${toCssVars(primitives.borderSize, ['border-size'])}
        ${toCssVars(semantics.typography, [])}
        ${toCssVars(semantics.spacing, ['spacing'])}
        ${toCssVars(semantics.iconSize, ['icon-size'])}
        ${toCssVars(dark.colors, ['color'])}
    }

    [data-theme="light"] {
        ${toCssVars(light.colors, ['color'])}
    }`)
}
