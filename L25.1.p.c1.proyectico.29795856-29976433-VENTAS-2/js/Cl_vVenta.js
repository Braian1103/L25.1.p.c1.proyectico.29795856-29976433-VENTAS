export default class Cl_vVenta {
    constructor(){
        this.incliente= document.getElementById("VentaForm_incliente");
        this.inFactura = document.getElementById("VentaForm_inFactura");
        this.inCosto = document.getElementById("VentaForm_inCosto");
        this.inCantidadArt = document.getElementById("VentaForm_inCantidadArt");
        this.btProcesar = document.getElementById("VentaForm_btProcesar");
    }
    get cliente() {
        return this.incliente.value;
    }
    get factura() {
        return this.inFactura.value;
    }
    get costo() {
        return this.inCosto.value;
    }
    get cantidadArt() {
        return this.inCantidadArt.value;
    }
}