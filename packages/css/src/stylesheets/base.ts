import { createStylesheet, cssVar } from '../utils'

export function buildBase(): string {
    return createStylesheet(`html,
    body {
        background-color: ${cssVar('color.surface.default')};
        color: ${cssVar('color.fg.default')};
        font-family: ${cssVar('body.base.family')};
        font-size: ${cssVar('body.base.size')};
        line-height: ${cssVar('body.base.line-height')};
    }

    :where(.nox-base) {
        h1 {
            font-family: ${cssVar('heading.4xl.family')};
            font-size: ${cssVar('heading.4xl.size')};
            font-weight: ${cssVar('heading.4xl.weight')};
            line-height: ${cssVar('heading.4xl.line-height')};
        }

        h2 {
            font-family: ${cssVar('heading.3xl.family')};
            font-size: ${cssVar('heading.3xl.size')};
            font-weight: ${cssVar('heading.3xl.weight')};
            line-height: ${cssVar('heading.3xl.line-height')};
        }

        h3 {
            font-family: ${cssVar('heading.2xl.family')};
            font-size: ${cssVar('heading.2xl.size')};
            font-weight: ${cssVar('heading.2xl.weight')};
            line-height: ${cssVar('heading.2xl.line-height')};
        }

        h4 {
            font-family: ${cssVar('heading.xl.family')};
            font-size: ${cssVar('heading.xl.size')};
            font-weight: ${cssVar('heading.xl.weight')};
            line-height: ${cssVar('heading.xl.line-height')};
        }

        h5 {
            font-family: ${cssVar('heading.base.family')};
            font-size: ${cssVar('heading.base.size')};
            font-weight: ${cssVar('heading.base.weight')};
            line-height: ${cssVar('heading.base.line-height')};
        }

        h6 {
            font-family: ${cssVar('heading.sm.family')};
            font-size: ${cssVar('heading.sm.size')};
            font-weight: ${cssVar('heading.sm.weight')};
            line-height: ${cssVar('heading.sm.line-height')};
        }

        p,
        span {
            font-family: ${cssVar('body.base.family')};
            font-size: ${cssVar('body.base.size')};
            font-weight: ${cssVar('body.base.weight')};
            line-height: ${cssVar('body.base.line-height')};
        }

        a {
            color: ${cssVar('color.info.default')};
            text-decoration: underline;

            &:hover {
                color: ${cssVar('color.info.subtle')};
            }
        }

        strong,
        b {
            font-weight: ${cssVar('font.weight.bold')};
        }

        em,
        i {
            font-style: italic;
        }

        small {
            font-size: ${cssVar('font.size.sm')};
        }

        code {
            font-family: ui-monospace, monospace;
            font-size: ${cssVar('font.size.sm')};
        }

        hr {
            border: none;
            border-top: ${cssVar('border-size.base')} solid ${cssVar('color.border.default')};
        }
    }`)
}
