import React, { Component } from 'react'
import './index.css'

export default class ChatBox extends Component {
    constructor() {
        super()
        this.state = {
            text: ''
        }
    }

    _changeMessage(e) {
        let msg = e.target.value 
        this.setState({ text: msg })
    }

    _checKEnter(e) {
        if (e.key === 'Enter') {
            this._sendMessage()
        }
    }

    _sendMessage() {
        if (this.state.text !== '') {
            this.props.send(this.state.text)
            this.setState({ text: '' })
        }
    }

    render() {
        return (
            <div className="row chatinput-wrapper">
                <div className="col-xs-12">
                    <div className="input-group input-group-lg">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="say something..."
                            onKeyPress={this._checKEnter.bind(this)}
                            onChange={this._changeMessage.bind(this)}
                            value={this.state.text}
                            />
                        <span className="input-group-btn">
                            <button 
                                className="btn btn-default" 
                                type="button"
                                onClick={()=>this._sendMessage()}>
                                SEND
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}