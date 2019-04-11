import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../weather.service";
import {Cities} from "../cities";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html'
})
export class AddCityComponent implements OnInit {
  cities: Cities[] =[];
  public errors: string[];
  name: Cities;
  constructor(private weather: WeatherService) { }

  ngOnInit() {

  }

  public CreateCitiesList(){
    this.cities.push(this.name);
  }

  public addCities(){
    return this.weather.postCities(this.cities).subscribe(value => {
      console.log(value),error => this.errors = error;
    })
  }

}
