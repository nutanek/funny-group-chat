import React, { Component } from 'react'
import './index.css'
import * as logger from './../../utils/logger'
import Avatar from './../Avatar/'

export default class UserOnline extends Component {
    render() {
        return (
            <div className="col-xs-12 useronline-wrapper">
                {
                    this.props.profiles.map((data, key) =>
                        <div className="row" key={key}>
                            <div className="col-xs-3">
                                <Avatar name={data.info.name}/>
                            </div>
                            <div className="col-xs-9">{data.info.name}</div>
                        </div>
                    )
                }
            </div>
        )
    }
}