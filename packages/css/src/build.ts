import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { format, resolveConfig, type Options } from 'prettier'

import { buildBase } from './stylesheets/base'
import { buildFonts } from './stylesheets/fonts'
import { buildProse } from './stylesheets/prose'
import { buildTokens } from './stylesheets/tokens'
import { combineStylesheets } from './utils'

const currentFilePath = fileURLToPath(import.meta.url)
const currentDir = dirname(currentFilePath)
const buildDir = resolve(currentDir, '..', 'build')

await buildStylesheets()

async function buildStylesheets(): Promise<void> {
    await mkdir(buildDir, { recursive: true })
    const prettierOptions = (await resolveConfig(buildDir)) ?? {}

    const tokens = buildTokens()
    const fonts = buildFonts()
    const base = buildBase()
    const prose = buildProse()

    await writeStylesheet('tokens.css', tokens, prettierOptions)
    await writeStylesheet('fonts.css', fonts, prettierOptions)
    await writeStylesheet('base.css', base, prettierOptions)
    await writeStylesheet('prose.css', prose, prettierOptions)

    const bundle = combineStylesheets([tokens, fonts, base, prose])
    await writeStylesheet('index.css', bundle, prettierOptions)
}

async function writeStylesheet(
    fileName: string,
    contents: string,
    prettierOptions: Options,
): Promise<void> {
    const outputPath = resolve(buildDir, fileName)
    const formattedContents = await format(contents, {
        ...prettierOptions,
        filepath: outputPath,
    })

    await writeFile(outputPath, formattedContents, 'utf8')
}
