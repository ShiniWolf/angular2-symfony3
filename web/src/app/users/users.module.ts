import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {UsersRoutingModule} from "./users-routing.module";

import {UserListComponent} from "./user-list/user-list.component";
import {UserComponent} from "./user/user.component";
import {UserService} from "./shared/user.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        UsersRoutingModule
    ],
    declarations: [
        UserListComponent,
        UserComponent
    ],
    providers: [UserService]
})
export class UsersModule {
}
