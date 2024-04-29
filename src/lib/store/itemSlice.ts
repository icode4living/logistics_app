import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ItemDetails,SenderDetails, Address, ReceiverDetails } from "../model/packag_details";


const initialState: ItemDetails={
    item_type: '',
    item_count: 0,
    item_value: 0.0,
    is_delivered:false,
    description: "",
    note: "",
    sender:{
        sender_id:"",
        sender_name: "",
        sender_phone: "",
        sender_email:""
    },
    pickup_location:{
        address:"",
        state: "",
        city: ""
    },
    reciever:{
       first_name: "" ,
       last_name: "",
       address:{
        state: "",
        city: "",
        address: ""
       },
       phone:"",
       email: ""
    },
    pickup_time: Date.now().toString(),
    schedule_date:Date.now().toString()

}
export const ItemSlice = createSlice({
    name: "item_detail",
    initialState,
    reducers:{
        setItemTrackingID:(state, action:PayloadAction<string>)=>{
            
           state.tracking_id=action.payload
           /* state.item_type=action.payload.item_type,
            state.item_count = action.payload.item_count,
            state.description = action.payload.description,
            state.item_value = action.payload.item_value,
            state.note = action.payload.note,
            state.sender = action.payload.sender,
            state.pickup_location = action.payload.pickup_location,
            state.pickup_time =action.payload.pickup_time,
            state.is_delivered = action.payload.is_delivered,
            state.schedule_date = action.payload.schedule_date*/

        },
        setItemItemType:(state, action:PayloadAction<string>)=>{
            state.item_type = action.payload;
        },
        setItemItemCount:(state, action:PayloadAction<number>)=>{
            state.item_count = action.payload;
        },
        setItemItemDescription:(state, action:PayloadAction<string>)=>{
            state.description = action.payload;
        },
        setItemItemValue:(state, action:PayloadAction<number>)=>{
            state.item_value = action.payload;
        },
        setItemItemReceiver:(state, action:PayloadAction<ReceiverDetails>)=>{
            state.reciever = action.payload;
        },
        setItemItemNote:(state, action:PayloadAction<string>)=>{
            state.note = action.payload;
        },
        setItemSender:(state, action:PayloadAction<SenderDetails>)=>{
            state.sender = action.payload;
        },
        setItemPickupLocation:(state, action:PayloadAction<Address>)=>{
            state.pickup_location = action.payload;
        },
        setItemPickupTime:(state, action:PayloadAction<String>)=>{
            state.pickup_time = action.payload;
        },
        setItemIsdelivered:(state, action:PayloadAction<boolean>)=>{
            state.is_delivered = action.payload;
        },
        setItemScheduleDate:(state, action:PayloadAction<string>)=>{
            state.schedule_date = action.payload;
        },
        

    }
});
export const {setItemTrackingID,
setItemSender,
setItemScheduleDate,
setItemItemValue,
setItemItemNote,
setItemItemDescription,
setItemPickupLocation,
setItemPickupTime,
setItemItemCount,
setItemIsdelivered,
setItemItemReceiver,
setItemItemType

} = ItemSlice.actions;
export const itemReducer = ItemSlice.reducer;