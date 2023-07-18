import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMapTo } from 'rxjs/operators';
import { ApiRestaurantService } from '@app/core/services/api-restaurant.service';



export interface RestaurantDto {
  id: number,
  name: string;
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
export class RestaurantsFormComponent  implements OnInit  {
  restaurant: RestaurantDto = {
    id: 0,
    name: '',
    location: '',
    stars: 0,
    averagePrice: 0,
    cuisineType: '',
    delivery: false
  };
  restaurants!: Observable<RestaurantDto[]>;
  
  constructor(private _restaurantService: ApiRestaurantService) {}

  addRestaurant(): void {
    const newRestaurant: RestaurantDto = {
      id: 0,
      name: this.restaurant.name,
      location: this.restaurant.location,
      stars: this.restaurant.stars,
      averagePrice: this.restaurant.averagePrice,
      cuisineType: this.restaurant.cuisineType,
      delivery: this.restaurant.delivery
    };
    
    // this.restaurants = this._restaurantService.addRestaurantData(newRestaurant)
    // .pipe(
    //   switchMapTo(this._restaurantService.getRestaurantData())
    // );

    
    this._restaurantService.addRestaurantData(newRestaurant).subscribe(() => {
      this.restaurants = this._restaurantService.getRestaurantData();
      });
      
        this.restaurant = {
          id: 0,
          name: '',
          location: '',
          stars: 0,
          averagePrice: 0,
          cuisineType: '',
          delivery: false
        };
  }
  // addRestaurant(oldRestaurant: RestaurantDto,): void {

  //   const newRestaurant: RestaurantDto = {
  //     id: 0,
  //     name: this.restaurant.name,
  //     location: this.restaurant.location,
  //     stars: this.restaurant.stars,
  //     averagePrice: this.restaurant.averagePrice,
  //     cuisineType: this.restaurant.cuisineType,
  //     delivery: this.restaurant.delivery
  //   };

  //   this._restaurantService.editRestaurantData(oldRestaurant,newRestaurant).subscribe(() => {
  //     this.restaurants = this._restaurantService.getRestaurantData();
  //     });

  // }

  ngOnInit(): void {
    this.restaurants = this._restaurantService.getRestaurantData();
    this.restaurant.name='';
    
}




}
