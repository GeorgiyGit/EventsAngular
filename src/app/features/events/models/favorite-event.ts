import { IGenre } from "../../genres/models/genre";
import { IImage } from "../../images/models/image";

export interface IFavoriteEvent {
    id:number,
    title:string,
    eventTime:Date,
    route:string,
    types:IGenre[], 
    price:number,
    image:IImage,
}