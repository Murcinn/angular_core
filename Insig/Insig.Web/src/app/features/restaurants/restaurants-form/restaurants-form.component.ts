import { Component } from '@angular/core';


@Component({
  selector: 'app-restaurants-form',
  templateUrl: './restaurants-form.component.html',
  styleUrls: ['./restaurants-form.component.scss']
})

export class RestaurantsFormComponent {
  firstName: string = '';
  lastName: string = '';

  submitForm() {
    // Handle form submission here
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);

    // Reset form fields
    this.firstName = '';
    this.lastName = '';
  }
}
