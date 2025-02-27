import Cl_vVenta from "./Cl_vVenta.js";
import Cl_mVenta from "./Cl_mVenta.js";

export default class Cl_vTienda {
    constructor() {
      this.controlador = null;
      this.mVenta = null;
      this.vVenta = new Cl_vVenta();
      this.lbltotalencaja = document.getElementById(
      "mainForm_lbltotalencaja");
      this.lblClienteMayor = document.getElementById(
        "mainForm_lblClienteMayor");
      this.lblclientecon1Articulo = document.getElementById(
      "mainForm_lblclientecon1Articulo");
    
    this.vVenta.btProcesar.onclick = () =>
        this.controlador.procesarVentas();
    }
   procesarVentas() {
    this.mVenta = new Cl_mVenta({
        cliente: this.vVenta.cliente,
        factura: this.vVenta.factura,
        costo: this.vVenta.costo,
        cnarticulos: this.vVenta.cantidadArt
});
return this.mVenta;
}
reportarVentas(
    totalencaja,
    clienteMayor,
    clientecon1Articulo

){
    this.lbltotalencaja.innerHTML = totalencaja;
    this.lblClienteMayor.innerHTML = clienteMayor;
    this.lblclientecon1Articulo.innerHTML = clientecon1Articulo;
      ;  

}



}