import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { format, resolveConfig, type Options } from 'prettier'

import { buildIntents } from './intents'
import { buildTokens } from './tokens'
import { combineStylesheets, createStylesheet } from './utils'

const currentDir = dirname(fileURLToPath(import.meta.url))
const staticDir = resolve(currentDir, 'static')
const buildDir = resolve(currentDir, '..', 'build')

await buildStylesheets()

async function buildStylesheets(): Promise<void> {
    await mkdir(buildDir, { recursive: true })
    const prettierOptions = (await resolveConfig(buildDir)) ?? {}

    const tokens = buildTokens()
    const intents = buildIntents()
    const fonts = await readStylesheet('fonts.css')
    const base = await readStylesheet('base.css')
    const prose = await readStylesheet('prose.css')

    await writeStylesheet('tokens.css', tokens, prettierOptions)
    await writeStylesheet('intents.css', intents, prettierOptions)
    await writeStylesheet('fonts.css', fonts, prettierOptions)
    await writeStylesheet('base.css', base, prettierOptions)
    await writeStylesheet('prose.css', prose, prettierOptions)

    const bundle = combineStylesheets([tokens, intents, base, prose])
    await writeStylesheet('index.css', bundle, prettierOptions)
}

async function readStylesheet(fileName: string): Promise<string> {
    const sourcePath = resolve(staticDir, fileName)
    const contents = await readFile(sourcePath, 'utf8')

    return createStylesheet(contents.trim())
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
