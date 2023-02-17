import { FullGenresListComponent } from './../genres/components/full-genres-list/full-genres-list.component';
import { FullPlacesListComponent } from './../places/components/full-places-list/full-places-list.component';
import { RouterModule } from '@angular/router';
import { EntitiesNavigationComponent } from './components/entities-navigation/entities-navigation.component';
import { MainComponent } from './pages/main/main.component';
import { ManagerRouterModule } from './../../router/manager/manager.router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullEventsListComponent } from '../events/components/full-events-list/full-events-list.component';



@NgModule({
  declarations: [
    MainComponent,
    EntitiesNavigationComponent,
    FullPlacesListComponent,
    FullGenresListComponent
  ],
  imports: [
    CommonModule,
    ManagerRouterModule,
    RouterModule,
  ]
})
export class ManagerModule { }
