import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { IMonster } from 'src/app/interfaces/IMonster';

import { FavoritesService } from '../services/favorites.service';

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

  constructor(private favoritesService: FavoritesService) { }

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

  setSpecialProperties():void {
    let speedString: string = JSON.stringify(this.monster.speed);
    speedString = speedString.replace(/:/g, ': ');
    speedString = speedString.replace(/,/g, ', ');
    speedString = speedString.replace(/"|{|}/g, '');
    this.monsterSpeed = speedString;
  }

  setMonstersDetailsLink(): void {
    this.monstersDetailsLink = '/monsters/monster/' + this.monster.slug
  }

  
  onFavoriteButtonClick():void {
    this.favoritesService.addNewFavorite(this.monster);
  }

  onUnfavoriteButtonClick(): void {
    this.favoritesService.removeFavorite(this.monster.slug);
  }

}


