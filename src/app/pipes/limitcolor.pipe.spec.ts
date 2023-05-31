import { LimitcolorPipe } from './limitcolor.pipe';

// simple test cases:
// 1) transform returns 'red' for Metric.CPULoad when currentValue 5 and limitValue 1
// 2) transform returns 'black' for Metric.CPULoad when currentValue 1 and limitValue 5

// parametrized test cases:
// 3) transform returns 'red' for all metrics except Metric.CPULoad when currentValue 1000 and limitValue 900
// 4) transform returns 'black' for all metrics except Metric.CPULoad when currentValue 500 and limitValue 1000
describe('LimitcolorPipe', () => {
  it('create an instance', () => {
    const pipe = new LimitcolorPipe();
    expect(pipe).toBeTruthy();
  });


});
