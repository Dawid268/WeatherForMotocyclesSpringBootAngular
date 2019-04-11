import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cities} from "./cities";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {Weather} from "./weather";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }


  public postCities(cities: Cities[]){
      return this.http.post(`${environment.apiUrl}/add`,cities) as Observable<Cities>;
  }

  public getWeatherInformation(){
    return this.http.get(`${environment.apiUrl}/info`) as Observable<Weather[]>;
  }
}
