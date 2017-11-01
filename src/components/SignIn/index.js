import React, { Component } from 'react'
import './index.css'

export default class SignIn extends Component {
    render() {
        return (
            <div className="container signin-wrapper">
                <div className="row">
                    ddddddddd 
                    <button className="btn btn-primary" onClick={()=>this.props.signIn()}>sign in</button>
                </div>
            </div>  
        )
    }
}