import { Component, OnInit, Input } from '@angular/core';
import { IMonster } from 'src/app/interfaces/IMonster';

@Component({
  selector: 'app-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.css']
})
export class MonsterCardComponent implements OnInit {

  @Input() monster!: IMonster;

  monsterSpeed!: string;

  constructor() { }

  ngOnInit(): void {
    this.setSpecialProperties();
  }
  
  setSpecialProperties():void {
    let speedString: string = JSON.stringify(this.monster.speed);
    speedString = speedString.replace(/:/g, ': ');
    speedString = speedString.replace(/,/g, ', ');
    speedString = speedString.replace(/"|{|}/g, '');
    this.monsterSpeed = speedString;
  }

}


