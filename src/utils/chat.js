import { addData } from './firebase'
import { Base64 } from 'js-base64'

export function sendMessage (data) {
    return new Promise((resolve, reject) => {
        let path = 'messages'
        if (data.msg) {
            data.msg = Base64.encode(data.msg)
        }
        addData(path, data).then(data => {
            resolve()
        }).catch((err) => {
            reject(err)
        })
    })
}