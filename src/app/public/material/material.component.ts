import { Component } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth/auth.service";
import { MaterialsService } from "src/app/services/materials/materials.service";

@Component({
  selector: "app-material",
  templateUrl: "./material.component.html",
  styleUrls: ["./material.component.scss"]
})
export class MaterialComponent {
  isLogged: boolean = false;
  wood: object[] = [];
  metal: object[] = [];
  plastic: object[] = [];
  constructor(
    private authService: AuthService,
    private materialsService: MaterialsService,
    private router: Router
  ) {
    this.authService.me().subscribe(res => this.isLogged = res);
    this.materialsService.all().subscribe(res => {
      for (let elem of res["materials"]) {
      
        if (elem["category"] === "wood") this.wood.push(elem);
        else if (elem["category"] === "metal") this.metal.push(elem);
        else if (elem["category"] === "plastic") this.plastic.push(elem);
      }
    });
  }
  goToStat(material: object){
    const navExtra: NavigationExtras = {
      state: {
        data: material,
      }
    }
    this.router.navigate(["/detailMaterial"], navExtra);
  }
}
