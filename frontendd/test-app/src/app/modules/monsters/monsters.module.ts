import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonstersComponent } from './monsters.component';
import { MonsterCardComponent } from './monster-card/monster-card.component';

import { PageFindMonsterComponent } from './page-find-monster/page-find-monster.component';
import { NameSearchComponent } from './page-find-monster/name-search/name-search.component';

import { PageExploreMonstersComponent } from './page-explore-monsters/page-explore-monsters.component';
import { PageFavoritesComponent } from './page-favorites/page-favorites.component';
import { PageRandomMonsterComponent } from './page-random-monster/page-random-monster.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    MonstersComponent,
    MonsterCardComponent,
    PageFindMonsterComponent,
    PageExploreMonstersComponent,
    PageFavoritesComponent,
    PageRandomMonsterComponent,
    NameSearchComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    MonstersComponent,
  ]
})
export class MonstersModule { }
