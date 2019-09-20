import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cacheable } from 'ngx-cacheable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://data.fixer.io/api/latest?access_key=33b23d6e01efe285daf21f65e1124757';

  constructor(private httpClient: HttpClient) { }

  @Cacheable({
    maxAge: 600000
  })
  public getConversionRate() {
    return this.httpClient.get(this.API_URL);
  }
}
