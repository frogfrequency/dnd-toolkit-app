import { Component, OnInit } from '@angular/core';
import { IMonster } from 'src/app/interfaces/IMonster';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-page-favorites',
  templateUrl: './page-favorites.component.html',
  styleUrls: ['./page-favorites.component.css']
})
export class PageFavoritesComponent implements OnInit {

  viewMode: string = 'list';

  favoritedMonsters: IMonster[] = [];

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.favoritesService.favoritedMonstersSubject.subscribe(favorites => {
      this.favoritedMonsters = favorites;
    });
  }

  setViewMode(mode: string): void {
    this.viewMode = mode;
  }

}
