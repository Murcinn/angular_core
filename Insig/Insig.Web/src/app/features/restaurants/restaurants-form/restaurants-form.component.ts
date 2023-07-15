import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRestaurantService } from '@app/core/services/api-restaurant.service';
import { switchMapTo } from "rxjs/operators";

export interface Restaurant {
  restaurantName: string;
  location: string;
  stars: number;
  averagePrice: number;
  cuisineType: string;
  delivery: boolean;
}

@Component({
  selector: 'app-restaurants-form',
  templateUrl: './restaurants-form.component.html',
  styleUrls: ['./restaurants-form.component.scss']
})
export class RestaurantsFormComponent {
  restaurant: Restaurant = {
    restaurantName: '',
    location: '',
    stars: 0,
    averagePrice: 0,
    cuisineType: 'italian',
    delivery: false
  };
  restaurants!: Observable<Restaurant[]>;

  constructor(private _restaurantService: ApiRestaurantService) {}

  addRestaurant(): void {
    const newRestaurant: Restaurant = {
      restaurantName: this.restaurant.restaurantName,
      location: this.restaurant.location,
      stars: this.restaurant.stars,
      averagePrice: this.restaurant.averagePrice,
      cuisineType: this.restaurant.cuisineType,
      delivery: this.restaurant.delivery
    };

    this._restaurantService.addRestaurantData(newRestaurant).subscribe(() => {
      this.restaurants = this._restaurantService.getRestaurantData();
    });

    this.restaurant = {
      restaurantName: '',
      location: '',
      stars: 0,
      averagePrice: 0,
      cuisineType: 'italian',
      delivery: false
    };
  }
}
