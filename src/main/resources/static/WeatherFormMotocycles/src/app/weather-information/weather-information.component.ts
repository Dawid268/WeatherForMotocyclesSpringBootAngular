import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";
import {Weather} from "../weather";

@Component({
  selector: 'app-weather-information',
  templateUrl: './weather-information.component.html'
})
export class WeatherInformationComponent implements OnInit {
  weatherModel: Weather[] = null;
  // cityName: string;
  // wind: number;
  // rain: boolean;
  // temp: number;
  constructor(private weather: WeatherService) {
  }

  ngOnInit() {
    this.LoadWeatherInformation();
  }

  public LoadWeatherInformation() {
    return this.weather.getWeatherInformation().subscribe(value => { this.weatherModel=value;
    });
  }

}
