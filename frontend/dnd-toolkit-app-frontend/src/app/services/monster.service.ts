import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import { IMonster } from '../../../../../backend/interfaces/models/IMonster'

import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})
export class MonsterService {

	private backEndUrl = 'http://localhost:3000/api/monsters/skeleton';

	constructor(private http: HttpClient) { }

	getRandomMonster(): Observable<IMonster> {
		let oneMonster = this.http.get<IMonster>(this.backEndUrl) 
		// const output = of('hello from getRandomMonsterService');
		return oneMonster
	}
}
