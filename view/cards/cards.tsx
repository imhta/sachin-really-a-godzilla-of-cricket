import React, { Component } from 'react';
import { render } from 'react-dom';
import { CardsProps } from '../../model/props-model'
import Card from '@material-ui/core/Card';
import './cards.css';
export class Cards extends Component<CardsProps>{

  createCards = () => {
    let htmlCards = [];
    for (let i = 0; i < this.props.cards.length; i++) {
      htmlCards.push(
        <Card className={this.props.isEnd ? "end-sub-cards" : "card"}>
          <p>{this.props.cards[i].p_title1}</p>
          <h2>{this.props.cards[i].h_title}</h2>
          <p> {this.props.cards[i].p_title2}</p>
        </Card>
      )
    }
    return htmlCards;
  }
  render() {
    return (
      <div className={this.props.isEnd ? "end-card" : "cover-slide-content"}>
        {this.createCards()}

        <p>{this.props.footer_text}</p>
      </div>
    )
  }
}