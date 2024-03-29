import { r3JitTypeSourceSpan } from "@angular/compiler";
import { IGenre } from "../../genres/models/genre";
import { IImage } from "../../images/models/image";

export interface IPlace {
    id:number,

    name:string,
    text:string,
    route:string,

    fullRating:number,

    site?:string,
    facebook?:string,
    instagram?:string,
    //googleMaps:string,

    ownerId:string,
    ownerUserName:string

    types:IGenre[],
    likedUsers:string[],
    favoriteUsers:string[],
    events:number[],
    images:IImage[],
    isDeleted:boolean;
}