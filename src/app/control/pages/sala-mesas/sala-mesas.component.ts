import { Component, OnInit } from '@angular/core';
import { FloorInterface } from '../../interfaces/floor.interface';
import { MesaInterface } from '../../interfaces/restaurante.interface';
import { ZonaInterface } from '../../interfaces/zonas.interface';
import { MesasService } from '../../services/mesas.service';

@Component({
  selector: 'app-sala-mesas',
  templateUrl: './sala-mesas.component.html',
  styleUrls: ['./sala-mesas.component.css']
})
export class SalaMesasComponent implements OnInit {
  mesas: MesaInterface[] = [];
  pisos: FloorInterface;
  zonas: ZonaInterface;

  constructor(private _mesaServicio: MesasService) { }

  ngOnInit(): void {

    this._mesaServicio.getMesas()
      .subscribe((data: MesaInterface[]) => {
        this.mesas = data;
        console.log(this.mesas);
      });


    this._mesaServicio.getPisos()
      .subscribe((data: FloorInterface) => {
        this.pisos = data;
        console.log('Estos son los pisos ',this.pisos['202']);
      });

    this._mesaServicio.getZonas()
      .subscribe((data: ZonaInterface) => {
        this.zonas = data;
        console.log('Estas son las zonas ',this.zonas);
      })
  }

}
