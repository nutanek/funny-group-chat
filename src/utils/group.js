import { getData } from './firebase'

export function getGroupInfo () {
    return new Promise((resolve, reject) => {
        let path = 'info'
        getData(path).then(data => {
            resolve(data)
        }).catch((err) => {
            reject(err)
        })
    })
}