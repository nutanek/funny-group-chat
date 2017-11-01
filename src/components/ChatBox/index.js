import React, { Component } from 'react'
import { Base64 } from 'js-base64'
import './index.css'
import { sendMessage } from './../../utils/chat'
import { getRef } from './../../utils/firebase'
import * as logger from './../../utils/logger'
import ChatInput from './../ChatInput/'
import ChatItem from './../ChatItem/'


export default class ChatBox extends Component {
    constructor() {
        super()
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        this._getMessage()
    }

    _sendMessage(msg) {
        let uid = localStorage.getItem('uid')
        let data = {
            type: 'text',
            msg: msg,
            uid: uid,
            created: Date.now()
        }
        sendMessage(data).then(() => {
            logger.log('success')
        }, () => {
            logger.log("failed")
        })
    }

    _getMessage() {
        let self = this
        let ref = getRef('messages')
        ref.orderByChild('created').startAt(Date.now()).on('child_added', function(snap) {
            let data = snap.val()
            if (data.msg) {
                data.msg = Base64.decode(data.msg)
            }
            self.setState({
                messages: [...self.state.messages, data]
            })
        }, err => {
            logger.log(err)
        })
    }

    render() {
        return (
            <div className="col-md-9">
                <div className="chatbox-wrapper">
                    {
                        this.state.messages.map((data, index) => 
                            <ChatItem 
                                key={index}
                                msg={data.msg}
                                uid={data.uid}>
                            </ChatItem>
                        )
                    }
                </div>
                <ChatInput send={this._sendMessage.bind(this)}/>
            </div>
        )
    }
}