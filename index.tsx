import React, { Component } from 'react';
import { render } from 'react-dom';
import {Try} from './view/try';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div> 
        <Try/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
