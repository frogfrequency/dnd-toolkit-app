import { Injectable } from '@angular/core';
import { IEncounter } from 'src/app/interfaces/IEncounter';

@Injectable({
  providedIn: 'root'
})
export class EncounterService {

  encounters: IEncounter[] = [];

  constructor() { }

  genId(encounters: IEncounter[]): number {
    return encounters.length > 0 ? Math.max(...encounters.map(hero => hero.id)) + 1 : 11;
  }
}
