import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMonster } from 'src/app/interfaces/IMonster';


@Injectable({
  providedIn: 'root'
})

export class FavoritesService {

  favoritedMonsters: IMonster[] = [];
  favoritedMonstersSubject!: BehaviorSubject<IMonster[]>;

  constructor() {
    this.favoritedMonstersSubject = new BehaviorSubject(this.favoritedMonsters);
  }

  addNewFavorite(monster: IMonster): void {
    
    if (!this.favoritedMonsters.some(monst => monst.slug === monster.slug)) { // if its not already included in favorites
      this.favoritedMonsters.push(monster);
      this.favoritedMonstersSubject.next(this.favoritedMonsters);
    }

  }

  removeFavorite(monsterSlug: string): void {
    this.favoritedMonsters = this.favoritedMonsters.filter(monster => monster.slug != monsterSlug)
    this.favoritedMonstersSubject.next(this.favoritedMonsters);
  }


}


// ithis.favoritedMonsters.next(++this.favoritedMonsters);
