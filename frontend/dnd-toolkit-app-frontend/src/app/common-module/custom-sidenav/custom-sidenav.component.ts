import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-custom-sidenav',
	templateUrl: './custom-sidenav.component.html',
	styleUrls: ['./custom-sidenav.component.css']
})
export class CustomSidenavComponent implements OnInit {

	@Input() sidenavElements: string[] = [];

	constructor() {
	}

	ngOnInit(): void {
	}

}
