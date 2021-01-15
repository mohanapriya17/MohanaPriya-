import React, { Component } from 'react'

import './style.css'
export class ClassC extends Component {
    render() {
        const arr = this.props.Order();
        const menu = [];
        for (const arrVal in arr) {
            menu.push(<li key={arrVal}>{arr[arrVal]}</li>)

        }
        return (
                 <div className="rules">
                      <h1>Our rules</h1>
                      <div style={{margin:'40px'}} >
                
       <ul >
                    {menu}
                </ul>
                {this.props.Food()}
              
            </div></div>
        )
    }
}
export default ClassC;