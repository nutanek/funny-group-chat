export function log (msg) {
    if (process.env.NODE_ENV === 'development') {
        console.log(msg)
    }
}