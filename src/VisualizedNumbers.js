import React from 'react';

export default class VisualizedNumbers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      indices: []
    };
  }

  render() {
    const {numbers, size = 5, separation = 3} = this.props;
    let indices = Array(70).fill(0);

    numbers.forEach((number) => {
      indices[number - 1] = 1;
    });

    return (
      indices.length > 0 && <svg width={70 * (size + separation + 2)} height={size + 11} version={'1.1'} xmlns={"http://www.w3.org/2000/svg"}>
        {indices.map((mark, index) => {
          return (
            mark > 0 && <rect
              key={index}
              width={size}
              height={size}
              x={index * (size + 2) + 1}
              y={1}
              stroke={'black'}
              strokeWidth={1}
              fill={'black'}
            />
          );
        })}
        {indices.map((mark, index) => {
          return (
            <line
              key={index}
              x1={index * (size + 2)}
              y1={0}
              x2={index * (size + 2)}
              y2={size + (index % 5 !== 0 ? 1 : 11)}
              stroke={index % 5 !== 0 ? 'gray' : 'black'}
              strokeWidth={1}
            />
          );
        })}
        <line x1={0} x2={70 * (size + separation + 2)} y1={size + 1} y2={size + 1} stroke={'black'} strokeWidth={1}/>
      </svg>
    );
  }
}
