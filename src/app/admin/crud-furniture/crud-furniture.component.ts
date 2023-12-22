import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FurnitureService } from 'src/app/services/furniture/furniture.service';
import { MaterialsService } from 'src/app/services/materials/materials.service';

@Component({
  selector: 'app-crud-furniture',
  templateUrl: './crud-furniture.component.html',
  styleUrls: ['./crud-furniture.component.scss'],
})
export class CrudFurnitureComponent {
  furnitureForm: FormGroup;
  materialsList: object[] = [];
  method: string = 'create';
  id: string | undefined;

  constructor(
    private fb: FormBuilder,
    private materialsService: MaterialsService,
    private furnitureService: FurnitureService,
    private router: Router
  ) {
    this.furnitureForm = this.fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(0)]],
      components: this.fb.array([]),
    });

    if (this.router.getCurrentNavigation().extras.state) {
      const editFurniture =
        this.router.getCurrentNavigation().extras.state['data'];
      this.id = editFurniture["id"];
      this.method = 'put';
      for (let elem of editFurniture['materials']) {
        const materialForm = this.fb.group({
          material: elem['id'],
          quantity: elem['quantity'],
        });
        this.components.push(materialForm);
      }
      this.furnitureForm.patchValue({
        name: editFurniture['name'],
        category: editFurniture['category'],
        description: editFurniture['description'],
        price: editFurniture['price'],
        quantity: editFurniture['quantity'],
      });
    }

    this.materialsService.all().subscribe((res) => {
      res['materials'].forEach((material) => {
        this.materialsList.push({
          name: material.name,
          id: material.id,
        });
      });
    });
  }

  get components(): FormArray {
    return this.furnitureForm.get('components') as FormArray;
  }

  addMaterials() {
    const materialForm = this.fb.group({
      material: ['', [Validators.required]],
      quantity: ['', [Validators.required, Validators.min(0)]],
    });
    this.components.push(materialForm);
  }

  deleteMaterial(materialIndex: number) {
    this.components.removeAt(materialIndex);
  }

  onSubmit() {
    if (this.method === "create") {
      this.furnitureService.post(this.furnitureForm.value).subscribe({
        next: (response) => {
          console.log('Meuble ajouté avec succès', response);
        },
        error: (error) => {
          console.error("Erreur lors de l'ajout du meuble", error);
        },
        complete: () => {
          this.router.navigate(["/dashboard"]);
        }
      });
    } else if (this.method === "put") {
      this.furnitureService.put(this.id, this.furnitureForm.value).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          this.router.navigate(["/dashboard"]);
        }
      })
    }
  }
}