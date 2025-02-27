export default class Cl_mTienda {
    constructor(montoCaja, porcIncremento) {
        this.montoCaja = montoCaja
        this.acmontocaja = 0;
        this.porcIncremento = porcIncremento;
        this.clientesMayor = 0;	
        this.clientesCon1Articulo = 0;
        this.clientes = 0;
        }

        set montoCaja(montoCaja){
            this._montoCaja = +montoCaja;
        }
    
        get montoCaja(){
            return this._montoCaja;
        }
    
        set porcIncremento(porcIncremento){
            this._porcIncremento = +porcIncremento;
        }
    
        get porcIncremento(){
            return this._porcIncremento;
        }
        
        procesarVentas(f){
            this.acmontocaja += f.costo;

            if(f.costo > this.clientes){
                this.clientes = f.costo;
                this.clientesMayor = f.cliente;
            }

            if(f.cnarticulos == 1){
                this.clientesCon1Articulo++

            }


        }

        totalencaja() {
          return this.acmontocaja + this.montoCaja  
        }
        clientemayor() {
            return this.clientesMayor; 
        }
        clientecon1Articulo() {
            return this.clientesCon1Articulo; 
        }

}