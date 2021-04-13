import { Component, OnInit } from '@angular/core';
import { MesasService } from '../../services/mesas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mesas: any[] = [];
  constructor(private _mesaService: MesasService) {}

  ngOnInit(): void {
  }


}
