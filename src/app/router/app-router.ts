import { AddGenreComponent } from './../features/genres/pages/add-genre/add-genre.component';
import { ManagerModule } from './../features/manager/manager.module';
import { FullPlacesListComponent } from './../features/places/components/full-places-list/full-places-list.component';
import { LogInComponent } from './../features/account/pages/log-in/log-in.component';
import { RegisterComponent } from './../features/account/pages/register/register.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from '../features/manager/pages/main/main.component';

const routes: Route[] = [
    {
        path: 'places',
        loadChildren: () => import('./places/places.router').then(m => m.PlacesRouterModule)
    },
    {
        path: 'events',
        loadChildren: () => import('./events/events.router').then(m => m.EventsRouterModule)
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'log-in',
        component:LogInComponent
    },
    {
        path:'manager',
        loadChildren: () => import('../features/manager/manager.module').then(m => m.ManagerModule)
    },
    {
        path:'genres/add',
        component:AddGenreComponent
    },
    {
        path:'genres/add/:id',
        component:AddGenreComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class AppRoutingModule { }