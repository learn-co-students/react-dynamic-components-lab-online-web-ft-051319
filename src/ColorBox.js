import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    return (
      <div className="color-box" style={{opacity: 2}}>
        if({this.props.opacity} < 0.2 ){
          return (
            null 
          )
        } else {
          return(
            this.props.opacity = this.props.opacity - 0.1 (console.log(this.props.opacity))
          )
        }
      </div>
    )
  }
  
}
