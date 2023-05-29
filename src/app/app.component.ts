import { Component, OnInit } from '@angular/core';
import { AzureRestApiService } from 'src/services/azure-rest-api.service';
import { Instance, Metric } from './models/azure-rest-api.model';
import { NgSwitchDefault } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public instance = Object.values(Instance)
  public metric = Object.values(Metric)
  public subscription: Subscription = new Subscription;
  public CPULoad: number = 0;
  public HDD1: number = 0;
  public HDD2: number = 0;
  public RAM: number = 0;
  
  constructor(public azureRestApiService: AzureRestApiService) { }
  
  ngOnInit(): void {
      this.switchInstance(Instance.CSMSProduction);
  }

  

  public switchInstance(instance: Instance) {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.azureRestApiService.getInstanceMetric(instance, Metric.CPULoad).subscribe((data) => this.CPULoad = data);
    this.subscription.add(this.azureRestApiService.getInstanceMetric(instance, Metric.HDD1RemainingMB).subscribe((data) => this.HDD1 = data));
    this.subscription.add(this.azureRestApiService.getInstanceMetric(instance, Metric.HDD2RemainingMB).subscribe((data) => this.HDD2 = data));
    this.subscription.add(this.azureRestApiService.getInstanceMetric(instance, Metric.RAMRemainingMB).subscribe((data) => this.RAM = data));
  }
}
