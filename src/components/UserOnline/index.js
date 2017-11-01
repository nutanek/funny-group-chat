import React, { Component } from 'react'
import './index.css'
import * as logger from './../../utils/logger'

export default class UserOnline extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="col-xs-12 useronline-wrapper">
                    
                    {
                        this.props.profiles.map((data, key) =>
                            <div className="row" key={key}>
                                <div className="col-xs-3">
                                    <div className="avatar"></div>
                                </div>
                                <div className="col-xs-9">{data.info.name}</div>
                            </div>
                        )
                    }
            </div>
        )
    }
}