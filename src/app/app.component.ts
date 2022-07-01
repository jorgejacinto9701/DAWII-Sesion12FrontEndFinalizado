import { Component } from '@angular/core';
import { Cliente } from './models/cliente.model';
import { DataRegistroBoleta } from './models/dataRegistroBoleta.model';
import { Producto } from './models/producto.model';
import { Seleccion } from './models/seleccion.model';
import { BoletaService } from './services/boleta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DAWII-Sesion12FrontEndFinalizado';

   productos: Producto [] = [];
   clientes: Cliente [] = [];

   producto: Seleccion = {};
   cliente: Cliente = {};

   productoSeleccionado: Seleccion [] = [];
   data: DataRegistroBoleta = {};

    constructor(private boletaService:BoletaService ){
        this.boletaService.listaCliente("todos").subscribe(
          (x) => this.clientes = x
        );
        this.boletaService.listaProducto("todos").subscribe(
          (x) => this.productos = x
        );
    }

    seleccionaCliente(aux:Cliente){
      this.cliente = aux;
      document.getElementById("btn_cliente_cerrar")?.click();
    }

    seleccionaProducto(aux:Producto){
      this.producto = aux;
      document.getElementById("btn_producto_cerrar")?.click();
    }

    agregarProducto(){
      this.productoSeleccionado.push(this.producto);
    }

    registraDocumento(){
      this.data.cliente =this.cliente;
      this.data.seleccionados =this.productoSeleccionado;
      this.boletaService.registraBoleta(this.data).subscribe(
        (x) => alert(x.texto)
      );
    }


}
