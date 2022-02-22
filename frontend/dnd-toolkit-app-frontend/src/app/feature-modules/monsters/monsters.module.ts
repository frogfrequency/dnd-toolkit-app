import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonstersComponent } from './monsters.component';

import { CommonModuleModule } from '../../common-module/common-module.module'



@NgModule({
	declarations: [
		MonstersComponent
	],
	imports: [
		CommonModule,
		CommonModuleModule
	],
	exports: [
		MonstersComponent
	]
})
export class MonstersModule { }
