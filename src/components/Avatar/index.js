import React, { Component } from 'react'
import isEmoji from 'if-emoji'
import './index.css'

export default class Avatar extends Component {
    _generateColor(name) {
        let size = name.length
        let unicode = name.charCodeAt(0)
        let colorIndex = (size * unicode)%7
        const color = ['#f1c40f', '#e67e22', '#e74c3c', '#1abc9c', '#2ecc71', '#3498db', '#9b59b6']
        return color[colorIndex]
    }

    _getFirstChar(name) {
        let firstChar = name.charAt(0).toUpperCase()
        let size = name.length
        if (size < 2) {
            return firstChar
        } else {
            let emoji = name.substr(0, 2)
            if (isEmoji(emoji)) {
                return emoji
            }
            return firstChar
        }
    }

    render() {
        let color = this._generateColor(this.props.name)
        let firstChar = this._getFirstChar(this.props.name)
        return (
            <div className="avatar-wrapper" style={{backgroundColor: color}}>
                <div 
                    className="name" 
                    style={{left: (firstChar.length===2 ? '6px' : '12px')}}>
                    {firstChar}
                </div>
            </div>
        )
    }
}