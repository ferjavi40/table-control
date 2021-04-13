import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class MesasService {

  apiUrl: string = environment.apiUrl;

  constructor() { }
}
