import { City } from "./city";
import { Main } from "./main";
import { Syn } from "./syn";
import { Weather } from "./weather";
import { Wind } from "./wind";

export interface GeneralMeteo {
  clouds: {};
  dt: number;
  dt_txt: string;
  id: number;
  main: Main;
  pop: number;
  sys: Syn;
  visibility: number;
  weather: Weather[];
  wind: Wind;
}

export interface IGeneral {
  city: City;
  cnt: number;
  cod: string;
  list: GeneralMeteo[];
  message: number;
}
