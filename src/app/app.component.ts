import { Component, OnInit } from '@angular/core';
import { AzureRestApiService } from 'src/app/services/azure-rest-api.service';
import { Instance, Metric } from './models/azure-rest-api.model';
import { Subscription } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public instance = Object.values(Instance)
  public metric = Object.values(Metric)
  public metricenum = Metric
  public subscription: Subscription = new Subscription;
  public currentValues = new Map<Metric, number>();
  public limitValues = new Map<Metric, number>();
  
  constructor(public azureRestApiService: AzureRestApiService) { }
  
  ngOnInit(): void {
      this.switchInstance(Instance.CSMSProduction);
  }

  public switchInstance(instance: Instance) {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.azureRestApiService.getInstanceMetric(instance, Metric.CPULoad).subscribe((data) => this.currentValues.set(Metric.CPULoad, data));
    this.subscription.add(this.azureRestApiService.getInstanceMetric(instance, Metric.HDD1RemainingMB).subscribe((data) => this.currentValues.set(Metric.HDD1RemainingMB, data)));
    this.subscription.add(this.azureRestApiService.getInstanceMetric(instance, Metric.HDD2RemainingMB).subscribe((data) => this.currentValues.set(Metric.HDD2RemainingMB, data)));
    this.subscription.add(this.azureRestApiService.getInstanceMetric(instance, Metric.RAMRemainingMB).subscribe((data) => this.currentValues.set(Metric.RAMRemainingMB, data)));

    this.limitValues.set(Metric.CPULoad, 2); 
    this.limitValues.set(Metric.HDD1RemainingMB, 100); 
    this.limitValues.set(Metric.HDD2RemainingMB, 100);
    this.limitValues.set(Metric.RAMRemainingMB, 100); 
  }
}