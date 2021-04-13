import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MesasService {

  apiUrlMesas: string = `${environment.apiUrl}tables.json`;
  mesas: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarMesas()
  }


  private cargarMesas() {
    this.http.get(this.apiUrlMesas)
      .subscribe((resp: any[]) => {
        this.mesas = resp;
        console.log(this.mesas);
      });
  }
}
