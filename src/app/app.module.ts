import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './router/app-router';
import { RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaceFavoriteButtonComponent } from './features/favorite/components/place-favorite-button/place-favorite-button.component';

@NgModule({
    bootstrap: [CoreComponent],
    declarations: [
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CoreModule,
        RouterModule,
        BrowserAnimationsModule,
    ]
})
export class AppModule { }
