import React, { Component } from 'react'
import _ from 'lodash'
import './index.css'
import Avatar from './../Avatar/'

export default class UserOnline extends Component {
    _sortDisplayname() {
        let sorted = _.sortBy(this.props.profiles, [(o) => { return o.info.name }])
        return sorted
    }

    render() {
        let sortedUser = this._sortDisplayname()
        let ownUid = localStorage.getItem('uid')
        return (
            <div className="col-xs-12 useronline-wrapper">
                {
                    sortedUser.map((data, key) =>
                        !data.deleted && (
                            <div className="row list" key={key}>
                                <div className="col-xs-2">
                                    <Avatar name={data.info.name}/>
                                </div>
                                <div className="col-xs-10 displayname">
                                    {data.info.name} {data.uid===ownUid && '(me)'}
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        )
    }
}