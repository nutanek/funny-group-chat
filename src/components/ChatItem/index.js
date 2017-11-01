import React, { Component } from 'react'
import './index.css'
import Avatar from './../Avatar/'

export default class ChatItem extends Component {
    render() {
        let { msg, uid, displayname, color } = this.props

        if (localStorage.getItem('uid') === uid) {
            return (
                <div className="row chatitem-wrapper">
                    <div className="col-xs-12 text-right">
                        <div className="message message-right" style={{backgroundColor: color}}>
                            <div className="arrow-right" style={{borderLeftColor: color}}></div>                            
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
                            <div className="message message-left" style={{backgroundColor: color}}>
                                <div className="arrow-left" style={{borderRightColor: color}}></div>                                
                                {msg}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
            
    }
}