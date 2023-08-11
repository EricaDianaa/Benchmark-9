import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Meteo } from "../interfaceMeteo/meteo";
import { GeneralMeteo, IGeneral } from "../interfaceMeteo/general-meteo";

@Injectable({
  providedIn: "root",
})
export class MeteoService {
  meteo!: GeneralMeteo[];
  private url = "https://api.openweathermap.org/data/2.5/forecast";
  private key = "727a9933cb42c3872036aa3a14e213d5";
  //preferiti
  private favoriteCity: any[] = [];
  private favoriteSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );

  constructor(private http: HttpClient) {}
  //generazione meteo lat-lon
  get(dati: Meteo): Observable<any> {
    let url = `${this.url}?lat=${dati.lat}&lon=${dati.lon}&appid=${this.key}`;
    return this.http.get<IGeneral>(url);
  }
  //generazione meteo city+statecode + countrycode
  citySearch(
    city: string,
    stateCode: string,
    countryCode: string
  ): Observable<any> {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${stateCode},${countryCode}&appid=${this.key}`;
    return this.http.get<IGeneral>(url);
  }
  //generazione meteo city
  coordinate(city: string): Observable<any> {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${this.key}`;
    return this.http.get<IGeneral>(url);
  }

  //preferiti function

  addToPrefe(city: string) {
    this.favoriteCity.push(city);
  }

  getToPrefe() {
    return this.favoriteSubject.asObservable();
  }
}
