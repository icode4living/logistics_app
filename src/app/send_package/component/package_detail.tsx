'use client';
import { addressHelper } from "../utils/state_ng";
import { Address } from "@/lib/model/packag_details";
import { useState } from "react";
import { useAppDispatch } from "@/lib/store";
import { setItemItemNote,setItemItemDescription, setItemItemValue,
     setItemPickupLocation, setItemItemCount, setItemItemType} from "@/lib/store/itemSlice";

//import {app} from '@/lib/firebase_config';
//import { getDatabase } from "firebase/database";


//const database = getDatabase(app);
export default function PackageDetail(){
    /*const [weight,setWeight] = useState(0);
    const [height,setHeight] = useState(0);
    const [width,setWidth] = useState(0);*/

    const [content,setContent] = useState('');
    const [note, setNote] = useState('');
    const [itemValue, setItemValue] = useState(0);
    const [city, setCity] = useState('');
    const [states, setState] = useState('');
    const [address, setAddress] = useState('');
    const [itemDescription, setItemDescription] = useState('');

    
   const pickupLocation: Address = {
        state:states,
        city:city,
        address: address
   }
   //const itemval = parseFloat(itemValue);
    const dispatch = useAppDispatch()
  //  const PackageDetailContext = createContext(packages);
  dispatch(setItemItemType(content));
  dispatch(setItemItemValue(itemValue));
  dispatch(setItemPickupLocation(pickupLocation));
  dispatch(setItemItemNote(note));
  dispatch(setItemItemDescription(itemDescription));

    return(
        <>
       
        <form className="">
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content type</label>

<select onChange={(e)=>{
    setContent(e.target.value)
}}
className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

    <option value="Document">Documents</option>
    <option value="Food_items">Food Items</option>
    <option value="box">Box</option>
    <option value="others">Others</option>
  </select>

</div>
<div>
<label className="block mb-2 text-sm font-medium 
text-gray-900 dark:text-white">Item Descrition</label>

<input type="text" id="large-input" onChange={(e)=>{
      setItemDescription(e.target.value)
  }}
 className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
 placeholder="Describe the item you want to send here"/>

  </div>
        <div >
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Value</label>
            <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 
            border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
           {/* <p className=" text-gray-500 dark:text-gray-400">
            &#8358;
</p>   */}
 
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
</svg>

</span>
            <input type="decimal"  
             pattern="[0-9]*" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Enter your item worth in Naira" 
            onChange={(e)=>(
                setItemValue(parseFloat(e.target.value))
            )}
            />

            </div>
            <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">This helps us insure your item to prevent loss. Read our <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Insurance Policy</a>.</p>

        </div>
        </div>
        <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Delivery note</label>

      <input type="text" id="large-input" onChange={(e)=>{
            setNote(e.target.value)
        }}
       className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
       placeholder="Delivery instruction (optional)"/>

        </div>
        <div className="divide-y ">
<h5 className="p-3 mb-2 text-sm font-semibold tracking-tight text-gray-700 dark:text-white">
    Pick up Address
</h5>
<section className="pt-4">
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
        </section>
        </div>
        
        </form>
        
        </>
    );
}


function findState(ctx:string){
    const dataObject = addressHelper.find(item=>item.name === ctx);

    const dataCities = dataObject ? dataObject.cities:[];
return dataCities;

    }
