import { Component, OnInit } from '@angular/core';

import { IMonster } from 'src/app/interfaces/IMonster';
import { MonsterService } from './monster.service';

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
    { selector: 'randomMonster', label: 'random monster' }
  ];

  activeMonsterPage: string = 'randomMonster';

  allMonsters: IMonster[] = [];

  finishedFetchingAllMonsters: boolean = true; // this must be false

  constructor(private monsterService: MonsterService) { }

  ngOnInit(): void {
    console.log(`monster.component.ts's ogOnInit() called`)
    // this.getAllMonsters();
    this.allMonsters = mockMonsters;
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
