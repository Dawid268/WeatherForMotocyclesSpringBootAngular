import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddCityComponent} from "./add-city/add-city.component";
import {WeatherInformationComponent} from "./weather-information/weather-information.component";

const routes: Routes = [{path:'cities', component: AddCityComponent},{path:'weather', component: WeatherInformationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
