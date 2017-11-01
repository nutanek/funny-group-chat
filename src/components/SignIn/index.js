import React, { Component } from 'react'
import './index.css'
import ColorSelector from './../ColorSelector/'
import * as logger from './../../utils/logger'

export default class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            displayname: '',
            color: '#dddddd'
        }
    }

    _changeDisplayname(e) {
        let displayname = e.target.value
        this.setState({ displayname: displayname })
    }

    _selectColor(color) {
        logger.log('selected color: ' + color)
        this.setState({ color: color })
    }

    _join() {
        this.props.signIn(this.state)
    }

    render() {
        return (
            <div className="container signin-wrapper">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 box">
                        <div className="form-group">
                            <label>Displayname:</label>
                            <input 
                                type="text" 
                                className="form-control input-lg"
                                value={this.state.displayname}
                                onChange={this._changeDisplayname.bind(this)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Your Color:</label>
                            <ColorSelector select={this._selectColor.bind(this)}/>
                        </div>
                        <div className="row text-center">
                            <button className="btn btn-primary btn-lg" onClick={()=>this._join()}>
                                <i className="glyphicon glyphicon-log-in"></i> JOIN
                            </button>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}