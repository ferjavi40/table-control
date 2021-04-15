import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {ListboxModule} from 'primeng/listbox';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    ListboxModule
  ]
})
export class PrimeModule { }
