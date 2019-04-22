import React, { Component } from 'react';
import { render } from 'react-dom';
import { ContentProps } from '../../model/props-model';
export class ContentDiv extends Component<ContentProps> {
  render() {
    const content = {
      'height': '50vh',
      'display': 'flex',
      'flex-direction': 'row'
    };
    const card25 = {
      'width': '25%',
      'background': 'url(https://i.pinimg.com/originals/80/28/6c/80286c9d732f33a2f577d7149a659763.jpg)',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'background-position': 'top',
      'padding': '0',
      'font-size': '25px',
    };
    const card75 = {
      'width': '75%',
      'margin': '10px',
      'padding': '10px',
      'font-size': '30px'
    };
    const a = {
      'font-family': 'Lato',
      'font-size': '20px',
      'text-decoration': 'none'
    }
    return (

      <div style={content}>
        <div style={card25}></div>
        <div style={card75}>
          <p>{this.props.p_title}</p>
          <h2> {this.props.h_title}</h2>
          <a style={a} href={this.props.learn_more_link.url}>{this.props.learn_more_link.title_text}</a>
        </div>

      </div>
    )
  }
}