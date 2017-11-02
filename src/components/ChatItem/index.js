import React, { Component } from 'react'
import './index.css'
import Avatar from './../Avatar/'

export default class ChatItem extends Component {
    _addZero(num) {
        if (num < 10) {
            num = "0" + num
        }
        return num
    }

    _getTime(time) {
        let date = new Date(time)
        let hour = this._addZero(date.getHours())
        let min = this._addZero(date.getMinutes())
        return hour + ':' + min
    }

    render() {
        let { msg, uid, time, displayname, color } = this.props

        if (localStorage.getItem('uid') === uid) {
            return (
                <div className="row chatitem-wrapper">
                    <div className="col-xs-12 text-right">
                        <div className="message message-right" 
                            style={{backgroundColor: color}} 
                            title={this._getTime(time)}>
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
                            <div className="message message-left" 
                                style={{backgroundColor: color}} 
                                title={this._getTime(time)}>
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