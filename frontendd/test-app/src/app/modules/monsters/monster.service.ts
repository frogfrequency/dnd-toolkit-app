import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IMonster } from 'src/app/interfaces/IMonster';


@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  private backendUrl = 'http://localhost:3000/api/monsters';

	constructor(private http: HttpClient) { }

	getMonsterByName(searchString: string): Observable<IMonster> {
		let Url = `${this.backendUrl}/${searchString}`
		let oneMonster = this.http.get<IMonster>(Url)
		console.log('angular monster.service fires: this.http.get<IMonster>(Url) XXXXXXXXXXXXXXXXXXXXXXX')
		// console.log(oneMonster);
		// const output = of('hello from getRandomMonsterService');
		return oneMonster
	}

	getAllMonsters(): Observable<IMonster[]> {
		let Url = this.backendUrl + "/allMonsters"
		let allTheMonsters = this.http.get<IMonster[]>(Url)
		return allTheMonsters
	}
}
