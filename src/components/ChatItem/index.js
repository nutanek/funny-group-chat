import React, { Component } from 'react'
import './index.css'

export default class ChatItem extends Component {
    render() {
        let { msg, uid } = this.props

        if (localStorage.getItem('uid') === uid) {
            return (
                <div className="row chatitem-wrapper">
                    <div className="col-xs-12 text-right">
                        {uid} : {msg}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="row chatitem-wrapper">
                    <div className="col-xs-12">
                        {uid} : {msg}
                    </div>
                </div>
            )
        }
            
    }
}