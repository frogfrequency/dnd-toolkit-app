import { Component, OnInit, Input } from '@angular/core';
import { IMonster } from 'src/app/interfaces/IMonster';

import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.css']
})
export class MonsterCardComponent implements OnInit {

  @Input() monster!: IMonster;

  // favoritedMonsters = ---> get favorites from favoritesService... update favoritesMonsters on favoritesService's next()
  favoritedMonsters: IMonster[] = [];
  monsterIsFavorited: boolean = this.favoritedMonsters.some(monst => monst.slug === this.monster.slug);
  // monsterIsFavorited: boolean = true;


  monsterSpeed!: string;

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.favoritesService.favoritedMonstersSubject.subscribe(favorites => {
      this.favoritedMonsters = favorites;
      this.monsterIsFavorited = this.favoritedMonsters.some(monst => monst.slug === this.monster.slug)
    });
    this.setSpecialProperties();
  }
  
  setSpecialProperties():void {
    let speedString: string = JSON.stringify(this.monster.speed);
    speedString = speedString.replace(/:/g, ': ');
    speedString = speedString.replace(/,/g, ', ');
    speedString = speedString.replace(/"|{|}/g, '');
    this.monsterSpeed = speedString;
  }
  
  onFavoriteButtonClick():void {
    this.favoritesService.addNewFavorite(this.monster);
  }

  onUnfavoriteButtonClick(): void {
    this.favoritesService.removeFavorite(this.monster.slug);
  }

}


