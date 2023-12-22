import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FurnitureService } from 'src/app/services/furniture/furniture.service';

@Component({
  selector: 'app-crud-furniture',
  templateUrl: './crud-furniture.component.html',
  styleUrls: ['./crud-furniture.component.scss']
})
export class CrudFurnitureComponent implements OnInit {
  furnitureForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient, 
    private furnitureService: FurnitureService){}
 
ngOnInit(): void {
  this.initForm();

}
initForm(){
  this.furnitureForm= this.fb.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    description:['', Validators.required],
    pictures:['', Validators.required],
    price:['', Validators.required],
    quantity:['', Validators.required],
    date:['', Validators.required],
    materials: this.fb.array([])
  });
}
get materials(): FormArray{
  return this.furnitureForm.controls['materials']as FormArray;

}

  addMaterials(){
    const materialForm = this.fb.group({
      name: ['', Validators.required],
      category:['', Validators.required],
      provider:['',Validators.required],
      description:['', Validators.required],
      quantity:['', Validators.required]
    })
    this.materials.push(materialForm);
  }
  deleteMaterial(materialIndex: number) {
    this.materials.removeAt(materialIndex);
}
  onSubmit() {
     if (this.furnitureForm.valid) {
      this.furnitureService.post(this.furnitureForm).subscribe(
        (response) => {
          console.log('Meuble ajouté avec succès', response);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du meuble', error);
        }
      );
    } else {
      console.error('Le formulaire n\'est pas valide.');
    }
  }
}
