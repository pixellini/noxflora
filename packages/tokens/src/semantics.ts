import * as primitives from './primitives'

export const palettes = {
    primary: {
        subtle: primitives.colors.purple[300],
        default: primitives.colors.purple[500],
        emphasis: primitives.colors.purple[700],
        disabled: primitives.colors.slate[500],
        foreground: {
            subtle: primitives.colors.white,
            default: primitives.colors.white,
            emphasis: primitives.colors.white,
        },
    },
    neutral: {
        subtle: primitives.colors.slate[500],
        default: primitives.colors.slate[600],
        emphasis: primitives.colors.slate[700],
        disabled: primitives.colors.slate[500],
        foreground: {
            subtle: primitives.colors.white,
            default: primitives.colors.white,
            emphasis: primitives.colors.white,
        },
    },
    info: {
        subtle: primitives.colors.blue[300],
        default: primitives.colors.blue[500],
        emphasis: primitives.colors.blue[700],
        foreground: {
            subtle: primitives.colors.slate[900],
            default: primitives.colors.slate[900],
            emphasis: primitives.colors.slate[900],
        },
    },
    success: {
        subtle: primitives.colors.green[300],
        default: primitives.colors.green[500],
        emphasis: primitives.colors.green[700],
        foreground: {
            subtle: primitives.colors.slate[900],
            default: primitives.colors.slate[900],
            emphasis: primitives.colors.slate[900],
        },
    },
    warning: {
        subtle: primitives.colors.orange[300],
        default: primitives.colors.orange[500],
        emphasis: primitives.colors.orange[700],
        foreground: {
            subtle: primitives.colors.slate[900],
            default: primitives.colors.slate[900],
            emphasis: primitives.colors.slate[900],
        },
    },
    danger: {
        subtle: primitives.colors.red[300],
        default: primitives.colors.red[500],
        emphasis: primitives.colors.red[700],
        foreground: {
            subtle: primitives.colors.slate[900],
            default: primitives.colors.slate[900],
            emphasis: primitives.colors.slate[900],
        },
    },
    ring: {
        default: primitives.colors.purple[500],
    },
}

export const typography = {
    body: {
        base: {
            family: primitives.fontFamily.sans,
            size: primitives.fontSize.base,
            weight: primitives.fontWeight.normal,
            lineHeight: primitives.lineHeight.normal,
        },
        sm: {
            family: primitives.fontFamily.sans,
            size: primitives.fontSize.sm,
            weight: primitives.fontWeight.normal,
            lineHeight: primitives.lineHeight.snug,
        },
        xs: {
            family: primitives.fontFamily.sans,
            size: primitives.fontSize.xs,
            weight: primitives.fontWeight.normal,
            lineHeight: primitives.lineHeight.snug,
        },
    },
    heading: {
        base: {
            family: primitives.fontFamily.special,
            size: primitives.fontSize.base,
            weight: primitives.fontWeight.medium,
            lineHeight: primitives.lineHeight.normal,
        },
        sm: {
            family: primitives.fontFamily.special,
            size: primitives.fontSize.sm,
            weight: primitives.fontWeight.medium,
            lineHeight: primitives.lineHeight.normal,
        },
        xl: {
            family: primitives.fontFamily.special,
            size: primitives.fontSize.xl,
            weight: primitives.fontWeight.semibold,
            lineHeight: primitives.lineHeight.tight,
        },
        '2xl': {
            family: primitives.fontFamily.special,
            size: primitives.fontSize['2xl'],
            weight: primitives.fontWeight.semibold,
            lineHeight: primitives.lineHeight.tight,
        },
        '3xl': {
            family: primitives.fontFamily.special,
            size: primitives.fontSize['3xl'],
            weight: primitives.fontWeight.semibold,
            lineHeight: primitives.lineHeight.tighter,
        },
        '4xl': {
            family: primitives.fontFamily.special,
            size: primitives.fontSize['4xl'],
            weight: primitives.fontWeight.bold,
            lineHeight: primitives.lineHeight.none,
        },
    },
    font: {
        decorative: {
            family: primitives.fontFamily.special,
            size: primitives.fontSize.xl,
            weight: primitives.fontWeight.normal,
            lineHeight: primitives.lineHeight.none,
        },
    },
}

export const spacing = {
    xs: primitives.spacing[1],
    sm: primitives.spacing[2],
    md: primitives.spacing[4],
    lg: primitives.spacing[6],
    xl: primitives.spacing[8],
    '2xl': primitives.spacing[12],
    '3xl': primitives.spacing[16],
} as const

export const iconSize = {
    sm: primitives.spacing[4],
    md: primitives.spacing[5],
    lg: primitives.spacing[6],
    xl: primitives.spacing[8],
    '2xl': primitives.spacing[10],
} as const
