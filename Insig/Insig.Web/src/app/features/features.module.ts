import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@app/material.module';

import { LoginModule } from './account/login/login.module';
import { LogoutModule } from './account/logout/logout.module';
import { RegisterModule } from './account/register/register.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { SampleComponent } from './sample/sample.component';
import { RestaurantsMainComponent } from './restaurants/restaurants-main/restaurants-main.component';
import { RestaurantsFormComponent } from './restaurants/restaurants-form/restaurants-form.component';
import { FormsModule } from '@angular/forms';
import { RestaurantsListComponent } from './restaurants/restaurants-list/restaurants-list.component';
import { PaginatorComponent } from './restaurants/paginator/paginator.component';
import { RestaurantsFormEditComponent } from './restaurants/restaurants-form-edit/restaurants-form-edit.component'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        FeaturesRoutingModule,
        MaterialModule,
        LoginModule,
        RegisterModule,
        LogoutModule,
        FormsModule,
        ReactiveFormsModule

    ],
    declarations: [
        SampleComponent,
        RestaurantsMainComponent,
        RestaurantsFormComponent,
        RestaurantsListComponent,
        PaginatorComponent,
        RestaurantsFormEditComponent
    ],
    exports: [
        SampleComponent,
        RestaurantsListComponent,
        RestaurantsFormEditComponent,
        RestaurantsMainComponent
    ],
    providers: [],
    bootstrap: [RestaurantsMainComponent],
    entryComponents: [RestaurantsFormEditComponent]

})
export class FeaturesModule { }
export class AppModule { }
