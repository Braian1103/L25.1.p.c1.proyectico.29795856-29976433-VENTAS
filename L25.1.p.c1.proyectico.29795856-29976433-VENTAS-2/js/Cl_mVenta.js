export default class Cl_mVenta {
    constructor({ cliente, factura, costo, cnarticulos}) {
        this.cliente = cliente;
        this.factura = factura; 
        this.costo = costo;
        this.cnarticulos = cnarticulos;
    }
    set cliente(cliente) {
        this._cliente = cliente;
    }
    get cliente (){
        return this._cliente;
    }
    set factura(f) {
        this._factura = +f;
    }
    get factura(){
        return this._factura;
    }
    set costo(costo) {
        this._costo = +costo;
    }
    get costo(){
        return this._costo;
    }
    set cnarticulos(cnarticulos) {
        this._cnarticulos = +cnarticulos;
    }
    get cnarticulos(){
        return this._cnarticulos;
    }
   
 
}