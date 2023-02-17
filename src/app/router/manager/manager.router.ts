import { ModeratorGuard } from './../../core/guard/moderator.guard';
import { FullGenresListComponent } from './../../features/genres/components/full-genres-list/full-genres-list.component';
import { FullEventsListComponent } from './../../features/events/components/full-events-list/full-events-list.component';
import { MainComponent } from './../../features/manager/pages/main/main.component';
import { FullPlacesListComponent } from './../../features/places/components/full-places-list/full-places-list.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule, CanActivate } from '@angular/router';
const routes: Route[] = [
    {
        path:'',
        component:MainComponent,
        canActivate:[ModeratorGuard],
        children:[
            {
                path: 'places',
                component: FullPlacesListComponent
            },
            {
                path:'events',
                component:FullEventsListComponent
            },
            {
                path:'genres',
                component:FullGenresListComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class ManagerRouterModule {

}