import { Component, OnInit } from '@angular/core';
import { AzureRestApiService } from 'src/services/azure-rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public loadAverage: number = 0;

  constructor(private azureRestApiService: AzureRestApiService) { }
  
  ngOnInit(): void {
    this.azureRestApiService.getCurrentLoadAverage("VMS-Prod").subscribe((data) => this.loadAverage = data)
  }  
}
