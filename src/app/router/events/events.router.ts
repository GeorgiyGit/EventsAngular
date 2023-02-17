import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CustomerSimpleEventsListComponent } from 'src/app/features/events/components/customer-simple-events-list/customer-simple-events-list.component';
import { CustomerAddEventComponent } from 'src/app/features/events/pages/customer-add-event/customer-add-event.component';
import { CustomerEventsComponent } from 'src/app/features/events/pages/customer-events/customer-events.component';
const routes: Route[] = [
    {
        path: '',
        component: CustomerEventsComponent
    },
    {
        path:'add',
        component:CustomerAddEventComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class EventsRouterModule {

}