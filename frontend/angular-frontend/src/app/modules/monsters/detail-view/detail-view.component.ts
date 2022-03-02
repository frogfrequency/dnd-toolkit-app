import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { Location } from '@angular/common';
import { IMonster, ISkills, ISpeed } from 'src/app/interfaces/IMonster';
import { MonsterService } from '../services/monster.service';
import { FavoritesService } from '../services/favorites.service';

import { MonsterDataExtractionService } from '../services/monster-data-extraction.service';

import { mockMonsters } from '../mockMonsters';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  monsterSlugFromUrl: string | null = '';

  statusCode!: number;
  errorDetected: boolean = false;

  monster!: IMonster;
  speed: string = '';
  skills: string = '';
  abilityScores: string[][] = [];
  challengeRating: string = '';
  specialAbilities: string[][] = [];
  actions: string[][] = [];
  reactions: string[][] = [];
  legendaryActions: string[][] = [];

  favoritedMonsters: IMonster[] = [];
  monsterIsFavorited: boolean = this.favoritedMonsters.some(monst => monst.slug === this.monster.slug);


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private monsterService: MonsterService,
    private extractor: MonsterDataExtractionService,
    private favoritesService: FavoritesService
  ) { }

  ngOnInit(): void {
    this.getSlugFromUrl();

    this.fetchMonster();

    //////
    // this.monster = mockMonsters[5];
    // this.extractMonsterStats();
    //////

    // this.favoritesService.favoritedMonstersSubject.subscribe(favorites => {
    //   this.favoritedMonsters = favorites;
    //   this.monsterIsFavorited = this.favoritedMonsters.some(monst => monst.slug === this.monster.slug)
    // });
  }

  goBack(): void {
    this.location.back();
  }

  onFavoriteButtonClick(): void {
    this.favoritesService.addNewFavorite(this.monster);
  }

  onUnfavoriteButtonClick(): void {
    this.favoritesService.removeFavorite(this.monster.slug);
  }

  getSlugFromUrl(): void {
    const slug = this.route.snapshot.paramMap.get('monster-slug')
    this.monsterSlugFromUrl = slug;
  }

  fetchMonster(): void {
    if (this.monsterSlugFromUrl) {
      if (this.monsterSlugFromUrl.length) { // only checking for left when monsterSlugFromUrl is not null (since you cannot take length of null)

        this.monsterService.getMonsterByName(this.monsterSlugFromUrl).subscribe((monster) => {
          if (typeof (monster) === 'number') {
            this.statusCode = monster;
            this.errorDetected = true;
          } else {
            this.statusCode = 0;
            this.errorDetected = false;
            this.monster = monster;
          }
          this.extractMonsterStats();
          ////////////
          this.favoritesService.favoritedMonstersSubject.subscribe(favorites => {
            this.favoritedMonsters = favorites;
            this.monsterIsFavorited = this.favoritedMonsters.some(monst => monst.slug === this.monster.slug)
          });
          /////////////
        });

      }
    }
  }

  extractMonsterStats(): void {
    this.speed = this.extractor.extractSpeed(this.monster.speed)
    this.abilityScores = this.extractor.extractAbilityScores(this.monster);
    this.skills = this.extractor.extractSkills(this.monster.skills);
    this.challengeRating = this.extractor.extractChallengeRating(this.monster);
    this.specialAbilities = this.extractor.extractNameDescPairs(this.monster.special_abilities);
    this.actions = this.extractor.extractNameDescPairs(this.monster.actions);
    this.reactions = this.extractor.extractNameDescPairs(this.monster.reactions);
    this.legendaryActions = this.extractor.extractNameDescPairs(this.monster.legendary_actions);
  }

}
