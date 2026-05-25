export const colors = {
    white: '#ffffff',
    black: '#000000',
    slate: {
        100: '#aaadc0',
        200: '#9195ae',
        300: '#797e9c',
        400: '#636886',
        500: '#51556e',
        600: '#3f4255',
        700: '#2d2f3d',
        800: '#1b1c25',
        900: '#14151b',
        950: '#06050d',
    },
    gray: {
        100: '#f3f3f6',
        200: '#dadce4',
        300: '#c2c4d2',
    },
    red: {
        300: '#ffa8ab',
        500: '#ff5a60',
        700: '#ff0f17',
    },
    orange: {
        300: '#ffe0bd',
        500: '#ffba70',
        700: '#ff9724',
    },
    yellow: {
        300: '#f7fcba',
        500: '#f2fa8a',
        700: '#d6e33b',
    },
    green: {
        300: '#98fcb2',
        500: '#53fa80',
        700: '#07de40',
    },
    blue: {
        300: '#b8deff',
        500: '#7bc1ff',
        700: '#0f93ff',
    },
    teal: {
        300: '#caf5fd',
        500: '#8de8fb',
        700: '#2ecef6',
    },
    purple: {
        300: '#e0cafd',
        500: '#c097fa',
        700: '#8f3ef9',
    },
    pink: {
        300: '#ffbde4',
        500: '#ff7dc8',
        700: '#ff199f',
    },
} as const

export const spacing = {
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
} as const

export const borderRadius = {
    none: '0px',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
} as const

export const borderSize = {
    0: '0px',
    base: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
} as const

export const fontFamily = {
    sans: '"Inter Variable", ui-sans-serif, system-ui, sans-serif',
    special: '"Tiny5", system-ui, sans-serif',
} as const

export const fontWeight = {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
} as const

export const fontSize = {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1.125rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '3rem',
    '4xl': '4rem',
} as const

export const lineHeight = {
    none: 1,
    tighter: 1.1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
} as const
