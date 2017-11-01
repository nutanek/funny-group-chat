import React, { Component } from 'react'
import './index.css'

const emoji = [
    "😀", "😄", "😆", "😅", "😂", "😇", "😜", 
    "😍", "😘", "🤑", "🤓", "😎", "🤡", "🤠", 
    "😖", "😟", "😡", "😵", "😱", "😴", "😰", 
    "🤐", "🤢", "😷", "👹", "🎃", "💩", "🙏", 
    "🙅", "🛀🏻", "🚴🏻", "💐", "🌷", "🦏", "🐖", 
    "🎂", "🍖", "🍺", "⚽️", "🎲", "🎸", "🎤", 
    "👨‍🎓", "👏🏼", "👍🏼", "👎🏼", "👌🏼", "🤙🏼", "👣"
]

export default class Emoji extends Component {
    render() {
        if (this.props.isOpen) {
            return (
                <div className="emoji-wrapper">
                    {
                        emoji.map((emo, index) => 
                            <div className="emo" key={index} onClick={()=>this.props.select(emo)}>
                                {emo}
                            </div>
                        )
                    }
                </div>
            )
        } else {
            return (<div></div>)
        }
    }
}