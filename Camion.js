class Camion extends Vehiculo {
    constructor(id, modelo, anoFabricacion, velMax, carga, autonomia, imagen) {
        super(id, modelo, anoFabricacion, velMax, imagen);
        this.carga = carga;
        this.autonomia = autonomia;
    }
}
