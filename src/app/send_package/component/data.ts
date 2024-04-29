export enum PaymentInfo{
    Online,
    Offline
}
//Address book
export interface AddressBook{
    id?:string
    state:string,
    city:string,
    address: string,
    title?:string,
    label: string,
    owner: string,

}
export interface PackageDetails{
    id?:string
    value:number,
   /* weight?: number,
    height?: number,
    width?: number,*/
    content: string,
    notes: string //package instruction
    state: string,
    city: string,
    address: string,
    order_number: String
}
export interface RecieverDetail{
    id?:string
    first_name: string,
    last_name: string,
    phone: string,
    order_number?:string,
    state: string,
    city: string,
    address: string,

    
}
export interface SenderDetail{
    id?:string
    account_id:string,
    first_name: string,
    last_name: string,
    phone:string,
    email:string
}
