export class Material {
    conductivity: string;
    thickness: string;
    constructor(
        conductivity: string,
        thickness: string,
    ) {
        this.thickness = thickness;
        this.conductivity = conductivity;
    }
  }