import { Main } from "./main";
import { Syn } from "./syn";
import { Weather } from "./weather";
import { Wind } from "./wind";

export interface GeneralMeteo {
  base: string;
  clouds: {};
  cod: number;
  coord: {};
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: Syn;
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: Wind;
}
