import React, { Component } from 'react'
import './index.css'
import { getRef } from './../../utils/firebase'
import ChatBox from './../ChatBox/'
import Sidebar from './../Sidebar/'

export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            profiles: []
        }
    }

    componentDidMount() {
        let self = this
        let ref = getRef('profiles')
        ref.on('child_added', function(snap) {
            let profile = {
                uid: snap.key,
                info: snap.val()
            }
            self.setState({
                profiles: [...self.state.profiles, profile]
            })
        }, err => {
            // logger.log(err)
        })
    }

    render() {
        return (
            <div className="container main-wrapper">
                <div className="row">
                    <ChatBox />
                    <Sidebar profiles={this.state.profiles}/>
                </div>
            </div>  
        )
    }
}