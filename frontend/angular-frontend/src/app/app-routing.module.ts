import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './modules/joint/home-page/home-page.component';
import { AboutPageComponent } from './modules/joint/about-page/about-page.component';

import { MonstersComponent } from './modules/monsters/monsters.component';
import { DetailViewComponent } from './modules/monsters/detail-view/detail-view.component';

const routes: Routes = [
  { path: 'monsters', component: MonstersComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'monsters/monster/:monster-slug', component: DetailViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
