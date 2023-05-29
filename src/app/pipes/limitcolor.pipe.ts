import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitcolor'
})
export class LimitcolorPipe implements PipeTransform {

  transform(met: string, currentValues: Map<string, number>, limitValues: Map<string, number>): string {
    const value = currentValues.get(met) ?? 0;
    const limit = limitValues.get(met) ?? 0;


    if (met === 'CPULoad' && value > limit) {
      return 'red';
    } 
    else if (value < limit) {
      return 'red';
    } 
    else {
      return 'black';
    }
  }
}