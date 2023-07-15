import { Component, OnInit } from '@angular/core';

interface Restaurant {
  name: string;
}


@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss']
})

export class RestaurantsListComponent implements OnInit {
  restaurants: Restaurant[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;

  ngOnInit() {
  
    this.restaurants = [
      { name: 'Restaurant 1', location: 'Location 1', stars: 4, averagePrice: 25.5, cuisineType: 'Italian', delivery: true },
      { name: 'Restaurant 2', location: 'Location 2', stars: 3, averagePrice: 15.0, cuisineType: 'Indian', delivery: false },
      { name: 'Restaurant 3', location: 'Location 3', stars: 5, averagePrice: 35.0, cuisineType: 'Mexican', delivery: true }
    ];


    this.totalItems = this.restaurants.length;
  }

  addRestaurant(restaurant: Restaurant) {
    this.restaurants.push(restaurant);
    this.totalItems++; 
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  get displayedRestaurants(): Restaurant[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.restaurants.slice(startIndex, endIndex);
  }
}

interface Restaurant {
  name: string;
  location: string;
  stars: number;
  averagePrice: number;
  cuisineType: string;
  delivery: boolean;
}
