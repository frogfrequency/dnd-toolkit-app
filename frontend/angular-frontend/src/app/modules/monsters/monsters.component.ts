import { Component, OnInit } from '@angular/core';

import { IMonster } from 'src/app/interfaces/IMonster';
import { MonsterService } from './services/monster.service';

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

  activeMonsterPage: string = 'encounterCreator';

  allMonsters: IMonster[] = [];

  constructor(private monsterService: MonsterService) { }

  ngOnInit(): void {
    console.log(`monster.component.ts's ogOnInit() called`)
    this.setAllMonsters(); 
    
    this.monsterService.allMonstersSubject.subscribe(allMonsters => {
      this.allMonsters = allMonsters;
    });
  }

  setActivePage(element: string) {
    this.activeMonsterPage = element;
  }

  setAllMonsters() {
    this.monsterService.getAllMonsters();
  }

}
