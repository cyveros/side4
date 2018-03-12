import React from 'react';

import SelectionPattern from './SelectionPattern';

export default class VisualizedNumbers extends React.Component {
  sp: SelectionPattern;

  constructor(props) {
    super(props);

    this.sp = new SelectionPattern();
    this.sp.withOffsets([0, 0, 0]);
  }

  render() {
    const {numbers, enableOccurence = false} = this.props;
    let indices = Array(70).fill(0);

    numbers.forEach((number) => {
      indices[number - 1] = 1;
    });

    const occurence: number = 0;
    
    if (enableOccurence) {
      numbers.reduce(
        (accumulatedOccurence: number, current: number, currentIndex): number => {
          if (current === 1 && this.sp.sliceTest(numbers, currentIndex)) {
            return accumulatedOccurence + 1;
          }

          return accumulatedOccurence;
      }, 0);
    }


    return (
      <div className="align-middle">
        {indices.map((mark, index) => {
          return (
            <span key={index} className="text-dot align-middle" style={{
              marginRight: (index + 1) % 5 ? '0.08rem' : '0.8rem' 
            }}>{mark > 0 ? '●' : '○'}</span>
          );
        })}
        {enableOccurence ? (' ' + occurence) : ''}
      </div>
    );
  }
}
