import { IImage } from "../../images/models/image";
import { IFullLocation } from "./location/full-location";

export interface IUser {
    id:string,
    userName:string,
    email:string,
    phoneNumber:string,
    creationTime:Date,
    
    avatar?:IImage,
    birthDate:Date,
    location:IFullLocation
}