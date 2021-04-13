import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './control/pages/home/home.component';
import { SalaListadoComponent } from './control/pages/sala-listado/sala-listado.component';
import { SalaMesasComponent } from './control/pages/sala-mesas/sala-mesas.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'sala', component: SalaListadoComponent },
  { path: 'mesas', component: SalaMesasComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
