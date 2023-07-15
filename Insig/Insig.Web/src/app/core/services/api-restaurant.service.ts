import { Injectable } from '@angular/core';
import { ApiClientService } from "./api-client.service";
import { Observable } from "rxjs";
import { Restaurant } from '@app/features/restaurants/restaurants-form/restaurants-form.component'
//import { stringify } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class ApiRestaurantService {

  constructor(private _apiClientService: ApiClientService) { }

  getRestaurantData(): Observable<Restaurant[]> {
    return this._apiClientService.get(`${AppConfig.ApiUrl}/restaurant/restaurants`);
  }

  addRestaurantData(restaurant: Restaurant): Observable<Restaurant> {
    return this._apiClientService.post(`${AppConfig.ApiUrl}/restaurant/restaurants`, { data: restaurant });
  }
//   deleteHouseData(house: Restaurant): Observable<Restaurant> {
//     return this._apiClientService.patch(`${appConfig.apiUrl}/house/houses`, { data: house });
//   }
}