import React, { Component } from 'react'
import './index.css'

export default class Avatar extends Component {
    _generateColor(name) {
        let size = name.length
        const color = ['#f1c40f', '#e67e22', '#e74c3c', '#1abc9c', '#2ecc71', '#3498db', '#9b59b6']
        return color[size%7]
    }

    _getFirstChar(name) {
        let firstChar = name.charAt(0).toUpperCase()
        return firstChar
    }

    render() {
        let color = this._generateColor(this.props.name)
        let firstChar = this._getFirstChar(this.props.name)
        return (
            <div className="avatar-wrapper" style={{backgroundColor: color}}>
                <div className="name">{firstChar}</div>
            </div>
        )
    }
}