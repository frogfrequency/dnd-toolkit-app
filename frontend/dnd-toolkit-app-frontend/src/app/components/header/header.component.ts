import { Component, OnInit } from '@angular/core';
import { MonsterService } from 'src/app/services/monster.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	title: string = 'dnd-toolkit-app-frontend';
	backgroundImage: string = '../../../assets/images/rainy-muddy-ruin-dark.png';

	constructor(private monsterService: MonsterService) {}

	ngOnInit(): void {
	}

	doIt() {
		console.log('method of Header called');
	}

	giveRandomMonster(): void {
		this.monsterService.getRandomMonster().subscribe((monster) => console.log(monster));
	}

}
