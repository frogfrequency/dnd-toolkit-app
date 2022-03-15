import { Component, OnInit } from '@angular/core';

import { IMonster } from 'src/app/interfaces/IMonster';
import { MonsterService } from './services/monster.service';
import { FavoritesService } from './services/favorites.service'; // only used to set mockFavorites

import { mockMonsters } from './mockMonsters';


@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {

  sidenavElements = [
    { selector: 'findMonster', label: 'Find Monster' },
    { selector: 'exploreMonsters', label: 'Explore Monsters' },
    { selector: 'favorites', label: 'Favorites' },
    { selector: 'randomMonster', label: 'Random Monster' },
    { selector: 'encounterCreator', label: 'Encounter Creator'}
  ];

  activeMonsterPage: string = 'randomMonster';

  allMonsters: IMonster[] = [];

  constructor(private monsterService: MonsterService, private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    console.log(`monster.component.ts's ogOnInit() called`)
    this.setAllMonsters(); 
    
    this.monsterService.allMonstersSubject.subscribe(allMonsters => {
      this.allMonsters = allMonsters;
      // this.favoritesService.addNewFavorite(this.allMonsters[0]); // mocky
      // this.favoritesService.addNewFavorite(this.allMonsters[4]); // mocky
    });
  }

  setActivePage(element: string) {
    this.activeMonsterPage = element;
  }

  setAllMonsters() {
    this.monsterService.setAllMonsters();
  }

}
