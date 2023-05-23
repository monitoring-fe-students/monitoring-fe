import { Injectable } from '@angular/core';
import { Observable, concatMap, delay, from, of } from 'rxjs';
import { Instance, Metric } from 'src/app/models/azure-rest-api.model';

@Injectable({
  providedIn: 'root',
})
export class AzureRestApiService {
  private mockValues: Record<string, Record<string, number[]>> = {};

  constructor() {
    for (const instance of Object.values(Instance)) {
      this.mockValues[instance] = {};
    }

    console.log(this.mockValues);
    
    this.mockValues[Instance.CSMSProduction][Metric.CPULoad] = [0.1, 0.2, 0.3, 0.5, 0.7, 0.8, 1.2, 0.4, 0.5, 0.6, 2.6];
    this.mockValues[Instance.CSMSProduction][Metric.HDD1RemainingMB] = [1000, 900, 920, 930, 800, 700, 500, 100, 300, 100, 20];
    this.mockValues[Instance.CSMSProduction][Metric.HDD2RemainingMB] = [2000, 1900, 1920, 1930, 1800, 900, 700, 300, 400, 100, 70];
    this.mockValues[Instance.CSMSProduction][Metric.RAMRemainingMB] = [5000, 4000, 3000, 3330, 2000, 1800, 1200, 1000, 700, 100, 20];
    
    this.mockValues[Instance.VMSProduction][Metric.CPULoad] = [1.1, 1.2, 1.3, 1.5, 1.7, 1.8, 2.2, 1.4, 1.5, 1.6, 3.6];
    this.mockValues[Instance.VMSProduction][Metric.HDD1RemainingMB] = [2000, 1900, 1920, 1930, 1800, 1700, 1500, 1100, 1300, 1100, 20];
    this.mockValues[Instance.VMSProduction][Metric.HDD2RemainingMB] = [3000, 2900, 2920, 2930, 2800, 1900, 1700, 1300, 1400, 1100, 70];
    this.mockValues[Instance.VMSProduction][Metric.RAMRemainingMB] = [5001, 4001, 3001, 3331, 2001, 1801, 1201, 1001, 701, 101, 20];


    this.mockValues[Instance.CSMSQuality][Metric.CPULoad] = [0.1, 0.2, 0.3, 0.5, 0.7, 0.8, 1.2, 0.4, 0.5, 0.6, 2.6];
    this.mockValues[Instance.CSMSQuality][Metric.HDD1RemainingMB] = [1002, 902, 922, 932, 802, 702, 502, 102, 302, 102, 22];
    this.mockValues[Instance.CSMSQuality][Metric.HDD2RemainingMB] = [2002, 1902, 1922, 1932, 1802, 902, 702, 302, 402, 102, 72];
    this.mockValues[Instance.CSMSQuality][Metric.RAMRemainingMB] = [5002, 4002, 3002, 3332, 2002, 1802, 1202, 1002, 702, 102, 22];

    this.mockValues[Instance.VMSQuality][Metric.CPULoad] = [1.1, 1.2, 1.3, 1.5, 1.7, 1.8, 2.2, 1.4, 1.5, 1.6, 3.6];
    this.mockValues[Instance.VMSQuality][Metric.HDD1RemainingMB] = [2003, 1903, 1923, 1933, 1803, 1703, 1503, 1103, 1303, 1103, 23];
    this.mockValues[Instance.VMSQuality][Metric.HDD2RemainingMB] = [3003, 2903, 2923, 2933, 2803, 1903, 1703, 1303, 1403, 1103, 73];
    this.mockValues[Instance.VMSQuality][Metric.RAMRemainingMB] = [5003, 4003, 3003, 3333, 2003, 1803, 1203, 1003, 703, 103, 23];

  }

  getInstanceMetric(instance: Instance, metric: Metric): Observable<number> {
    return from(this.mockValues[instance][metric]).pipe(
      concatMap((i) => of(i).pipe(delay(1000 + Math.random() * 4000)))
    );
  }
}
