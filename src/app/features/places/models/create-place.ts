import { r3JitTypeSourceSpan } from "@angular/compiler";

export interface ICreatePlace {
    id?:number,

    name:string,
    text:string,
    route:string,

    site?:string,
    facebook?:string,
    instagram?:string,
    //googleMaps:string,

    types:number[],
    images:File[]
}