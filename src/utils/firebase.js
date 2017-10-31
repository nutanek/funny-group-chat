import firebase from 'firebase'
import { config } from './../config.js'
import * as logger from './logger'

var db

export function initFirebase () {
    firebase.initializeApp(config.firebase);
    db = firebase.database()
    logger.log('Firebase is starting')
}

export function auth () {
    return new Promise((resolve, reject) => {
        firebase.auth().signInAnonymously().catch(function(error) {
            let errorCode = error.code
            let errorMessage = error.message
            logger.log('error', errorCode, errorMessage)
        });
    
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                let isAnonymous = user.isAnonymous
                let uid = user.uid
                logger.log('isAnonymous', isAnonymous)
                logger.log('uid', uid)
                resolve(uid)
            } else {
                // User is signed out.
                reject()
            }
        });
    });
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
