import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente.model';
import { DataRegistroBoleta } from '../models/dataRegistroBoleta.model';
import { Mensaje } from '../models/mensaje.model';
import { Seleccion } from '../models/seleccion.model';

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

  registraBoleta(data:DataRegistroBoleta):Observable<Mensaje> {
    console.log(data);
    return this.http.post<Mensaje>(this.apiServerURL + "/rest/boleta/registraBoleta",data);
  } 

}