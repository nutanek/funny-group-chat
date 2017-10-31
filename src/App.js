import React, { Component } from 'react'
import { initFirebase, auth } from './utils/firebase'
import * as logger from './utils/logger'
import Main from './components/Main/'

class App extends Component {
    constructor() {
        super()
        initFirebase();
        auth().then(uid => {
            logger.log(uid)
        }, err => {
            logger.log(err)            
        })
    }

    render() {
        const wrapper = {
            backgroundColor: '#DDD',
            height: '100vh'
        }

        return (
            <div className="container-fluid" style={wrapper}>
                <div className="row">
                    <Main />
                </div>
            </div>
        );
    }
}

export default App;
