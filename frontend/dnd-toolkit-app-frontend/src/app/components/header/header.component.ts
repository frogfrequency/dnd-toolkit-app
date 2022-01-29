import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	title: string = 'dnd-toolkit-app-frontend';

	constructor() { }

	ngOnInit(): void {
	}

	doIt() {
		console.log('method of Header called');
	}

}
