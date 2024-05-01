'use client'
import { useAppDispatch } from "@/lib/store";
//import { setPhone } from "@/lib/store/authSlice";
//import { useAppSelector } from "@/lib/store/auth_store";
import { useEffect, useState } from "react";
import {SenderDetails } from "@/lib/model/packag_details";
import { setItemSender } from "@/lib/store/itemSlice";

//import { auth } from "firebaseui";


export default function ScheduleSenderForm(){

  const dispatch = useAppDispatch()

   const [fname, setFname] = useState('');
   //const [lname, setLname] = useState('');
   const [mobileNumber, setPMobileNumber] = useState('');
  // const [email, setEmail] = useState('');
   let senderItem:SenderDetails={
    sender_name:fname,
    sender_phone:mobileNumber,
   }
   /*useEffect(()=>{
    dispatch(setItemSender(senderItem));
   })
*/
   // dispatch(setItemSender(senderItem));

    return(
    
       
    <div className="p-1 md:p-5">
      
        <form className="space-y-4" >
    <div>
<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
<input type="text"  onChange={((e)=>{
  setFname(e.target.value);
})}
 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
 placeholder="John Doe" required />
</div>
    <div>
{/*<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
 <input type="text" onChange={((e)=>{
   setLname(e.target.value);
 })}
  placeholder="Doe" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
 </div>
<div>*/}
<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
 <input type="tel" onChange={((e)=>{
 setPMobileNumber(e.target.value);
 })}
  placeholder="Doe" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
 </div>
</form>
</div>
    );
}