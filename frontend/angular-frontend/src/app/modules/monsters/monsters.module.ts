import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { MatDividerModule } from '@angular/material/divider';
import { SimpleStatComponent } from './detail-view/simple-stat/simple-stat.component';
import { AbilityScoresComponent } from './detail-view/ability-scores/ability-scores.component';
import { MonsterListViewComponent } from './monster-list-view/monster-list-view.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { EncounterCreatorComponent } from './encounter-creator/encounter-creator.component';
import { EncounterCardComponent } from './encounter-creator/encounter-card/encounter-card.component';
import { EncounterEditorComponent } from './encounter-creator/encounter-editor/encounter-editor.component';
import { AddMemberDialogComponent } from './encounter-creator/encounter-editor/add-member-dialog/add-member-dialog.component';
import { AddMonsterDialogComponent } from './encounter-creator/encounter-editor/add-monster-dialog/add-monster-dialog.component';
import { AddThisMonsterToEncounterDialogComponent } from './encounter-creator/add-this-monster-to-encounter-dialog/add-this-monster-to-encounter-dialog.component';
import { AlreadyInEncounterPipe } from './encounter-creator/add-this-monster-to-encounter-dialog/already-in-encounter.pipe';
import { AddNewEncounterDialogComponent } from './encounter-creator/add-new-encounter-dialog/add-new-encounter-dialog.component';


@NgModule({
  declarations: [
    MonstersComponent,
    MonsterCardComponent,
    PageFindMonsterComponent,
    PageExploreMonstersComponent,
    PageFavoritesComponent,
    PageRandomMonsterComponent,
    NameSearchComponent,
    DetailViewComponent,
    SimpleStatComponent,
    AbilityScoresComponent,
    MonsterListViewComponent,
    EncounterCreatorComponent,
    EncounterCardComponent,
    EncounterEditorComponent,
    AddMemberDialogComponent,
    AddMonsterDialogComponent,
    AddThisMonsterToEncounterDialogComponent,
    AlreadyInEncounterPipe,
    AddNewEncounterDialogComponent,
  ],
  entryComponents: [
    AddMemberDialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule
  ],
  exports: [
    MonstersComponent,
  ]
})
export class MonstersModule { }
