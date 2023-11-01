import { Component, OnInit } from '@angular/core';
import { OpenWeatherApiService } from '@app/_services/open-weather-api.service';
import { Observable, Subscriber } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  lat: string = '';
  lon: string = '';
  cityName:string= '';
  infos:any;
  cardList!: Array<any>;
  loading:boolean = false;
  constructor(private OpenWeatherService: OpenWeatherApiService) {}

  ngOnInit() {
  }

  getUserLocation() {
    navigator.geolocation.getCurrentPosition((pos) => {
        this.lat = String(pos.coords.latitude);
        this.lon = String(pos.coords.longitude);
        this.getForecast();
      },
      function () {
        alert('User not allowed');
      },
      { timeout: 10000 }
    );
  }

  getForecast() {
    this.loading = true;
    this.OpenWeatherService.getForecastWeather(this.lat, this.lon).subscribe(
      (data: any) => {
        console.log(data)
        this.infos = data.city;
        this.cardList = data.list;
        this.loading = false;
      }
    );
  }
}
