import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-furniture',
  templateUrl: './crud-furniture.component.html',
  styleUrls: ['./crud-furniture.component.scss']
})
export class CrudFurnitureComponent implements OnInit {
  furnitureForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient){}
  //service a appeler pour les méthodes http
 
ngOnInit(): void {
  this.initForm();
  //recuperer les données de matériaux
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
    // const apiEndpoin = '/Artisan/furniture';
    // const formData= this.furnitureForm.value;

    // this.http.post(apiEndpoin, formData).subscribe(
    //   (response) => {
    //     console.log('yes!form submitted',response);
    //   },
    //   (error)=> {
    //     console.error('oups', error);
    //   }
    //);
  }
}
