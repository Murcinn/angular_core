import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiRestaurantService } from '@app/core/services/api-restaurant.service';
import { RestaurantDto } from '../restaurants-form/restaurants-form.component';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

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
  filtersOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  locationFilterControl = new FormControl('');
  nameFilterControl = new FormControl('');
  starsFilterControl = new FormControl('');

  constructor(private _restaurantService: ApiRestaurantService) {}

  ngOnInit(): void {
    this._restaurantService.getRestaurantData().subscribe(data => {
      this.restaurants = this.getDisplayedRestaurants(data);
      this.totalItems = data.length;
    });

    this.nameFilterControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(() => this.applyFilter());

    this.starsFilterControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(() => this.applyFilter());

    this.locationFilterControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(() => this.applyFilter());
  }

  toggleFilters(): void {
    this.filtersOpen.next(!this.filtersOpen.value);
  }

  applyFilter(): void {
    this.currentPage = 1;
    this._restaurantService.getRestaurantData().subscribe(data => {
      let filteredRestaurants = data;

      const nameFilter = this.nameFilterControl.value;
      if (nameFilter) {
        filteredRestaurants = filteredRestaurants.filter(
          restaurant => restaurant.name.toLowerCase().includes(nameFilter.toLowerCase())
        );
      }

      const starsFilter = this.starsFilterControl.value;
      if (starsFilter !== null && starsFilter !== '') {
        filteredRestaurants = filteredRestaurants.filter(
          restaurant => restaurant.stars === +starsFilter
        );
      }

      const locationFilter = this.locationFilterControl.value;
      if (locationFilter) {
        filteredRestaurants = filteredRestaurants.filter(
          restaurant => restaurant.location.toLowerCase().includes(locationFilter.toLowerCase())
        );
      }

      this.totalItems = filteredRestaurants.length;
      this.restaurants = this.getDisplayedRestaurants(filteredRestaurants);
    });
  }

  onPageChange(page: number): void {
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
      id: 0,
      name,
      location: '',
      stars: 0,
      averagePrice: 0,
      cuisineType: '',
      delivery: false
    };

    this._restaurantService.deleteRestaurantData(newRestaurant).subscribe(() => {
      this._restaurantService.getRestaurantData().subscribe(data => {
        this.totalItems = data.length;
        this.restaurants = this.getDisplayedRestaurants(data);
      });
    });
  }
}
