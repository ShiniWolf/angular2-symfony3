import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {CommonModule} from "@angular/common";

import {UsersModule} from "./users/users.module";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from "./errors/page-not-found.component";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        UsersModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
