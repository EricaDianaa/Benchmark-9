import { Component } from "@angular/core";
import { Observable, forkJoin, map } from "rxjs";
import { MeteoService } from "src/app/Service/meteo.service";
import { IGeneral } from "src/app/interfaceMeteo/general-meteo";
import { List } from "src/app/interfaceMeteo/list";

@Component({
  selector: "app-meteo",
  templateUrl: "./meteo.component.html",
  styleUrls: ["./meteo.component.scss"],
})
export class MeteoComponent {
  favoriteCity!: IGeneral;
  favorite: any[] = [];
  city!: string;
  listcity: List = {
    city: "",
    statecode: "",
    countrycode: 0,
  };
  constructor(private privateSvc: MeteoService) {}

  coordinate() {
    this.privateSvc
      .citySearch(
        this.listcity.city,
        this.listcity.statecode,
        this.listcity.countrycode
      )
      .subscribe((res) => {
        console.log(res);
        this.favoriteCity = res;
        this.favorite = res;
      });
  }

  addToPrefe() {
    console.log("click");
    localStorage.setItem("city", this.listcity.city);
    localStorage.setItem("statecode", this.listcity.statecode);
    localStorage.setItem("countrycode", this.listcity.countrycode);
  }
  showPrefe() {
    this.listcity.city = `${localStorage.getItem("city")}`;
    this.listcity.statecode = `${localStorage.getItem("statecode")}`;
    this.listcity.countrycode = `${localStorage.getItem("countrycode")}`;
    this.coordinate();
  }
}
