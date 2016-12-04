import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {UserListComponent} from "./user-list/user-list.component";
import {UserComponent} from "./user/user.component";

const usersRoutes = [
    {path: '', component: UserListComponent},
    {path: 'users/:id', component: UserComponent}
];
@NgModule({
    imports: [RouterModule.forChild(usersRoutes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {
}