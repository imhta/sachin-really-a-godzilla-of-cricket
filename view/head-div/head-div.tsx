import React, { Component } from 'react';
import { render } from 'react-dom';
import { HeadProps } from '../../model/props-model';

export class HeadDiv extends Component<HeadProps> {

  render() {
    const head_div = {
      'height': '30vh',
      'padding': '10px',
      'background-color': '#193460'
    }
    const h = {
      'color': 'white',
      'text-align': 'center'
    }
    return this.props.reverse ? (
      <div style={head_div}>
        <h3 style={h}>
          {this.props.sm}
        </h3>
        <h1 style={h}>
          {this.props.b}
        </h1>
      </div>
    ) : (
        <div style={head_div}>

          <h1 style={h}>
            {this.props.b}
          </h1>
          <h3 style={h}>
            {this.props.sm}
          </h3>
        </div>
      )
  }
}