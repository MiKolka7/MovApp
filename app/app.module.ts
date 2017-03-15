import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MovieService } from './movie.service';
import { Movie } from './movie';
import { routing } from './app.routes';

import { PopListComponent } from './popular/popular-list.component';
import { PopDetailsComponent } from './popular/popular-details.component';

@NgModule ({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        PopListComponent,
        PopDetailsComponent
    ],
    providers: [
        MovieService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}