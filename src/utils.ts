import * as path from 'path'
import * as mkdirp from 'mkdirp'
import * as fs from 'fs'

export function withoutExt(p: string) {
    return p.replace(/\.[^/.]+$/, '')
}

export function relativeImport(from: string, to: string) {
    return withoutExt('./' + path.relative(path.dirname(from), to))
}

export function writeFile(filepath: string, contents: string) {
    return new Promise((resolve, reject) => {
        mkdirp(path.dirname(filepath), function(err) {
            if (err) return reject(`filepath: ${filepath}, ${err}`)
            fs.writeFile(filepath, contents, err => {
                if (err) return reject(`filepath: ${filepath}, ${err}`)
                resolve()
            })
        })
    })
}
