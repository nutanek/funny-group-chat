import React, { Component } from 'react';
import { initFirebase } from './utils/firebase'

class App extends Component {
    constructor() {
        super()
        initFirebase();
    }

    render() {
        return (
            <div>
        
            </div>
        );
    }
}

export default App;
