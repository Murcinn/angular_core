import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { RestaurantsListComponent } from '../restaurants-list/restaurants-list.component';
import { RestaurantDto } from '../restaurants-form/restaurants-form.component';
import { Input } from '@angular/core';

@Component({
  selector: 'app-restaurants-form-edit',
  templateUrl: './restaurants-form-edit.component.html',
  styleUrls: ['./restaurants-form-edit.component.scss']
})
export class RestaurantsFormEditComponent {

  @Input() name: string | undefined;
  @Input() restaurantToEdit: RestaurantDto | undefined;
  @Output() closeDialog = new EventEmitter<void>();

  close() {
    this.closeDialog.emit();
  }
  save() {
    this.closeDialog.emit();

  }


}
