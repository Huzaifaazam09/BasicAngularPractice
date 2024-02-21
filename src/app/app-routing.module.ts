import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { NoPageComponent } from './no-page/no-page.component';
import { CountrylistChild1Component } from './countrylist-child1/countrylist-child1.component';
import { CountrylistChild2Component } from './countrylist-child2/countrylist-child2.component';

const routes: Routes = [
    {
        path:'app-country-list',
        component: CountryListComponent,
        children: [
            { path: 'app-countrylist-child1'  , component: CountrylistChild1Component },
            { path: 'app-countrylist-child2'  , component: CountrylistChild2Component },
        ]
    },
    {
        path:'app-student-list',
        component: StudentListComponent
    },
    {
        path:'app-user-list',
        component: UserListComponent
    },
    {
        path:'**',
        component: NoPageComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
