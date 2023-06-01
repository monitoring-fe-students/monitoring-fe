import { map } from 'rxjs';
import { LimitcolorPipe } from './limitcolor.pipe';
import { Metric } from '../models/azure-rest-api.model';

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

  it("1", ()=>{
    const metric = 'CPULoad';
    const currentValues = new Map<Metric, number>();
    const limitValues = new Map<Metric, number>();
    limitValues.set(Metric.CPULoad, 1);
    currentValues.set(Metric.CPULoad, 5);
    const color = 'red';
    const pipe = new LimitcolorPipe();

    const result = pipe.transform(Metric.CPULoad, currentValues, limitValues);

    expect(result).toBe(color);
  })

  it("2", ()=>{
    const metric = 'CPULoad';
    const currentValues = new Map<Metric, number>();
    const limitValues = new Map<Metric, number>();
    limitValues.set(Metric.CPULoad, 5);
    currentValues.set(Metric.CPULoad, 1);
    const color = 'black';
    const pipe = new LimitcolorPipe();

    const result = pipe.transform(Metric.CPULoad, currentValues, limitValues);

    expect(result).toBe(color);
  })

  it("3", ()=>{
    const limitValues = new Map<Metric, number>([
      [Metric.HDD1RemainingMB, 1000],
      [Metric.HDD2RemainingMB, 1000],
      [Metric.RAMRemainingMB, 1000]
    ]);
    const currentValues = new Map<Metric, number>([
      [Metric.HDD1RemainingMB, 900],
      [Metric.HDD2RemainingMB, 900],
      [Metric.RAMRemainingMB, 900]
    ]);
    const color = 'red';
    const pipe = new LimitcolorPipe();

    const result = pipe.transform(Metric.HDD1RemainingMB, currentValues, limitValues);    

    expect(result).toBe(color);
  })

  it("4", ()=>{
    const limitValues = new Map<Metric, number>([
      [Metric.HDD1RemainingMB, 500],
      [Metric.HDD2RemainingMB, 500],
      [Metric.RAMRemainingMB, 500]
    ]);
    const currentValues = new Map<Metric, number>([
      [Metric.HDD1RemainingMB, 1000],
      [Metric.HDD2RemainingMB, 1000],
      [Metric.RAMRemainingMB, 1000]
    ]);
    const color = 'black';
    const pipe = new LimitcolorPipe();

    const result = pipe.transform(Metric.HDD1RemainingMB, currentValues, limitValues);

    expect(result).toBe(color);
  })
});
