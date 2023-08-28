export class uValue {

    externalResistance: number | null;
    internalResistance: number | null;
    thickness: number | null;
    conductivity: number | null;
    kValue: number | null;
    uValue: number | null;
    
    constructor(
      externalResistance: number | null,
      internalResistance: number | null,
      thickness: number | null,
      conductivity: number | null,
      kValue: number | null,
      uValue: number | null
    ) {
      this.externalResistance = externalResistance;
      this.internalResistance = internalResistance;
      this.thickness = thickness;
      this.conductivity = conductivity;
      this.kValue = kValue;
      this.uValue = uValue;
    }
  }