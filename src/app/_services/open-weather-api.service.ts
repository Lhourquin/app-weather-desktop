import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '@environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OpenWeatherApiService {

  constructor(private http:HttpClient ) { }

  getForecastWeather(lat:string, lon:string):any {
    // lat : 44.34
    // lon : 10.99
   return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=fr&mode=json&units=metric&appid=${environment.OWapiKey}`);
  } 


}
