import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';

import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { AboutPageComponent } from './about-page/about-page.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    // material below this 
    MatButtonModule,
    MatTabsModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class JointModule { }
