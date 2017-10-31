import React, { Component } from 'react'
import './index.css'
import UserList from './../UserList/'

export default class Main extends Component {
    render() {
        return (
            <div className="container main-wrapper">
                <div className="row">
                    <div className="col-md-9">
                        sss
                    </div>
                    <UserList />
                </div>
            </div>  
        )
    }
}