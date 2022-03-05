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

  finishedFetchingAllMonsters: boolean = true; // this must be false

  constructor(private monsterService: MonsterService) { }

  ngOnInit(): void {
    console.log(`monster.component.ts's ogOnInit() called`)
    // this.getAllMonsters(); // change these to work with either the mock monsters or to fetch all Monsters onInit. dont forget to change finishedFetchingAllMonsters
    this.allMonsters = mockMonsters; // change these to work with either the mock monsters or to fetch all Monsters onInit. dont forget to change finishedFetchingAllMonsters
  }

  setActivePage(element: string) {
    this.activeMonsterPage = element;
  }

  getAllMonsters() {
    this.monsterService.getAllMonsters().subscribe((allMonsters) => {
      this.allMonsters = allMonsters;
      this.finishedFetchingAllMonsters = true;
    })
  }

}
