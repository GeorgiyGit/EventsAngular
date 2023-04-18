import { AddGenreComponent } from './../features/genres/pages/add-genre/add-genre.component';
import { ManagerModule } from './../features/manager/manager.module';
import { FullPlacesListComponent } from './../features/places/components/full-places-list/full-places-list.component';
import { LogInComponent } from './../features/account/pages/log-in/log-in.component';
import { RegisterComponent } from './../features/account/pages/register/register.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from '../features/manager/pages/main/main.component';
import { FavoriteComponent } from '../features/favorite/pages/favorite/favorite.component';
import { FavoriteEventsComponent } from '../features/favorite/components/favorite-events/favorite-events.component';
import { FavoritePlacesComponent } from '../features/favorite/components/favorite-places/favorite-places.component';
import { TermsOfServiceComponent } from '../core/components/terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from '../core/components/privacy-policy/privacy-policy.component';
import { AccountPageComponent } from '../features/account/pages/account-page/account-page.component';
import { UserInformationComponent } from '../features/account/components/user-information/user-information.component';
import { UserCreatedEventsComponent } from '../features/account/components/user-created-events/user-created-events.component';
import { UserCreatedPlacesComponent } from '../features/account/components/user-created-places/user-created-places.component';
import { AvatarCropperComponent } from '../features/images/components/avatar-cropper/avatar-cropper.component';
const routes: Route[] = [
    {
        path: 'favorite',
        component: FavoriteComponent,
        outlet: 'overflow',
        children:[
            {
                path: 'events',
                component: FavoriteEventsComponent,
                //outlet: 'favorite_items'
            },
            {
                path: 'places',
                component: FavoritePlacesComponent,
               // outlet: 'favorite_items'
            },
        ]
    },
    {
        path:'avatar-cropper',
        outlet:'overflow',
        component:AvatarCropperComponent
    },
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
    },
    {
        path:'terms-of-service',
        component:TermsOfServiceComponent
    },
    {
        path:'privacy-policy',
        component:PrivacyPolicyComponent
    },
    {
        path:'account',
        component:AccountPageComponent,
        children:[
            {
                path: 'info',
                component: UserInformationComponent,
                //outlet: 'favorite_items'
            },
            {
                path: 'events',
                component: UserCreatedEventsComponent,
                //outlet: 'favorite_items'
            },
            {
                path: 'places',
                component: UserCreatedPlacesComponent,
               // outlet: 'favorite_items'
            },
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class AppRoutingModule { }