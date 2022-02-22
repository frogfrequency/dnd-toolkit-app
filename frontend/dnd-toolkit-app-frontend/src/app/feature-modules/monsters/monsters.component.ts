import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-monsters',
	templateUrl: './monsters.component.html',
	styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {

	monsterSidenavElements:string[] = [
		// ['all Monsters', 'href for all monsters'],
		// ['get Monster by name', 'href for get monster by name'],
		// ['filter Monster', 'href for filter monsters']

		'all Monsters',
		'get Monster by name',
		'filter Monster'
	] 

	constructor() { }

	ngOnInit(): void {
	}

}
