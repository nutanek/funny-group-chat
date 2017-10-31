import { config } from './../config.js'

export function log (msg) {
    if (config.mode === 'dev') {
        console.log(msg)
    }
}