
'use client';
import { useState } from "react"
import { addressHelper } from "../utils/state_ng";
//import { RecieverDetail } from "./data";

//import { getFirestore } from "firebase/firestore";
import { useAppDispatch } from "@/lib/store";
import { ReceiverDetails } from "@/lib/model/packag_details";
import { setItemItemReceiver} from "@/lib/store/itemSlice";
//import { it } from "node:test";
//import { useAppSelector } from "@/lib/store";
//const db = getFirestore(app);
export default function ScheduleReceiverDetail(){
    const [firstName, setFirstName] = useState('');
   //const firstName = useAppSelector((state)=>state.item.reciever.first_name);
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [states, setState] = useState('');
    const [address, setAddress] = useState('');
    const dispatch = useAppDispatch();
    let receiver: ReceiverDetails = {
        first_name:firstName,
        last_name: lastName,
        phone: phone,
        address:{
            state:states,
            city: city,
            address:address
        }
    }
    dispatch(setItemItemReceiver(receiver));
   // dispatch(setItemItemDescription(item))


    


    return (
        <section>
            
         
        <form>
    <div className="grid gap-4 mb-4 sm:grid-cols-2">
<div>
    <label className="block mb-2 text-sm font-medium 
    text-gray-900 dark:text-white">
        First Name
        </label>
        <input type="text"  onChange={(e)=>{
            setFirstName(e.target.value);
        }}
             className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Enter recipient first name" />

        </div>
        <div>
    <label className="block mb-2 text-sm font-medium 
    text-gray-900 dark:text-white">
        Last Name
        </label>
        <input type="text"  onChange={(e)=>{
            setLastName(e.target.value)
        }}
             className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Enter recipient last name" />

        </div>
    
        <div>
    <label className="block mb-2 text-sm font-medium 
    text-gray-900 dark:text-white">
        Mobile Number
        </label>
        <input type="tel"  onChange={(e)=>{
            setPhone(e.target.value)
        }}
             className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="08012345679" />

        </div>
        <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>

<select onChange={(e)=>{
    setState(e.target.value)
}}
className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

{addressHelper.map(state=>
<option value={state.name}>{state.name}</option>

)}   
  </select>
   </div>
   <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>

<select onChange={(e)=>{
    setCity(e.target.value)
}}
className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

{ findState(states).map((city,index)=>
<option value={city} key={index}>{city}</option>
)}

  </select>

        </div>
        <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>

      <input type="text" id="large-input" onChange={(e)=>{
            setAddress(e.target.value)
        }}
       className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
       placeholder="20a ABC street"/>

        </div>
        </div>
      {/* <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
    <input id="bordered-checkbox-1" type="checkbox" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add details to my address book</label>
    </div>*/}

        </form>
       
        </section>
    );

    
    }

 function findState(ctx:string){
        const dataObject = addressHelper.find(item=>item.name === ctx);

        const dataCities = dataObject ? dataObject.cities:[];
return dataCities;

        }

