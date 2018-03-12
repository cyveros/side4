// @flow

type TestBenchType = {
  cumulativeOffset: number,
  test: boolean
};

export default class SelectionPattern {
  offsets: Array<number> = [];
  type: number = 4;

  get sliceSize(): number {
    return this.type + this.offsets.reduce((accumulator: number, offset: number): number => (offset + accumulator), 0);
  }

  withOffsets(offsets: Array<number>): SelectionPattern {
    this.offsets = offsets;

    return this;
  }

  sliceTest(slice: Array<number> = [], startIndex: number = 0) {
    if (!this.offsets || this.offsets.length === 0) {
      return true;
    }

    if (slice.length < this.sliceSize + startIndex) {
      return false;
    }

    const {test}: TestBenchType = this.offsets.reduce(
      ({cumulativeOffset, test}: TestBenchType, offset: number): TestBenchType => ({
        cumulativeOffset: cumulativeOffset + offset + 1,
        test: test && (slice[startIndex + cumulativeOffset + offset + 1] === 1)
      }), {
      cumulativeOffset: 0,
      test: true
    });

    return test;
  }
}
