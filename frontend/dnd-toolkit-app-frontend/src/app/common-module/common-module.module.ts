import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material imports
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

// own components import
import { CommonModuleComponent } from './common-module.component';
import { CustomSidenavComponent } from './custom-sidenav/custom-sidenav.component';



@NgModule({
  declarations: [
    CommonModuleComponent,
    CustomSidenavComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    CustomSidenavComponent
  ]
})
export class CommonModuleModule { }
