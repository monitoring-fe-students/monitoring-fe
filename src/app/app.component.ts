import { Component, OnInit } from '@angular/core';
import { AzureRestApiService } from 'src/services/azure-rest-api.service';
import { Instance, Metric } from './models/azure-rest-api.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public loadAverage: number = 0;
  public HDD1: number = 0;
  public HDD2: number = 0;
  public RAM: number = 0;


  
  constructor(private azureRestApiService: AzureRestApiService) { }
  
  ngOnInit(): void {
    this.azureRestApiService.getInstanceMetric(Instance.CSMSProduction, Metric.CPULoad).subscribe((data) => this.loadAverage = data)
    this.azureRestApiService.getInstanceMetric(Instance.CSMSProduction, Metric.HDD1RemainingMB).subscribe((data) => this.HDD1 = data)
    this.azureRestApiService.getInstanceMetric(Instance.CSMSProduction, Metric.HDD1RemainingMB).subscribe((data) => this.HDD2 = data)
    this.azureRestApiService.getInstanceMetric(Instance.CSMSProduction, Metric.HDD1RemainingMB).subscribe((data) => this.RAM = data)
  }  
}

