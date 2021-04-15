import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restauranteinterface } from '../interfaces/restaurante.interface';



@Injectable({
  providedIn: 'root'
})
export class MesasService {

  apiUrlMesas: string = environment.apiUrl;

  constructor(private http: HttpClient) {

  }

  getMesas(): Observable<Restauranteinterface[]> {
    return this.http.get<Restauranteinterface[]>(`${this.apiUrlMesas}tables.json`)
  }

}
