import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Meteo } from "../interfaceMeteo/meteo";
import { GeneralMeteo } from "../interfaceMeteo/general-meteo";

@Injectable({
  providedIn: "root",
})
export class MeteoService {
  meteo!: GeneralMeteo[];
  private url = "https://api.openweathermap.org/data/2.5/weather";
  private key = "727a9933cb42c3872036aa3a14e213d5";
  constructor(private http: HttpClient) {}
  //generazione meteo lat-lon
  get(dati: Meteo): Observable<any> {
    let url = `${this.url}?lat=${dati.lat}&lon=${dati.lon}&appid=${this.key}`;
    return this.http.get<GeneralMeteo>(url);
  }
  //generazione meteo city+statecode+countrycode
  citySearch(city: string, stateCode: string, countryCode: string) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${stateCode},${countryCode}&appid=${this.key}`;
    return this.http.get(url);
  }
  //generazione meteo city
  coordinate(city: string) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${this.key}`;
    return this.http.get<GeneralMeteo>(url);
  }
}
