import React, { Component } from 'react'
import './index.css'

const colors = [
    '#dddddd', '#ffcc00', '#2ecc71', '#59abe3', '#be90d4', '#f1a9a0' 
]

export default class ColorSelector extends Component {
    constructor() {
        super()
        this.state = {
            selectedColor: '#dddddd'
        }
    }

    _select(color) {
        this.setState({
            selectedColor: color
        })
        this.props.select(color)
    }

    render() {
        return (
            <div className="col-xs-12 colorselector-wrapper">
                <div className="row">
                    {
                        colors.map((color, index) => 
                            <div key={index} className="col-sm-2 text-center">
                                <div 
                                    className={"color " + (color===this.state.selectedColor && "color-selected") } 
                                    style={{backgroundColor: color}}
                                    onClick={()=>this._select(color)}
                                    >
                                </div>
                            </div>
                        )
                    }
                                    
                </div>
                
            </div>
        )
    }
}