export interface IUserFullUpdate {
    id:string,
    userName:string,
    phoneNumber:string | undefined,
    cityId:number | undefined,
    birthDate:Date | undefined;
}