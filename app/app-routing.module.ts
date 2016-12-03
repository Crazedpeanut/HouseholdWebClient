import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JournalComponent} from "./component/journal.component";
import {DashboardComponent} from "./component/dashboard.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
    },
    {
        path: "journal/:id",
        component: JournalComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})
export class AppRoutingModule {

}