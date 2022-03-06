import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMonster } from 'src/app/interfaces/IMonster';
import { FavoritesService } from '../../../services/favorites.service';

@Component({
  selector: 'app-add-monster-dialog',
  templateUrl: './add-monster-dialog.component.html',
  styleUrls: ['./add-monster-dialog.component.css']
})
export class AddMonsterDialogComponent implements OnInit {

  favoritedMonsters: IMonster[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.favoritesService.favoritedMonstersSubject.subscribe(favorites => {
      this.favoritedMonsters = favorites;
    });
  }

}
