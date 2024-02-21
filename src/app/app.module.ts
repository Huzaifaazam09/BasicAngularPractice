import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserAuthModule} from './user-auth/user-auth.module';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {MessagesModule} from 'primeng/messages';

import { ToastModule } from 'primeng/toast'; 
import { RippleModule } from 'primeng/ripple'; 
import { ImageModule } from 'primeng/image'; 
import { CaptchaModule } from 'primeng/captcha'; 

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChildComponent } from './child/child.component';
import { ChildUserdetailsComponent } from './child-userdetails/child-userdetails.component';
import { ChildPComponent } from './child-p/child-p.component';
import { NoPageComponent } from './no-page/no-page.component';
import { CountrylistChild1Component } from './countrylist-child1/countrylist-child1.component';
import { CountrylistChild2Component } from './countrylist-child2/countrylist-child2.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    UserListComponent,
    CountryListComponent,
    HeaderComponent,
    ChildComponent,
    ChildUserdetailsComponent,
    ChildPComponent,
    NoPageComponent,
    CountrylistChild1Component,
    CountrylistChild2Component,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    BrowserAnimationsModule,

    MatSliderModule,
    MatButtonModule,

    ButtonModule,
    AccordionModule,
    MessagesModule,

    CaptchaModule,
    ToastModule,
    RippleModule,
    ImageModule,

    FormsModule,
    CommonModule,

    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
