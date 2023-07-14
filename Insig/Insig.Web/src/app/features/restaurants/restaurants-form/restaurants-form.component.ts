import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurants-form',
  templateUrl: './restaurants-form.component.html',
  styleUrls: ['./restaurants-form.component.scss']
})
export class RestaurantsFormComponent {
  restaurantName: string = '';
  location: string = '';
  stars!: number;
  averagePrice!: number;
  kitchenType: string = 'italian';
  delivery: boolean = false;

  submitForm() {
    // Handle form submission here
    console.log('Restaurant Name:', this.restaurantName);
    console.log('Location:', this.location);
    console.log('Restaurant Stars:', this.stars);
    console.log('Average Price of Food:', this.averagePrice);
    console.log('Kitchen Type:', this.kitchenType);
    console.log('Delivery Option:', this.delivery);

    // Reset form fields
    this.restaurantName = '';
    this.location = '';
    this.stars = null!;
    this.averagePrice = null!;
    this.kitchenType = 'italian';
    this.delivery = false;
  }
}
