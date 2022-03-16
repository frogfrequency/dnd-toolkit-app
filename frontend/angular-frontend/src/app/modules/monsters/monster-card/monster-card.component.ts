import { Component, OnInit, Input } from '@angular/core';
import { IMonster } from 'src/app/interfaces/IMonster';

import { FavoritesService } from '../services/favorites.service';

import { MatDialog } from "@angular/material/dialog"
import { AddThisMonsterToEncounterDialogComponent } from '../encounter-creator/add-this-monster-to-encounter-dialog/add-this-monster-to-encounter-dialog.component';
import { EncounterService } from '../services/encounter.service';

@Component({
  selector: 'app-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.css']
})
export class MonsterCardComponent implements OnInit {

  @Input() monster!: IMonster;

  monsterSpeed!: string;

  monstersDetailsLink: string = '';

  // favoritedMonsters = ---> get favorites from favoritesService... update favoritesMonsters on favoritesService's next()
  favoritedMonsters: IMonster[] = [];

  monsterIsFavorited: boolean = this.favoritedMonsters.some(monst => monst.slug === this.monster.slug);
  // monsterIsFavorited: boolean = true;

  constructor(
    private favoritesService: FavoritesService,
    private encounterService: EncounterService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.favoritesService.favoritedMonstersSubject.subscribe(favorites => {
      this.favoritedMonsters = favorites;
      // this.monsterIsFavorited = this.favoritedMonsters.some(monst => monst.slug === this.monster.slug)
      this.buildMonster();
    });
    // this.setSpecialProperties();
  }

  ngOnChanges(): void {
    this.buildMonster();
  }

  // monster is built when either an @Input() changes (ngOnChanges) or when favoritesService.favoritedMonstersSubject emits a new next()
  buildMonster(): void {
    this.monsterIsFavorited = this.favoritedMonsters.some(monst => monst.slug === this.monster.slug)
    this.setSpecialProperties();
    this.setMonstersDetailsLink();
  }

  setSpecialProperties(): void {
    let speedString: string = JSON.stringify(this.monster.speed);
    speedString = speedString.replace(/:/g, ': ');
    speedString = speedString.replace(/,/g, ', ');
    speedString = speedString.replace(/"|{|}/g, '');
    this.monsterSpeed = speedString;
  }

  setMonstersDetailsLink(): void {
    this.monstersDetailsLink = '/monsters/monster/' + this.monster.slug
  }


  onFavoriteButtonClick(): void {
    this.favoritesService.addNewFavorite(this.monster);
  }

  onUnfavoriteButtonClick(): void {
    this.favoritesService.removeFavorite(this.monster.slug);
  }

  openAddThisMonsterToEncounterDialog(): void {
    let dialogRef = this.dialog.open(AddThisMonsterToEncounterDialogComponent, { data: { monsterName: this.monster.name } });
    dialogRef.afterClosed().subscribe(encounterId => {
      console.log(`the encounter id to add ${this.monster.name} is: ${encounterId}`);
      this.encounterService.addMonsterToEncounter(encounterId, this.monster)
    })
  }

}


