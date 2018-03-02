import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import VisualizedNumbers from './VisualizedNumbers';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  state = {
    visible: {
      sidebar: false
    }
  };

  render() {
    const {bancoResults: results, loading, error} = this.props;
    const {visible} = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error :(</div>;
    }

    return (
            <table style={{borderCollapse: 'collapse'}}>
              <thead>
                <tr>
                  <th>date</th>
                  <th>distribution</th>
                </tr>
              </thead>
              <tbody>
                {results.map(({date, numbers}, key) => {
                  return (
                    <tr
                      key={key}
                    >
                      <td>{date}</td>
                      <td>
                        <VisualizedNumbers
                          numbers={numbers}
                          size={10}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
    );
  }
}

export default graphql(
  gql`
    query {
      results(year: 2017) {
        date
        numbers
      }
    }
  `,
  {
    props: ({data: {results = []}}) => ({
      bancoResults: results
    })
  }
)(App);
