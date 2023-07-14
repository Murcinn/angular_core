import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/guards/auth.guard';

import { SampleComponent } from './sample/sample.component';
import { RestaurantsMainComponent } from './restaurants/restaurants-main/restaurants-main.component';
import { RestaurantsFormComponent } from './restaurants/restaurants-form/restaurants-form.component';
import { RestaurantsListComponent } from '@app/restaurants-list/restaurants-list.component';

const routes: Routes = [
    
        {path: 'sample',component: SampleComponent},
        {path: 'restaurants' ,component:RestaurantsMainComponent},
        {path: 'restaurantsform' ,component:RestaurantsFormComponent},
        {path: 'restaurantslist' ,component:RestaurantsListComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeaturesRoutingModule { }
