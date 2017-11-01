import firebase from 'firebase'
import { config } from './../config.js'
import * as logger from './logger'

var db

export function initFirebase () {
    firebase.initializeApp(config.firebase);
    db = firebase.database()
    logger.log('Firebase is starting')
}

export function auth ({displayname, color}) {
    return new Promise((resolve, reject) => {
        firebase.auth().signInAnonymously().catch(function(error) {
            let errorCode = error.code
            let errorMessage = error.message
            logger.log('error' +  errorCode + errorMessage)
        });
    
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                let isAnonymous = user.isAnonymous
                let uid = user.uid
                logger.log('isAnonymous ' + isAnonymous)
                logger.log('uid ' + uid)
                
                setData('profiles/' + uid, {
                    name: displayname,
                    color: color,
                    created: Date.now()
                }).then(() => {
                    localStorage.setItem('uid', uid)
                    resolve(uid) 
                }, () => {
                    reject()
                })
            } else {
                logger.log("logged out")
            }
        });
    });
}

export function logout () {
    return new Promise((resolve, reject) => {
        let uid = localStorage.getItem('uid')
        setData('profiles/' + uid, null).then(() => {
            localStorage.removeItem('uid')
            firebase.auth().signOut().then(function() {
                resolve() 
            }, () => {
                reject()
            })
        }, () => {
            reject()
        })
    })
}

export function getRef (path) {
    return db.ref(path)
}

export function getData (path) {
    return new Promise((resolve, reject) => {
        db.ref(path).once('value', function(snap) {
            resolve(snap.val())
        }, err => {
            reject(err)
        })
    })
}

export function addData (path, data) {
    return new Promise((resolve, reject) => {
        db.ref(path).push(data).then(() => {
            resolve()
        }, () => {
            reject()            
        })
    })
}

export function setData (path, data) {
    return new Promise((resolve, reject) => {
        db.ref(path).set(data).then(() => {
            resolve()
        }, () => {
            reject()            
        })
    })
}

export function removeData (path) {
    return new Promise((resolve, reject) => {
        db.ref(path).remove().then(() => {
            resolve()
        }, () => {
            reject()            
        })
    })
}


