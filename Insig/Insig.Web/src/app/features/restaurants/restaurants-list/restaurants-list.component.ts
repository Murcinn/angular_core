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
    // Initialize the list with some sample data
    this.restaurants = [
      { name: 'Restaurant 1', location: 'Location 1', stars: 4, averagePrice: 25.5, kitchenType: 'Italian', delivery: true },
      { name: 'Restaurant 2', location: 'Location 2', stars: 3, averagePrice: 15.0, kitchenType: 'Indian', delivery: false },
      { name: 'Restaurant 3', location: 'Location 3', stars: 5, averagePrice: 35.0, kitchenType: 'Mexican', delivery: true }
    ];

    // Calculate total items count
    this.totalItems = this.restaurants.length;
  }

  addRestaurant(restaurant: Restaurant) {
    this.restaurants.push(restaurant);
    this.totalItems++; // Increment total items count
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
  kitchenType: string;
  delivery: boolean;
}
