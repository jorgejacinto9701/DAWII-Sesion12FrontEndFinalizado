import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})

export class BoletaService {
  
  private apiServerURL = environment.apiBaseURL;

  constructor(private http:HttpClient) { }
 

  listaCliente(filtro:string):Observable<Cliente[]> {
      return this.http.get<Cliente[]>(this.apiServerURL + "/rest/boleta/cargaCliente/"+ filtro);
  }  

  listaProducto(filtro:string):Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiServerURL + "/rest/boleta/cargaProducto/"+ filtro);
}  
 

}