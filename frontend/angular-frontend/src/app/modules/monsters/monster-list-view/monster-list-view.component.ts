import { Component, Input, OnInit } from '@angular/core';
import { IMonster } from 'src/app/interfaces/IMonster';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-monster-list-view',
  templateUrl: './monster-list-view.component.html',
  styleUrls: ['./monster-list-view.component.css']
})
export class MonsterListViewComponent implements OnInit {

  @Input() monster!: IMonster;

  monstersDetailsLink: string = '';

  favoritedMonsters: IMonster[] = [];
  monsterIsFavorited: boolean = this.favoritedMonsters.some(monst => monst.slug === this.monster.slug);

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.favoritesService.favoritedMonstersSubject.subscribe(favorites => {
      this.favoritedMonsters = favorites;
      this.monsterIsFavorited = this.favoritedMonsters.some(monst => monst.slug === this.monster.slug)
    });
    this.setMonstersDetailsLink();
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
