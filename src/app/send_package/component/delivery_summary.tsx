import { useAppSelector } from "@/lib/store";
import { useAppSelector as authSelector, useAppDispatch as dispatch} from "@/lib/store/auth_store" ;
import { Card } from "flowbite-react";
import SenderForm from "./sender_form";
import { getDatabase,set, ref,push } from "firebase/database";
import { app } from "@/lib/firebase_config";
import { getAuth, signInAnonymously } from "firebase/auth";
import { useEffect, useState } from "react";
import { ItemDetails } from "@/lib/model/packag_details";
import clsx from "clsx";
import { setAuthToken } from "@/lib/store/authSlice";
//import { auth } from "firebaseui" ;
export default function DeliverySummary(){
    const receiver = useAppSelector((state)=>state.item);
    const user =  authSelector((state)=>state.auth);
   // const [code, setCode] = useState('');
    //const [userID, seUserID] = useState('');
    const [status, setSatus]  = useState('');
   // const [senderName, s]
   var isLogin = localStorage.getItem('isAuthenticated');
   console.log(isLogin)
    const date = new Date();
     let day = date.getDate()
     let month =  date.getMonth()+1.
     let year = date.getFullYear();
    //let timeCode = JSON.stringify(receiver.reciever.address.state.substring(0,1)) + JSON.stringify(receiver.reciever.address.city.substring(0,3));
    const randomCode = Math.floor(10000 + Math.random() * 90000);
    const codes = (day + month + year+ randomCode).toString();
   // setCode(codes)
   const dsp = dispatch();
   const order: ItemDetails ={
    tracking_id: codes,
    item_type:receiver.item_type,
    item_count: receiver.item_count,
    item_value: receiver.item_value,
    is_delivered: receiver.is_delivered,
    description: receiver.description,
    note: receiver.note,
    sender:{
      sender_id: receiver.sender.sender_id,
      sender_name: receiver.sender.sender_name,
    sender_phone: receiver.sender.sender_phone,
    sender_email: receiver.sender.sender_email,
    },
    pickup_location:{
        address: receiver.pickup_location.address,
        state: receiver.pickup_location.state,
        city: receiver.pickup_location.city   
    },
    reciever:{
        first_name: receiver.reciever.first_name,
        last_name: receiver.reciever.last_name,
        address:{
            state:receiver.reciever.address.state,
            city: receiver.reciever.address.state,
            address: receiver.reciever.address.address
        },
        phone: receiver.reciever.phone,
      //  email: receiver.reciever.email,
    }
   }

const  saveItemWithAnonymous=(()=>{
    const auth = getAuth(app);
    signInAnonymously(auth)
    .then((result)=>{
    dsp(setAuthToken(result.user.uid))
const uid = result.user.uid;
        const db =getDatabase(app);
setSatus( 'success');
set(ref(db,'orders/'+uid),{
    order
    

})
.catch((error)=>{
    const errorCode = error.code();
    const errorMessage = error.message;

    alert(errorMessage);
})
    })

})
    
    
    


    return(
        <div>
<Card className="p-4 ">
<ol className="relative border-s border-gray-200 dark:border-gray-700">                  
    <li className="mb-10 ms-4 flex-wrap">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">From</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{receiver.sender.sender_name}</h3>

        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{receiver.reciever.address.address}, {receiver.pickup_location.city}
        </p>
        
    </li>
    <li className="mb-10 ms-4 flex-wrap">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">To</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{receiver.reciever.first_name}</h3>

        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{receiver.reciever.address.address},
         {receiver.reciever.address.city}, {receiver.reciever.address.state}</p>
    </li>
    </ol>
    <p>{}</p>
</Card>
<Card className="mt-4 p-1">

<h4 className="text-sm text-center font-semibold text-gray-900 dark:text-white pt-4">Sender Details</h4>
<SenderForm></SenderForm>
<div className="relative w-auto">
            <input type="text" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500" placeholder="Enter Coupon" />
            <button  className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-neutral-800 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>


            </button>
        </div>
        <div className={clsx(
            'block',
            {
            'hidden':isLogin
        })}>
        <p id="helper-text-explanation" 
        className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Create Account To for seameless experience.
</p>

        <div className="grid grid-rows-2 gap-2">
            <a href="/create_account" type="button" 
            className="text-white bg-orange-500 hover:bg-orange-600 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-orange-600 dark:bg-orange-500 dark:border-orange-700 dark:text-white dark:hover:bg-orange-700 me-2 mb-2 "
            >
            Create Account &amp; Book Delivery
            </a>
       
<button  type="button" onClick={()=>{
    saveItemWithAnonymous()
}}
className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">

Just Book Delivery
</button>
        </div>
        </div>
        </Card>
<div id="toast-success" className={
    clsx(
        "hidden",
        
         {
            "block flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800":  status === 'success'
         }
    )
} role="alert">
    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span className="sr-only">Check icon</span>
    </div>
</div>
</div>
    );
}