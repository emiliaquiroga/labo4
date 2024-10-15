class Vehiculo {
    constructor(id, modelo, anoFabricacion, velMax, imagen) {
        this.id = id;
        this.modelo = modelo;
        this.anoFabricacion = anoFabricacion;
        this.velMax = velMax;
        this.imagen = imagen;
    }

    toString() {
        return `ID: ${this.id}, Modelo: ${this.modelo}, Año Fabricación: ${this.anoFabricacion}, Velocidad Máxima: ${this.velMax}, Imagen: ${this.imagen}`;
    }
}
