import React, { Component } from 'react'
import { Base64 } from 'js-base64'
import _ from 'lodash'
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
            // scroll to bottom
            let elem = document.getElementById('chat-box');
            setTimeout(() => {
                elem.scrollTop = elem.scrollHeight;
                self.setState({
                    messages: self.state.messages.slice(-30) //show last 30 message
                })
            }, 50);
        }, err => {
            logger.log(err)
        })
    }

    _getProfileInfo(uid) {
        let profileInfo = _.find(this.props.profiles, ['uid', uid]);
        logger.log(profileInfo)
        return profileInfo.info
    }

    render() {
        return (
            <div className="col-md-9">
                <div className="chatbox-wrapper" id="chat-box">
                    {
                        this.state.messages.map((data, index) => {
                            let profileInfo = this._getProfileInfo(data.uid)
                            return (
                                <ChatItem 
                                    key={index}
                                    msg={data.msg}
                                    uid={data.uid}
                                    time={data.created}
                                    color={profileInfo.color}                            
                                    displayname={profileInfo.name}>
                                </ChatItem>
                            )
                        })
                    }
                </div>
                <ChatInput send={this._sendMessage.bind(this)}/>
            </div>
        )
    }
}