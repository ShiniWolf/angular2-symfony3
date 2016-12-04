import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {PageNotFoundComponent} from "./errors/page-not-found.component";

const appRoutes = [
    {path: '**', component: PageNotFoundComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}