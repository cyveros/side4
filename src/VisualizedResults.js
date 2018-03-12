import React from 'react';
import VisualizedNumbers from './VisualizedNumbers';

import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

class VisualizedResults extends React.Component {
  render() {
    const {data: {results = [], loading, error}, year, onFocusResult} = this.props;

    if (loading) {
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Year {year}</h5>
            <div>loading ...</div>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Year {year}</h5>
            <div>Error :(</div>
          </div>
        </div>
      );
    }

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Year {year}</h5>
        </div>
        <table className="table table-hover table-sm card-body">
          <tbody>
            {results.map(({date, numbers}, key) => {
              return (
                <tr
                  key={key}
                  onClick={() => {
                    onFocusResult({year, numbers});
                  }}
                >
                  <td>
                    <span className="badge badge-pill">{date}</span>
                  </td>
                  <td>
                    <VisualizedNumbers
                      year={year}
                      numbers={numbers}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default graphql(
  gql`
    query($year: Int) {
      results(year: $year) {
        id
        date
        numbers
      }
    }
  `,
  {
    options: (props) => ({
      variables: {
        year: props.year
      },
      notifyOnNetworkStatusChange: true
    })
  }
)(VisualizedResults);
