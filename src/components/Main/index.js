import React, { Component } from 'react'
import './index.css'
import ChatBox from './../ChatBox/'
import UserList from './../UserList/'

export default class Main extends Component {
    render() {
        return (
            <div className="container main-wrapper">
                <div className="row">
                    <ChatBox />
                    <UserList />
                </div>
            </div>  
        )
    }
}