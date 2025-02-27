export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo
        this.vista = vista
    }
    procesarVentas() {
        this.modelo.procesarVentas(this.vista.procesarVentas());
        this.vista.reportarVentas(
            this.modelo.totalencaja(),
            this.modelo.clientemayor(),
            this.modelo.clientecon1Articulo()
        );
    }
}