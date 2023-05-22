import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AzureRestApiService {

  constructor() { }

  getCurrentLoadAverage(vm: string): Observable<number> {
    return of(0.5).pipe(delay(5));    
  }
}
