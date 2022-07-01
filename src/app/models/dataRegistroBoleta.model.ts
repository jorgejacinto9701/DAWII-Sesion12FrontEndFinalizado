import { Cliente } from "./cliente.model";
import { Seleccion } from "./seleccion.model";

export class DataRegistroBoleta {
    
    cliente?:Cliente;
    seleccionados?: Seleccion[];
}
