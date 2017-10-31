import React, { Component } from 'react'
import { initFirebase } from './utils/firebase'
import Main from './components/Main/'

class App extends Component {
    constructor() {
        super()
        initFirebase();
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
