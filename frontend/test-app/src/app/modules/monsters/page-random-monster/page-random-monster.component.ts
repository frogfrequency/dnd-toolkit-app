import { Component, Input, OnInit } from '@angular/core';
import { IMonster } from 'src/app/interfaces/IMonster';

@Component({
  selector: 'app-page-random-monster',
  templateUrl: './page-random-monster.component.html',
  styleUrls: ['./page-random-monster.component.css']
})
export class PageRandomMonsterComponent implements OnInit {

  randomMonster!: IMonster;

  @ Input() allMonsters: IMonster[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setNewRandomMonster();
  }

  setNewRandomMonster():void {
    let newRandomIdx = Math.floor(Math.random()*this.allMonsters.length);
    this.randomMonster = this.allMonsters[newRandomIdx];
  }

}
