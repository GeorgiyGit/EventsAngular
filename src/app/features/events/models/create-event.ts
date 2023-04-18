export interface ICreateEvent {
    id:number,
    title:string,
    text:string,
    placeId?:number,
    isOnline:boolean,
    site?:string,
    facebook?:string,
    instagram?:string,
    eventTime:Date,
    types:number[],
    images:File[],
    price:number
}