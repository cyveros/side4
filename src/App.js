// @flow
import React, { Component } from 'react';

import VisualizedResults from './VisualizedResults';
import VisualizedNumbers from './VisualizedNumbers';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state: {
    year: number,
    focusedResult: ?{year: number, numbers: Array<number>}
  } = {
    year: 2016,
    focusedResult: null
  };

  render() {
    const {year, focusedResult} = this.state;

    return (
      <div className="container-fluid" >
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Side<sup>4</sup></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row"
          style={{
            paddingTop: '5rem'
          }}
        >
          <div className="col-md-9">
            <VisualizedResults
              year={year}
              onFocusResult={(result: ?{year: number, numbers: Array<number>} = null) => {
                this.setState({
                  focusedResult: result
                });
              }}
            />
          </div>
          <div className="toolbox col-md-3 border-left">
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-default" onClick={() => this.setState({year: 2016})}>2016</button>
              <button type="button" className="btn btn-default" onClick={() => this.setState({year: 2017})}>2017</button>
              <button type="button" className="btn btn-default" onClick={() => this.setState({year: 2018})}>2018</button>
            </div>
            {focusedResult && <VisualizedNumbers numbers={focusedResult.numbers} enableOccurence={true}/>}
          </div>
        </div>
      </div>
         
    );
  }
}

export default App;
