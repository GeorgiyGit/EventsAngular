import { IGenre } from "../../genres/models/genre";
import { IImage } from "../../images/models/image";

export interface ISimplePlace {
    emit(place: ISimplePlace): unknown;
    id:number,
    name:string,
    route:string,
    fullRating:number,
    image:IImage,
    types:IGenre[]
}