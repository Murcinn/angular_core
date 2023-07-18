import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable, map, switchMapTo } from 'rxjs';
import { ApiRestaurantService } from '@app/core/services/api-restaurant.service';
import { RestaurantDto } from '../restaurants-form/restaurants-form.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RestaurantsFormEditComponent } from '../restaurants-form-edit/restaurants-form-edit.component';


@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss']
})

export class RestaurantsListComponent implements OnInit {

  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;

  restaurants!: Observable<RestaurantDto[]>;
  
  constructor(private _restaurantService: ApiRestaurantService) {}

  ngOnInit(): void {
      this._restaurantService.getRestaurantData().subscribe(data => {
      this.restaurants = this.getDisplayedRestaurants(data);
      this.totalItems = data.length;
    });

  }

  onPageChange(page: number) {
    this.currentPage = page;
    this._restaurantService.getRestaurantData().subscribe(data => {
      this.restaurants = this.getDisplayedRestaurants(data);
    });

  }

  getDisplayedRestaurants(data: RestaurantDto[]): Observable<RestaurantDto[]> {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    return new Observable<RestaurantDto[]>(subscriber => {
      const slicedRestaurants = data.slice(startIndex, endIndex);
      subscriber.next(slicedRestaurants);
      subscriber.complete();
    });
  }
    

  deleteRestaurant(name: string): void {
    const newRestaurant: RestaurantDto = {
      id:0,
      name,
      location: '',
      stars:0 ,
      averagePrice: 0 ,
      cuisineType: '',
      delivery: false 
    };
    
    // this.restaurants = this._restaurantService.deleteRestaurantData(newRestaurant)
    //   .pipe(
    //     switchMapTo(this._restaurantService.getRestaurantData())
                
    //   );

    this._restaurantService.deleteRestaurantData(newRestaurant).subscribe(() => {

      this._restaurantService.getRestaurantData().subscribe(data => {
        this.totalItems = data.length;
        this.restaurants = this.getDisplayedRestaurants(data);
      });
    });   

  }

}


