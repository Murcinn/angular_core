import { Injectable } from '@angular/core';
import { ApiClientService } from "./api-client.service";
import { Observable } from "rxjs";
import { RestaurantDto } from '@app/features/restaurants/restaurants-form/restaurants-form.component'
//import { stringify } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class ApiRestaurantService {

  constructor(private _apiClientService: ApiClientService) { }

  getRestaurantData(): Observable<RestaurantDto[]> {
    return this._apiClientService.get(`${AppConfig.ApiUrl}/Restaurant/restaurants`);
  }

  addRestaurantData(restaurant: RestaurantDto): Observable<RestaurantDto> {
    return this._apiClientService.post(`${AppConfig.ApiUrl}/Restaurant/restaurants`, { data: restaurant });
  }

  // editRestaurantData(restaurant: RestaurantDto, updatedRestaurant: RestaurantDto): Observable<RestaurantDto> {
  //   return this._apiClientService.patch(`${AppConfig.ApiUrl}/Restaurant/restaurants/${restaurant.name}`, { data: updatedRestaurant });
  // }


  deleteRestaurantData(restaurant: RestaurantDto): Observable<RestaurantDto> {
    return this._apiClientService.patch(`${AppConfig.ApiUrl}/Restaurant/restaurants`, { data: restaurant });
  }


}