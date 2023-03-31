import { GoogleRegisterBtnComponent } from './../features/account/components/google-register-btn/google-register-btn.component';
import { PlaceLikeButtonComponent } from './../features/likes/components/place-like-button/place-like-button.component';
import { PlacesPhoneFilterComponent } from './../features/places/components/places-phone-filter/places-phone-filter.component';
import { CommentsListComponent } from './../features/comments/components/comments-list/comments-list.component';
import { AddCommentComponent } from './../features/comments/components/add-comment/add-comment.component';
import { PlaceFavoriteButtonComponent } from './../features/favorite/components/place-favorite-button/place-favorite-button.component';
import { CustomerPlaceDetailsComponent } from './../features/places/pages/customer-place-details/customer-place-details.component';
import { FullEventsListComponent } from './../features/events/components/full-events-list/full-events-list.component';
import { SelectPlaceComponent } from './../features/places/components/select-place/select-place.component';
import { CustomerAddEventComponent } from './../features/events/pages/customer-add-event/customer-add-event.component';
import { EventsFilterComponent } from './../features/events/components/events-filter/events-filter.component';
import { CustomerEventCardComponent } from './../features/events/components/customer-event-card/customer-event-card.component';
import { CustomerAddEventButtonComponent } from './../features/events/components/customer-add-event-button/customer-add-event-button.component';
import { PlacesFilterComponent } from './../features/places/components/places-filter/places-filter.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { UserGuard } from './guard/user.guard';
import { ModeratorGuard } from './guard/moderator.guard';
import { AdminGuard } from './guard/admin.guard';
import { AddGenreComponent } from './../features/genres/pages/add-genre/add-genre.component';
import { EntitiesNavigationComponent } from './../features/manager/components/entities-navigation/entities-navigation.component';
import { FullPlacesListComponent } from './../features/places/components/full-places-list/full-places-list.component';
import { MainComponent } from './../features/manager/pages/main/main.component';
import { CustomerAddPlaceComponent } from './../features/places/pages/customer-add-place/customer-add-place.component';
import { SelectGenresComponent } from './../features/genres/components/select-genres/select-genres.component';
import { CustomerPlaceCardComponent } from './../features/places/components/customer-place-card/customer-place-card.component';
import { CustomerAddPlaceButtonComponent } from './../features/places/components/customer-add-place-button/customer-add-place-button.component';
import { LogInComponent } from './../features/account/pages/log-in/log-in.component';
import { RegisterComponent } from './../features/account/pages/register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CustomerPlacesComponent } from '../features/places/pages/customer-places/customer-places.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from '../router/app-router';
import { ReactiveFormsModule } from '@angular/forms';
import { ManagerModule } from '../features/manager/manager.module';
import { FooterComponent } from './components/footer/footer.component';
import { CustomerEventsComponent } from '../features/events/pages/customer-events/customer-events.component';
import { CommentComponent } from '../features/comments/components/comment/comment.component';
import { GoogleLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlerService } from './services/error-handler.service';
import { CustomerAddImagesComponent } from '../features/images/components/customer-add-images/customer-add-images.component';
import { DndDirective } from '../dnd.directive';
import { CarouselComponent } from '../features/images/components/carousel/carousel.component';


export function tokenGetter() {
  return localStorage.getItem("user-token");
}


@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    RegisterComponent,
    LogInComponent,


    AddCommentComponent,
    CommentsListComponent,
    CommentComponent,

    CustomerPlacesComponent,
    PlacesFilterComponent,
    CustomerAddPlaceButtonComponent,
    CustomerAddPlaceComponent,
    CustomerPlaceCardComponent,
    SelectPlaceComponent,
    CustomerPlaceDetailsComponent,
    PlacesPhoneFilterComponent,

    CustomerEventsComponent,
    CustomerAddEventButtonComponent,
    CustomerEventCardComponent,
    EventsFilterComponent,
    CustomerAddEventComponent,
    FullEventsListComponent,

    SelectGenresComponent,
    AddGenreComponent,
    FooterComponent,

    PlaceFavoriteButtonComponent,
    PlaceLikeButtonComponent,

    GoogleRegisterBtnComponent,
        
    CustomerAddImagesComponent,
    CarouselComponent,

    DndDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule,
    ManagerModule,
    JwtModule.forRoot({
      config: {
       tokenGetter: tokenGetter,
      allowedDomains: ["localhost:4200"]
      },
    }),
  ],
  providers:[
    AdminGuard,
    ModeratorGuard,
    UserGuard,
    JwtHelperService
  ],
  exports: [CoreComponent]
})
export class CoreModule { }
