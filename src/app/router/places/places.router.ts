import { CustomerPlaceDetailsComponent } from './../../features/places/pages/customer-place-details/customer-place-details.component';
import { CustomerAddPlaceComponent } from './../../features/places/pages/customer-add-place/customer-add-place.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CustomerPlacesComponent } from 'src/app/features/places/pages/customer-places/customer-places.component';

const routes: Route[] = [
    {
        path: '',
        component: CustomerPlacesComponent
    },
    {
        path: 'add',
        component: CustomerAddPlaceComponent
    },
    {
        path:'details/:id',
        component:CustomerPlaceDetailsComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class PlacesRouterModule {

}