import * as primitives from './primitives'
import { palettes } from './semantics'

const inverse = {
    subtle: primitives.colors.slate[100],
    default: primitives.colors.white,
    emphasis: primitives.colors.slate[300],
    disabled: primitives.colors.slate[500],
    foreground: {
        subtle: primitives.colors.slate[900],
        default: primitives.colors.slate[900],
        emphasis: primitives.colors.slate[900],
    },
}

export const colors = {
    surface: {
        default: primitives.colors.slate[950],
        hover: primitives.colors.slate[700],
        active: primitives.colors.slate[950],
        inverse: primitives.colors.white,
        focus: primitives.colors.slate[700],
    },
    text: {
        default: primitives.colors.white,
        muted: primitives.colors.slate[400],
        inverse: primitives.colors.slate[950],
    },
    border: {
        default: primitives.colors.slate[800],
        hover: primitives.colors.slate[600],
        active: primitives.colors.slate[500],
        inverse: primitives.colors.white,
        disabled: primitives.colors.slate[500],
    },
    disabled: {
        default: primitives.colors.slate[700],
        subtle: primitives.colors.slate[800],
        foreground: {
            default: primitives.colors.slate[300],
        },
    },
    ...palettes,
    inverse,
}
