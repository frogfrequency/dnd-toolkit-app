import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IMonster } from 'src/app/interfaces/IMonster';
import { BehaviorSubject } from 'rxjs';

import { mockMonsters } from '../mockMonsters';


@Injectable({
	providedIn: 'root'
})
export class MonsterService {

	allMonsters: IMonster[] = [];
	allMonstersSubject!: BehaviorSubject<IMonster[]>;


	private backendUrl = 'http://localhost:3000/api/monsters';

	constructor(private http: HttpClient) {
		this.allMonstersSubject = new BehaviorSubject(this.allMonsters);
	}

	getMonsterByName(searchString: string): Observable<IMonster> {
		let Url = `${this.backendUrl}/${searchString}`
		let oneMonster = this.http.get<IMonster>(Url)
		console.log('angular monster.service fires: this.http.get<IMonster>(Url) XXXXXXXXXXXXXXXXXXXXXXX')
		// console.log(oneMonster);
		// const output = of('hello from getRandomMonsterService');
		return oneMonster
	}

	// getAllMonsters(): Observable<IMonster[]> {
	getAllMonsters(): void{

		// EITHER THIS

		// console.log(`getAllMonsters in monster.service called`)
		// let Url = this.backendUrl + "/allMonsters"
		// let allTheMonsters = this.http.get<IMonster[]>(Url);
		// allTheMonsters.subscribe(monsters => {
		// 	this.allMonsters = monsters;
		// 	console.log(`length of this.allMonsters: ${this.allMonsters.length}`)
		// 	this.allMonstersSubject.next(this.allMonsters);
		// })

		// OR THIS NEEDS TO BE ACTIVE

		this.allMonsters = mockMonsters;
		this.allMonstersSubject.next(this.allMonsters);

	}
}
