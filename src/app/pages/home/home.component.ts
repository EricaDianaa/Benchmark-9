import { Component } from "@angular/core";
import { MeteoService } from "src/app/Service/meteo.service";
import { GeneralMeteo } from "src/app/interfaceMeteo/general-meteo";
import { List } from "src/app/interfaceMeteo/list";
import { Meteo } from "src/app/interfaceMeteo/meteo";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  dato: Meteo = {
    lat: 0,
    lon: 0,
  };

  listcity: List = {
    city: "",
    statecode: "",
    countrycode: 0,
  };

  meteo!: GeneralMeteo;
  meteoCity!: GeneralMeteo;
  citys: any[] = [];
  constructor(private privateSvc: MeteoService) {}
  //richiamo chiamate http service
  dati() {
    this.privateSvc.get(this.dato).subscribe((res) => {
      this.meteo = res;
    });
  }

  city() {
    this.privateSvc
      .citySearch(
        this.listcity.city,
        this.listcity.statecode,
        this.listcity.countrycode
      )
      .subscribe((res) => {
        console.log(res);
        // this.meteoCity=res
      });
    console.log(this.listcity.city);
    console.log(this.listcity.statecode);
    console.log(this.listcity.countrycode);
  }
}
