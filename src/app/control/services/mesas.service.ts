import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MesaInterface } from '../interfaces/restaurante.interface';
import { FloorInterface } from '../interfaces/floor.interface';
import { ZonaInterface } from '../interfaces/zonas.interface';




@Injectable({
  providedIn: 'root'
})
export class MesasService {

  apiUrlMesas: string = environment.apiUrl;

  constructor(private http: HttpClient) {

  }

  getMesas(): Observable<MesaInterface[]> {
    return this.http.get<MesaInterface[]>(`${this.apiUrlMesas}tables.json`);
  }

  getPisos(): Observable<FloorInterface> {
    return this.http.get<FloorInterface>(`${this.apiUrlMesas}floors.json`);
  }

  getZonas(): Observable<ZonaInterface> {
    return this.http.get<ZonaInterface>(`${this.apiUrlMesas}zones.json`);
  }

}
