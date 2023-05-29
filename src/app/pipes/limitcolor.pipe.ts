import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitcolor'
})
export class LimitcolorPipe implements PipeTransform {

  transform(met: unknown, currentValues: unknown[], limitValues: unknown): unknown {
    return null;
  }

}


// "met === metricenum.CPULoad ? (currentValues.get(met) ?? 0) > (limitValues.get(met) ?? 0) ? 'red' : 'black' : 
// (currentValues.get(met) ?? 0) < (limitValues.get(met) ?? 0) ? 'red' : 'black'"