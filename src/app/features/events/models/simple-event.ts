import { IGenre } from "../../genres/models/genre";
import { IImage } from "../../images/models/image";

export interface ISimpleEvent {
    id:number,
    title:string,
    eventTime:Date,
    route:string,
    images:IImage[],
    fullRating:number,
    types:IGenre[]
}