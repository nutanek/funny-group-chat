import React, { Component } from 'react'
import './index.css'
import * as logger from './../../utils/logger'
import { getGroupInfo } from './../../utils/group'
import UserOnline from './../UserOnline/'

export default class UserList extends Component {
    constructor() {
        super()
        this.state = {
            groupInfo: {}
        }
    }

    componentDidMount() {
        getGroupInfo().then(data => {
            this.setState({ groupInfo: data })
            logger.log('groupInfo', data)
        }, err => {
            logger.log(err)
        })
    }

    render() {
        return (
            <div className="col-md-3 userlist-wrapper">
                <div className="row">
                    <div className="col-xs-12 text-center title">
                        {this.state.groupInfo.name}
                    </div>
                    <UserOnline profiles={this.props.profiles}/>
                </div>
            </div>
        )
    }
}