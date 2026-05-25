import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { format, resolveConfig, type Options } from 'prettier'

import { buildBase } from './stylesheets/base'
import { buildProse } from './stylesheets/prose'
import { buildTokens } from './stylesheets/tokens'

const currentFilePath = fileURLToPath(import.meta.url)
const currentDir = dirname(currentFilePath)
const buildDir = resolve(currentDir, '..', 'build')

await buildStylesheets()

async function buildStylesheets(): Promise<void> {
    await mkdir(buildDir, { recursive: true })
    const prettierOptions = (await resolveConfig(buildDir)) ?? {}

    await writeStylesheet('tokens.css', buildTokens(), prettierOptions)
    await writeStylesheet('base.css', buildBase(), prettierOptions)
    await writeStylesheet('prose.css', buildProse(), prettierOptions)
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
