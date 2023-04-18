import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './router/app-router';
import { RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaceFavoriteButtonComponent } from './features/favorite/components/place-favorite-button/place-favorite-button.component';
import { CommentComponent } from './features/comments/components/comment/comment.component';
import { ToastrModule } from 'ngx-toastr';
import { PlacesPhoneFilterComponent } from './features/places/components/places-phone-filter/places-phone-filter.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PlaceLikeButtonComponent } from './features/likes/components/place-like-button/place-like-button.component';
import { GoogleRegisterBtnComponent } from './features/account/components/google-register-btn/google-register-btn.component';
import { ErrorHandlerService } from './core/services/error-handler.service';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { CustomerAddImagesComponent } from './features/images/components/customer-add-images/customer-add-images.component';
import { DndDirective } from './dnd.directive';
import { CarouselComponent } from './features/images/components/carousel/carousel.component';//import { AgmCoreModule } from '@agm/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CustomerEventDetailsComponent } from './features/events/pages/customer-event-details/customer-event-details.component';
import { EventLikeButtonComponent } from './features/likes/components/event-like-button/event-like-button.component';
import { EventFavoriteButtonComponent } from './features/favorite/components/event-favorite-button/event-favorite-button.component';
import { FavoritePlacesComponent } from './features/favorite/components/favorite-places/favorite-places.component';
import { FavoriteComponent } from './features/favorite/pages/favorite/favorite.component';
import { AccountPageComponent } from './features/account/pages/account-page/account-page.component';
import { UserInformationComponent } from './features/account/components/user-information/user-information.component';
import { UserCreatedPlacesComponent } from './features/account/components/user-created-places/user-created-places.component';
import { UserCreatedEventsComponent } from './features/account/components/user-created-events/user-created-events.component';
import { AvatarCropperComponent } from './features/images/components/avatar-cropper/avatar-cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
    bootstrap: [CoreComponent],
    declarations: [
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CoreModule,
        LayoutModule,
        RouterModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        SocialLoginModule,
        MatToolbarModule
        //AgmCoreModule.forRoot({
            //apiKey: 'AIzaSyD3m4Ebxh4hafQn_GePd1VvYfEMWTMIKwI'
          //})
    ],
    exports:[
        RouterModule
    ],
    providers:[
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerService,
            multi: true
        },
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider(
                            '344817255956-reef1qqi26o99dcb8ncngpme01nqvni4.apps.googleusercontent.com', {
                            scope: 'email',
                            plugin_name: 'Events'
                        }
                        )
                    },
                ],
                onError: (err: any) => {
                    console.error(err);
                }
            } as SocialAuthServiceConfig
        }
    ]
})
export class AppModule { }
