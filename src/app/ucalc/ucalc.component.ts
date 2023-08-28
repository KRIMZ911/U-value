import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Material } from '../Material';

@Component({
  selector: 'app-ucalc',
  templateUrl: './ucalc.component.html',
  styleUrls: ['./ucalc.component.sass']
})
export class UcalcComponent implements OnInit{

  ngOnInit(): void {
  }

  submitted = false;

  model: {
    externalResistance: string;
    internalResistance: number | null;
    thickness: number | null; 
    conductivity: number | null; 
    materials: Material[]; 
    uValue: number | null;
    kValue: string;
  } = {
    externalResistance: "0.04",
    internalResistance: null,
    thickness: null,
    conductivity: null,
    materials: [],
    uValue: null,
    kValue: "",
  };

  addLayer() {
    const newMaterial = new Material("", "");
    this.model.materials.push(newMaterial);
  }

  onSubmit(userForm: any) {

    for (const material of this.model.materials) { 
      this.model.kValue += eval(material.thickness) / eval(material.conductivity); 
    }

    this.model.uValue = 1 / (eval(this.model.externalResistance) + eval(userForm.value.internalResistance) + eval(this.model.kValue));
    this.submitted = true;
  }

  refreshPage() {
    window.location.reload();
  }

  
}