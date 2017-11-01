import React, { Component } from 'react'
import './index.css'
import Avatar from './../Avatar/'

export default class ChatItem extends Component {
    render() {
        let { msg, uid, displayname } = this.props

        if (localStorage.getItem('uid') === uid) {
            return (
                <div className="row chatitem-wrapper">
                    <div className="col-xs-12 text-right">
                        <div className="message message-right">
                            <div className="arrow-right"></div>                            
                            {msg}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="row chatitem-wrapper">
                    <div className="col-xs-12">
                        <div className="col-xs-1 avatar">
                            <Avatar name={displayname} />
                        </div>
                        <div className="col-xs-11">
                            <div className="displayname">{displayname}</div>
                            <div className="message message-left">
                                <div className="arrow-left"></div>                                
                                {msg}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
            
    }
}