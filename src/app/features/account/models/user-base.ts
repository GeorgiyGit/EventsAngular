import { IImage } from "../../images/models/image";

export interface IUserBase {
    id:number,
    userName:string,
    Avatar?:IImage
}