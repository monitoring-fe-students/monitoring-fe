import { Component, OnInit } from '@angular/core';
import { AzureRestApiService } from 'src/services/azure-rest-api.service';
import { Instance, Metric } from './models/azure-rest-api.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // CSMS Production
  public CPULoadCP: number = 0;
  public HDD1CP: number = 0;
  public HDD2CP: number = 0;
  public RAMCP: number = 0;

  // VMS Production
  public CPULoadVP: number = 0;
  public HDD1VP: number = 0;
  public HDD2VP: number = 0;
  public RAMVP: number = 0;

  // CSMS Quality
  public CPULoadCQ: number = 0;
  public HDD1CQ: number = 0;
  public HDD2CQ: number = 0;
  public RAMCQ: number = 0;

  // VMS Quality
  public CPULoadVQ: number = 0;
  public HDD1VQ: number = 0;
  public HDD2VQ: number = 0;
  public RAMVQ: number = 0;


  
  constructor(private azureRestApiService: AzureRestApiService) { }
  
  ngOnInit(): void {
      // CSMS Production
    this.azureRestApiService.getInstanceMetric(Instance.CSMSProduction, Metric.CPULoad).subscribe((data) => this.CPULoadCP = data)
    this.azureRestApiService.getInstanceMetric(Instance.CSMSProduction, Metric.HDD1RemainingMB).subscribe((data) => this.HDD1CP = data)
    this.azureRestApiService.getInstanceMetric(Instance.CSMSProduction, Metric.HDD1RemainingMB).subscribe((data) => this.HDD2CP = data)
    this.azureRestApiService.getInstanceMetric(Instance.CSMSProduction, Metric.HDD1RemainingMB).subscribe((data) => this.RAMCP = data)

      // VMS Production
    this.azureRestApiService.getInstanceMetric(Instance.VMSProduction, Metric.CPULoad).subscribe((data) => this.CPULoadVP = data)
    this.azureRestApiService.getInstanceMetric(Instance.VMSProduction, Metric.HDD1RemainingMB).subscribe((data) => this.HDD1VP = data)
    this.azureRestApiService.getInstanceMetric(Instance.VMSProduction, Metric.HDD1RemainingMB).subscribe((data) => this.HDD2VP = data)
    this.azureRestApiService.getInstanceMetric(Instance.VMSProduction, Metric.HDD1RemainingMB).subscribe((data) => this.RAMVP = data)

    // CSMS Quality
    this.azureRestApiService.getInstanceMetric(Instance.CSMSQuality, Metric.CPULoad).subscribe((data) => this.CPULoadCQ = data)
    this.azureRestApiService.getInstanceMetric(Instance.CSMSQuality, Metric.HDD1RemainingMB).subscribe((data) => this.HDD1CQ = data)
    this.azureRestApiService.getInstanceMetric(Instance.CSMSQuality, Metric.HDD1RemainingMB).subscribe((data) => this.HDD2CQ = data)
    this.azureRestApiService.getInstanceMetric(Instance.CSMSQuality, Metric.HDD1RemainingMB).subscribe((data) => this.RAMCQ = data)

    // VMS Quality
    this.azureRestApiService.getInstanceMetric(Instance.VMSQuality, Metric.CPULoad).subscribe((data) => this.CPULoadVQ = data)
    this.azureRestApiService.getInstanceMetric(Instance.VMSQuality, Metric.HDD1RemainingMB).subscribe((data) => this.HDD1VQ = data)
    this.azureRestApiService.getInstanceMetric(Instance.VMSQuality, Metric.HDD1RemainingMB).subscribe((data) => this.HDD2VQ = data)
    this.azureRestApiService.getInstanceMetric(Instance.VMSQuality, Metric.HDD1RemainingMB).subscribe((data) => this.RAMVQ = data)
  }  
}

