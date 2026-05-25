import { createStylesheet, cssVar } from '../utils'

export function buildProse(): string {
    return createStylesheet(`.nox-prose {
        width: 100%;
    }

    @scope (.nox-prose) to (.nox-no-prose) {
        h1, h2, h3, h4, h5, h6 {
            font-family: ${cssVar('font.family.special')};
            font-weight: ${cssVar('font.weight.semibold')};

            a,
            a:hover {
                color: inherit;
                text-decoration: none;
            }
        }

        h1 {
            margin-top: 0;
            margin-bottom: ${cssVar('spacing.xl')};
            font-size: ${cssVar('font.size.2xl')};
            line-height: ${cssVar('font.line-height.tight')};
        }

        h2 {
            margin-top: ${cssVar('spacing.2xl')};
            margin-bottom: ${cssVar('spacing.lg')};
            font-size: ${cssVar('font.size.xl')};
            line-height: ${cssVar('font.line-height.tight')};
        }

        h3 {
            margin-top: ${cssVar('spacing.xl')};
            margin-bottom: ${cssVar('spacing.sm')};
            font-size: ${cssVar('font.size.lg')};
            line-height: ${cssVar('font.line-height.snug')};
        }

        h4 {
            margin-top: ${cssVar('spacing.lg')};
            margin-bottom: ${cssVar('spacing.sm')};
            font-size: ${cssVar('font.size.base')};
            line-height: ${cssVar('font.line-height.normal')};
        }

        h5 {
            margin-top: ${cssVar('spacing.md')};
            margin-bottom: ${cssVar('spacing.sm')};
            font-size: ${cssVar('font.size.sm')};
            line-height: ${cssVar('font.line-height.normal')};
        }

        h6 {
            margin-top: ${cssVar('spacing.md')};
            margin-bottom: ${cssVar('spacing.xs')};
            font-size: ${cssVar('font.size.xs')};
            line-height: ${cssVar('font.line-height.normal')};
        }

        p {
            margin-top: ${cssVar('spacing.md')};
            margin-bottom: ${cssVar('spacing.md')};
        }

        ul,
        ol {
            margin-top: ${cssVar('spacing.md')};
            margin-bottom: ${cssVar('spacing.md')};
            padding-left: ${cssVar('spacing.lg')};
        }

        li {
            margin-top: ${cssVar('spacing.xs')};
            margin-bottom: ${cssVar('spacing.xs')};
        }

        blockquote {
            margin-top: ${cssVar('spacing.lg')};
            margin-bottom: ${cssVar('spacing.lg')};
            padding-left: ${cssVar('spacing.md')};
            border-left: ${cssVar('border-size.4')} solid ${cssVar('color.border.default')};
            color: ${cssVar('color.fg.muted')};
        }

        pre {
            margin-top: ${cssVar('spacing.md')};
            margin-bottom: ${cssVar('spacing.md')};
            padding: ${cssVar('spacing.md')};
            background-color: ${cssVar('color.surface.hover')};
            border-radius: ${cssVar('border-radius.md')};
            overflow-x: auto;
        }

        pre code {
            background: none;
            padding: 0;
            font-size: inherit;
        }

        code {
            padding: 0.125rem 0.25rem;
            background-color: ${cssVar('color.surface.hover')};
            border-radius: ${cssVar('border-radius.sm')};
        }

        a {
            color: ${cssVar('color.primary.default')};
            text-decoration: underline;

            &:hover {
                color: ${cssVar('color.primary.emphasis')};
            }
        }

        img {
            max-width: 100%;
            height: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: ${cssVar('spacing.md')};
            margin-bottom: ${cssVar('spacing.md')};
        }

        th,
        td {
            padding: ${cssVar('spacing.xs')} ${cssVar('spacing.sm')};
            border: 1px solid ${cssVar('color.border.default')};
            text-align: left;
        }

        th {
            font-weight: ${cssVar('font.weight.semibold')};
            background-color: ${cssVar('color.surface.hover')};
        }

        hr {
            margin-top: ${cssVar('spacing.2xl')};
            margin-bottom: ${cssVar('spacing.2xl')};
        }
    }`)
}
