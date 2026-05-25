import * as primitives from './primitives'
import { palettes } from './semantics'

const inverse = {
    subtle: primitives.colors.slate[800],
    default: primitives.colors.slate[950],
    emphasis: primitives.colors.slate[700],
    disabled: primitives.colors.slate[500],
    foreground: {
        subtle: primitives.colors.white,
        default: primitives.colors.white,
        emphasis: primitives.colors.white,
    },
}

export const colors = {
    surface: {
        default: primitives.colors.white,
        hover: primitives.colors.slate[200],
        active: primitives.colors.slate[100],
        inverse: primitives.colors.slate[950],
        focus: primitives.colors.slate[200],
    },
    fg: {
        default: primitives.colors.slate[950],
        muted: primitives.colors.slate[500],
        inverse: primitives.colors.white,
    },
    border: {
        default: primitives.colors.slate[300],
        hover: primitives.colors.slate[400],
        active: primitives.colors.slate[500],
        inverse: primitives.colors.slate[800],
        disabled: primitives.colors.slate[300],
    },
    disabled: {
        default: primitives.colors.slate[300],
        subtle: primitives.colors.slate[200],
        foreground: {
            default: primitives.colors.slate[500],
        },
    },
    ...palettes,
    inverse,
}
