import {execa} from 'execa'
import { renameSync, existsSync } from 'fs'

let extension = ''
if (process.platform === 'win32') {
  extension = '.exe'
}

async function main() {
  const rustInfo = (await execa('rustc', ['-vV'])).stdout
  const targetTriple = /host: (\S+)/g.exec(rustInfo)[1]
  if (!targetTriple) {
    console.error('Failed to determine platform target triple')
  }
  if (!existsSync(`src-tauri/binaries/script-${targetTriple}${extension}`)) {
    renameSync(
      `src-tauri/binaries/script${extension}`,
      `src-tauri/binaries/script-${targetTriple}${extension}`
    )
  }
}

main().catch((e) => {
  throw e
})