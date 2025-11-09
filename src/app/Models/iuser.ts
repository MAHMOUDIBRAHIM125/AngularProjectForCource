export interface IUser {
    fullName:string,
    email:string,
    phoneNum:string,
    address:{
        city:string,
        street:string,
        postalcode:string
    },
    password:string
}
