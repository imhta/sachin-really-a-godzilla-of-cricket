import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from '@material-ui/core/Button';
import Chart from 'react-google-charts';
import Card from '@material-ui/core/Card';
import { HeadDiv } from './head-div/head-div';
import { ContentDiv } from './content-div/content-div';
import { Cards } from './cards/cards';
import './try.css';
import { local_data, careerByYear } from '../model/data';


export class Try extends Component {
  createChartData = () => {
    let data = [];
    for (let i = 0; i < careerByYear.yearsPlayed.length; i++) {
      data.push([
        careerByYear.yearsPlayed[i],
        careerByYear.runScored[i]]
      )
    }
    return data;
  }
  render() {

    return (
      <div>

        <div className="cover-img"></div>
        <div className="cover-slide-header">
          <h3>{local_data.one.main_cover_title.sm1}<span className="im-text">{local_data.one.main_cover_title.b1}</span> {local_data.one.main_cover_title.sm2}
            <span className="im-text"> {local_data.one.main_cover_title.b2}</span></h3>
          <h1>{local_data.one.main_cover_sub}</h1>
        </div>
        <ContentDiv
          p_title={local_data.two.content_div.p_title}
          h_title={local_data.two.content_div.h_title}
          learn_more_link={local_data.two.content_div.learn_more_link} />

        <HeadDiv
          sm={local_data.two.head_div.sm}
          b={local_data.two.head_div.b}
          reverse={true} />

        <Cards
          cards={local_data.there.cards}
          isEnd={false} />
        <div className="cover-slide-content">

          <Card className="chart-card">
            <Chart
              width={'100%'}
              height={'100%'}
              chartType="AreaChart"
              loader={<div>Loading Chart</div>}
              data={this.createChartData()}
              options={{
                title: 'His career performance',
                hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                vAxis: { minValue: 0 },
                // For the legend to fit, we make the chart area smaller
                chartArea: { width: '80%', height: '70%' },
                // lineWidth: 25
              }}
            />
          </Card>

        </div>
        <div className="cover-img2"></div>

        <HeadDiv
          sm={local_data.four.head_div.sm}
          b={local_data.four.head_div.b}
          reverse={false} />

        <div className="cover-slide-content">
          <Card className="card fan1">
          </Card>
          <Card className="card fan2">
          </Card>
          <Card className="card fan3">

          </Card>
        </div>
        <HeadDiv
          sm={local_data.five.head_div.sm}
          b={local_data.five.head_div.b}
          reverse={false} />

        <Cards
          cards={local_data.five.cards}
          footer_text={local_data.five.footer}
          isEnd={true} />


      </div>

    );
  }
}