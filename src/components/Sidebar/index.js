import React, { Component } from 'react'
import './index.css'
import { config } from './../../config'
import UserOnline from './../UserOnline/'

export default class UserList extends Component {
    _logout() {
        let loggedOut = window.confirm("Do you want to leave this group?")
        if (loggedOut) {
            this.props.signOut()
        }
    }

    render() {
        return (
            <div className="col-md-3 userlist-wrapper">
                <div className="row">
                    <div className="col-xs-12 text-center title">
                        {config.groupName}
                    </div>
                    <div className="col-xs-12 text-center">
                        <button className="btn btn-warning" onClick={()=>this._logout()}>
                            <i className="glyphicon glyphicon-log-out"></i> Log out
                        </button>
                    </div>
                    <UserOnline profiles={this.props.profiles}/>
                </div>
            </div>
        )
    }
}