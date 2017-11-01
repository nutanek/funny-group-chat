import React, { Component } from 'react'
import _ from 'lodash'
import './index.css'
import { getRef } from './../../utils/firebase'
import ChatBox from './../ChatBox/'
import Sidebar from './../Sidebar/'
import * as logger from './../../utils/logger'

export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            profiles: []
        }
    }

    componentDidMount() {
        this._onUserAdded()
        this._onUserRemoved()
        this._onUserChanged()
    }

    _onUserAdded() {
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
            logger.log(err)
        })
    }

    _onUserChanged() {
        let self = this
        let ref = getRef('profiles')
        ref.on('child_changed', function(snap) {
            let profile = {
                uid: snap.key,
                info: snap.val()
            }
            let profileIndex = _.findIndex(self.state.profiles, ['uid', snap.key])
            let profiles = self.state.profiles
            if (profileIndex !== -1) {
                profiles[profileIndex] = profile
                self.setState({
                    profiles
                })
            }
        }, err => {
            logger.log(err)
        })
    }

    _onUserRemoved() {
        let self = this
        let ref = getRef('profiles')
        ref.on('child_removed', function(snap) {
            let profileIndex = _.findIndex(self.state.profiles, ['uid', snap.key])
            let profiles = self.state.profiles
            if (profileIndex !== -1) {
                profiles[profileIndex].deleted = true
                self.setState({
                    profiles
                })
            }
        }, err => {
            logger.log(err)
        })
    }

    render() {
        return (
            <div className="container main-wrapper">
                <div className="row">
                    <ChatBox profiles={this.state.profiles}/>
                    <Sidebar profiles={this.state.profiles} signOut={this.props.signOut}/>
                </div>
            </div>  
        )
    }
}