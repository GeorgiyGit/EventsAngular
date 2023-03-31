import { IGenre } from "../../genres/models/genre";

export interface IPlaceFilter {
    genres: IGenre[],
    orderType:OrderType,
    filterStr:string
}
export enum OrderType{
    MorePopular,
    Az,
    Za
}