import { Pipe, PipeTransform } from '@angular/core';
import { Metric } from '../models/azure-rest-api.model';

@Pipe({
  name: 'limitcolor', pure: false
})
export class LimitcolorPipe implements PipeTransform {

  transform(met: Metric, currentValues: Map<string, number>, limitValues: Map<string, number>): string {
    const value = currentValues.get(met) ?? 0;
    const limit = limitValues.get(met) ?? 0;


    if (met === Metric.CPULoad && value > limit) {
      return 'red';
    } 
    else if (met === Metric.CPULoad && value < limit) {
      return 'white';
    }
    else if (value < limit) {
      return 'red';
    } 
    else {
      return 'white';
    }
  }
}