/**
 * 2. VENTAS
Se desea llevar un control de las ventas que realiza
una tienda. Se tiene por cada venta: nombre del cliente,
número de factura, costo y cantidad de artículos. Se
requiere de un programa que permita el registro de esta
información, conociendo al principio de la ejecución el
monto inicial en caja y el porcentaje de incremento para
el costo de cada venta.
Primeros requerimientos:
Monto final en caja
 Cliente que pagó el monto mayor
 Cantidad de clientes que sólo llevaron 1 artículo
 montoCaja: 200,  porcIncremento: 25.00 
 Ventas de prueba 
 cliente  factura  costo  cnArticulos
  Luis    1111      100       3
  Carla   2222      50        1
  Mery    3333      200       10
 
 */

 import Cl_mTienda from "./Cl_mTienda.js";
 import Cl_vTienda from "./Cl_vTienda.js";
 import Cl_controlador from "./Cl_controlador.js";

 export default class Cl_principal{
     constructor(){
        let vista = new Cl_vTienda();
        let montoCaja=prompt('Indique el monto inicial de la caja');
        let porcIncremento=prompt('Indique el porcentaje de incremento');

        let modelo = new Cl_mTienda(montoCaja, porcIncremento);
        let controlador = new Cl_controlador(modelo, vista);
        vista.controlador = controlador;
     }
 }