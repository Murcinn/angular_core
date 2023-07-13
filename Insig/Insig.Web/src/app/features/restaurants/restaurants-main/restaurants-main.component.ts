import { Component } from '@angular/core';


@Component({
  selector: 'app-restaurants-main',
  templateUrl: './restaurants-main.component.html',
  styleUrls: ['./restaurants-main.component.scss']
})
export class RestaurantsMainComponent {
  showForm = false;

  openForm() {
    this.showForm = true;
  }
}
