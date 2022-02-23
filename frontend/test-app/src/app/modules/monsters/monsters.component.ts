import { Component, OnInit } from '@angular/core';

import { IMonster } from 'src/app/interfaces/IMonster';
import { MonsterService } from './monster.service';


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

  activeMonsterPage: string = 'findMonster';

  allMonsters: IMonster[] = [];

  allMockMonsters: { name: string, intelligence: number }[] = [
    {name: 'bandit',intelligence: 12},
    {name: 'skeleton',intelligence: 4},
    {name: 'dragon',intelligence: 20}
  ]
  // testString: string = '<app-page-explore-monsters></app-page-explore-monsters>'

  constructor(private monsterService: MonsterService) { }

  ngOnInit(): void {
    console.log(`monster.component.ts's ogOnInit() called`)
    // this.getAllMonsters();
  }

  setActivePage(element: string) {
    this.activeMonsterPage = element;
  }

  getAllMonsters() {
    this.monsterService.getAllMonsters().subscribe((allMonsters) => {
      this.allMonsters = allMonsters;
    })
  }

}
