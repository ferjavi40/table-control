import { Component, OnInit } from '@angular/core';
import { Restauranteinterface } from '../../interfaces/restaurante.interface';
import { MesasService } from '../../services/mesas.service';

@Component({
  selector: 'app-sala-mesas',
  templateUrl: './sala-mesas.component.html',
  styleUrls: ['./sala-mesas.component.css']
})
export class SalaMesasComponent implements OnInit {
  mesas: Restauranteinterface[] = [];

  constructor(private _mesaServicio: MesasService) { }

  ngOnInit(): void {
    this._mesaServicio.getMesas()
      .subscribe((data:Restauranteinterface[])=>{
        this.mesas = data;
        console.log(this.mesas);
      });
    
  }

}
