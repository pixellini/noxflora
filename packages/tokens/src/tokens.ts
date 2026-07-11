const primitives = {
    color: {
        white: '#ffffff',
        black: '#000000',
        slate: {
            100: '#eff1fa',
            200: '#b9c0da',
            300: '#98a0c1',
            400: '#7981a6',
            500: '#5b638a',
            600: '#434a6f',
            700: '#2a3051',
            800: '#161a35',
            900: '#0b0e25',
            950: '#06050d',
        },
        red: {
            light: '#ef6c75',
            base: '#ec2738',
            dark: '#bf182e',
        },
        orange: {
            light: '#f1ab55',
            base: '#e88620',
            dark: '#ba6012',
        },
        yellow: {
            light: '#f8d562',
            base: '#f5bf29',
            dark: '#d5920b',
        },
        green: {
            light: '#45d97b',
            base: '#1cc354',
            dark: '#11973e',
        },
        blue: {
            light: '#7ec1fb',
            base: '#4aa4f8',
            dark: '#1779e8',
        },
        teal: {
            light: '#58d6e4',
            base: '#1cccdc',
            dark: '#119cac',
        },
        purple: {
            light: '#c69dfb',
            base: '#ac6df7',
            dark: '#8f47e1',
        },
        pink: {
            light: '#fd91d5',
            base: '#fc59bd',
            dark: '#ed2c9c',
        },
    },

    space: {
        0: '0px',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
    },

    radius: {
        none: '0px',
        sm: '0.125rem',
        base: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
    },

    border: {
        0: '0px',
        2: '2px',
        4: '4px',
        8: '8px',
        base: '1px',
    },

    font: {
        family: {
            sans: '"Inter Variable", ui-sans-serif, system-ui, sans-serif',
            special: '"Tiny5", system-ui, sans-serif',
        },
        size: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem',
            '3xl': '2.5rem',
            '4xl': '3rem',
        },
        weight: {
            thin: 100,
            extraLight: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
        },
    },

    leading: {
        none: 1,
        tighter: 1.1,
        tight: 1.25,
        snug: 1.375,
        normal: 1.5,
        relaxed: 1.625,
        loose: 2,
    },

    transition: {
        duration: {
            fast: '150ms',
            base: '250ms',
        },
        easing: {
            base: 'ease',
        },
    },
} as const

const semantics = {
    intent: {
        primary: {
            subtle: primitives.color.purple.light,
            default: primitives.color.purple.base,
            emphasis: primitives.color.purple.dark,
        },
        neutral: {
            subtle: primitives.color.slate[400],
            default: primitives.color.slate[500],
            emphasis: primitives.color.slate[700],
        },
        info: {
            subtle: primitives.color.blue.light,
            default: primitives.color.blue.base,
            emphasis: primitives.color.blue.dark,
        },
        success: {
            subtle: primitives.color.green.light,
            default: primitives.color.green.base,
            emphasis: primitives.color.green.dark,
        },
        warning: {
            subtle: primitives.color.yellow.light,
            default: primitives.color.yellow.base,
            emphasis: primitives.color.yellow.dark,
        },
        danger: {
            subtle: primitives.color.red.light,
            default: primitives.color.red.base,
            emphasis: primitives.color.red.dark,
        },
        ring: {
            primary: primitives.color.purple.base,
            neutral: primitives.color.slate[500],
            info: primitives.color.blue.base,
            success: primitives.color.green.base,
            warning: primitives.color.yellow.base,
            danger: primitives.color.red.base,
        },
        foreground: {
            subtle: primitives.color.white,
            default: primitives.color.white,
            emphasis: primitives.color.white,
        },
    },

    typography: {
        body: {
            base: {
                family: primitives.font.family.sans,
                size: primitives.font.size.base,
                weight: primitives.font.weight.normal,
                lineHeight: primitives.leading.normal,
            },
            sm: {
                family: primitives.font.family.sans,
                size: primitives.font.size.sm,
                weight: primitives.font.weight.normal,
                lineHeight: primitives.leading.snug,
            },
            xs: {
                family: primitives.font.family.sans,
                size: primitives.font.size.xs,
                weight: primitives.font.weight.normal,
                lineHeight: primitives.leading.snug,
            },
        },
        heading: {
            base: {
                family: primitives.font.family.special,
                size: primitives.font.size.base,
                weight: primitives.font.weight.medium,
                lineHeight: primitives.leading.normal,
            },
            sm: {
                family: primitives.font.family.special,
                size: primitives.font.size.sm,
                weight: primitives.font.weight.medium,
                lineHeight: primitives.leading.normal,
            },
            xl: {
                family: primitives.font.family.special,
                size: primitives.font.size.xl,
                weight: primitives.font.weight.semibold,
                lineHeight: primitives.leading.tight,
            },
            '2xl': {
                family: primitives.font.family.special,
                size: primitives.font.size['2xl'],
                weight: primitives.font.weight.semibold,
                lineHeight: primitives.leading.tight,
            },
            '3xl': {
                family: primitives.font.family.special,
                size: primitives.font.size['3xl'],
                weight: primitives.font.weight.semibold,
                lineHeight: primitives.leading.tighter,
            },
            '4xl': {
                family: primitives.font.family.special,
                size: primitives.font.size['4xl'],
                weight: primitives.font.weight.bold,
                lineHeight: primitives.leading.none,
            },
        },
        font: {
            decorative: {
                family: primitives.font.family.special,
                size: primitives.font.size.xl,
                weight: primitives.font.weight.normal,
                lineHeight: primitives.leading.none,
            },
        },
    },

    spacing: {
        xs: primitives.space[1],
        sm: primitives.space[2],
        md: primitives.space[4],
        lg: primitives.space[6],
        xl: primitives.space[8],
        '2xl': primitives.space[12],
        '3xl': primitives.space[16],
    },

    iconSize: {
        sm: primitives.space[4],
        md: primitives.space[5],
        lg: primitives.space[6],
        xl: primitives.space[8],
        '2xl': primitives.space[10],
    },
} as const

function createMode(overrides: Record<string, unknown>) {
    return {
        ...primitives,
        ...semantics,
        ...overrides,
    } as const
}

export const nox = createMode({
    surface: {
        default: primitives.color.slate[950],
        hover: primitives.color.slate[700],
        active: primitives.color.slate[950],
        inverse: primitives.color.white,
        focus: primitives.color.slate[700],
        input: {
            default: primitives.color.slate[700],
            disabled: primitives.color.slate[800],
        },
        thumb: {
            default: primitives.color.white,
            disabled: primitives.color.slate[300],
        },
    },
    disabled: {
        default: primitives.color.slate[700],
    },
    fg: {
        default: primitives.color.white,
        muted: primitives.color.slate[500],
        inverse: primitives.color.slate[950],
        disabled: primitives.color.slate[800],
    },
    border: {
        default: primitives.color.slate[600],
        hover: primitives.color.slate[400],
        active: primitives.color.slate[600],
        inverse: primitives.color.white,
        disabled: primitives.color.slate[600],
    },
    inverse: {
        subtle: primitives.color.slate[300],
        default: primitives.color.white,
        emphasis: primitives.color.slate[400],
        disabled: primitives.color.slate[600],
        foreground: {
            subtle: primitives.color.slate[800],
            default: primitives.color.slate[800],
            emphasis: primitives.color.slate[800],
        },
    },
})

export const lux = createMode({
    surface: {
        default: primitives.color.white,
        hover: primitives.color.slate[300],
        active: primitives.color.slate[200],
        inverse: primitives.color.slate[950],
        focus: primitives.color.slate[300],
        input: {
            default: primitives.color.slate[100],
            disabled: primitives.color.slate[100],
        },
        thumb: {
            default: primitives.color.white,
            disabled: primitives.color.white,
        },
    },
    disabled: {
        default: primitives.color.slate[100],
    },
    fg: {
        default: primitives.color.slate[950],
        muted: primitives.color.slate[600],
        inverse: primitives.color.white,
        disabled: primitives.color.slate[300],
    },
    border: {
        default: primitives.color.slate[200],
        hover: primitives.color.slate[300],
        active: primitives.color.slate[600],
        inverse: primitives.color.slate[800],
        disabled: primitives.color.slate[400],
    },
    inverse: {
        subtle: primitives.color.slate[800],
        default: primitives.color.slate[950],
        emphasis: primitives.color.slate[700],
        disabled: primitives.color.slate[600],
        foreground: {
            subtle: primitives.color.white,
            default: primitives.color.white,
            emphasis: primitives.color.white,
        },
    },
})
