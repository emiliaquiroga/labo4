class Auto extends Vehiculo {
    constructor(id, modelo, anoFabricacion, velMax, cantidadPuertas, asientos, imagen) {
        super(id, modelo, anoFabricacion, velMax, imagen);
        this.cantidadPuertas = cantidadPuertas;
        this.asientos = asientos;
    }
}
