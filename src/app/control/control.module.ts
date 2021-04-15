import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaListadoComponent } from './pages/sala-listado/sala-listado.component';
import { SalaMesasComponent } from './pages/sala-mesas/sala-mesas.component';
import { HomeComponent } from './pages/home/home.component';

import { AppRoutingModule } from '../app-routing.module';
import { PrimeModule } from '../prime-ng/prime.module';




@NgModule({
  declarations: [
    SalaListadoComponent,
    SalaMesasComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PrimeModule
  ],
  exports: [
    SalaListadoComponent,
    SalaMesasComponent,
    HomeComponent
  ]
})
export class ControlModule { }
