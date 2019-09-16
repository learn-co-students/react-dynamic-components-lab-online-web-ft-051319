import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
      // <div className="color-box" style={{opacity: 2}}>
        if(this.props.opacity < 0.2 ){
          return (
          <div className="color-box" style={{opacity: this.props.opacity}}>
            {null}
          </div>
          )
        } else {
          return(
            <div className="color-box" style={{opacity: this.props.opacity}}>
              <ColorBox opacity={this.props.opacity - 0.1}/>
            </div>
          )
        }  
  }
  
}
