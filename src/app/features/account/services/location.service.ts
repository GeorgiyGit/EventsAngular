import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { ICountry } from '../models/location/country';
import { IRegion } from '../models/location/region';
import { ICity } from '../models/location/city';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  controllerUrl: string;

  constructor(private http: HttpClient, private accountService: AccountService) {
    this.controllerUrl = environment.apiUrl + "location/";
  }

  getCountries(): Observable<ICountry[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.accountService.getToken()
      })
    };
    return this.http.get<ICountry[]>(this.controllerUrl + 'countries', httpOptions);
  }

  getRegions(id:number): Observable<IRegion[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.accountService.getToken()
      })
    };
    return this.http.get<IRegion[]>(this.controllerUrl + 'regions/'+id, httpOptions);
  }

  getCities(id:number): Observable<ICity[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.accountService.getToken()
      })
    };
    return this.http.get<ICity[]>(this.controllerUrl + 'cities/'+id, httpOptions);
  }
}
