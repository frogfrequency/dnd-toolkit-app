import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMonster } from 'src/app/interfaces/IMonster';
import { EncounterService } from '../../../services/encounter.service';
import { FavoritesService } from '../../../services/favorites.service';

@Component({
  selector: 'app-add-monster-dialog',
  templateUrl: './add-monster-dialog.component.html',
  styleUrls: ['./add-monster-dialog.component.css']
})
export class AddMonsterDialogComponent implements OnInit {

  favoritedMonsters: IMonster[] = [];
  monstersAlreadyInEncounter: string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private favoritesService: FavoritesService, private encounterService: EncounterService) { }

  ngOnInit(): void {
    this.favoritesService.favoritedMonstersSubject.subscribe(favorites => {
      this.favoritedMonsters = favorites;
      this.data.encounter.monsters.forEach( (monster: any) => {
        this.monstersAlreadyInEncounter.push(monster.slug)
      })
    });
  }


  // setSelectedMonster(slug: string): void {
  //   // if (this.favoritedMonsters) {
  //     console.log(`setSelectedMonster is called with: ${slug}`)
  //     this.currentlyFavoritedMonster = this.favoritedMonsters.find(element => element.slug === slug)
  //   // }
  // }
}
