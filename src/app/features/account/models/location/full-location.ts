import { ICity } from "./city";
import { ICountry } from "./country";
import { IRegion } from "./region";

export interface IFullLocation {
    city:ICity,
    region:IRegion,
    country:ICountry
}