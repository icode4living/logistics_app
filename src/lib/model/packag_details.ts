 
 export interface Address{
    state:String,
    city: String,
    address: String
 }
  export interface ReceiverDetails{
    first_name: String,
    last_name: String,
    phone: String,
    email?: String,
    address: Address,

}
export interface SenderDetails{
    sender_name: String,
    sender_phone: String,
    sender_email?: String,
    sender_id?: String,
}
export interface ItemDetails{
    tracking_id?: String,
    item_type: String,
    item_count: number,
    description: String,
    item_value: number,
    note: String,
    sender: SenderDetails,
    pickup_location: Address,
    reciever: ReceiverDetails
    pickup_time?: String,
    is_delivered?: boolean,
    schedule_date?: String
}

 