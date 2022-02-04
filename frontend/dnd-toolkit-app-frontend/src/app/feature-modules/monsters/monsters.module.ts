import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonstersComponent } from './monsters.component';

// import { SideNavComponent } from '../../components/side-nav/side-nav.component';




@NgModule({
	declarations: [
		MonstersComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		MonstersComponent
	]
})
export class MonstersModule { }
