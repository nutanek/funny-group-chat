import React, { Component } from 'react'
import { initFirebase, auth, logout } from './utils/firebase'
import * as logger from './utils/logger'
import Main from './components/Main/'
import SignIn from './components/SignIn/'

class App extends Component {
    constructor() {
        super()
        initFirebase();
        this.state = {
            isLoggedIn: false
        }
    }

    _signIn() {
        auth().then(uid => {
            logger.log(uid)
            this.setState({isLoggedIn: true})
        }, err => {
            logger.log(err)            
        })
    }

    _signOut() {
        logout().then(() => {
            this.setState({isLoggedIn: false})
        }, (err) => {
            logger.log(err)  
        })
    }

    render() {
        const wrapper = {
            backgroundColor: '#DDD',
            height: '100vh'
        }

        if (this.state.isLoggedIn) {
            return (
                <div className="container-fluid" style={wrapper}>
                    <div className="row">
                        <Main isLoggedIn={this.state.isLoggedIn} signOut={this._signOut.bind(this)}/>
                    </div>
                </div>
            );
        } else {
            return (
                <SignIn signIn={this._signIn.bind(this)}/>
            )
        }

       
    }
}

export default App;
