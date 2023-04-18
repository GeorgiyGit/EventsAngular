import { IGenre } from "../../genres/models/genre";

export interface IPlaceFilter {
    genres: IGenre[],
    orderType:number,
    filterStr:string
}