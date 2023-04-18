import { r3JitTypeSourceSpan } from "@angular/compiler";
import { IGenre } from "../../genres/models/genre";
import { IImage } from "../../images/models/image";

export interface IFavoritePlace {
    id:number,

    name:string,
    route:string,

    types:IGenre[],
    image:IImage
}