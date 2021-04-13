import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SalaMesasComponent } from './control/pages/sala-mesas/sala-mesas.component';
import { SalaListadoComponent } from './control/pages/sala-listado/sala-listado.component';
import { ControlModule } from './control/control.module';

@NgModule({
  declarations: [
    AppComponent,
    SalaMesasComponent,
    SalaListadoComponent
  ],
  imports: [
    BrowserModule,
    ControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
