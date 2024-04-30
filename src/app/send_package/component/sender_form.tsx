import { useAppDispatch } from "@/lib/store/auth_store";
import { setFirstName, setLastName, setPhone } from "@/lib/store/authSlice";
import { useAppSelector } from "@/lib/store/auth_store";
import { useState } from "react";
//import { auth } from "firebaseui";


export default function SenderForm(){
    const dispatch = useAppDispatch();
    //const receiver = useAppSelector((state)=>state.auth);
   /* let fname:string|null = '';
    let lname:string|null = '';
    let phone:string|null = '';
    */
   const [fname, setFname] = useState('');
   const [lname, setLname] = useState('');
   const [mobileNumber, setPMobileNumber] = useState('');
  // const [email, setEmail] = useState('');
   
     dispatch(setFirstName(fname));
     dispatch(setLastName(lname));
     dispatch(setPhone(mobileNumber));
     //dispatch(setEmail(email))

    return(
       

       
    <div className="p-4 md:p-5">
      
        <form className="space-y-4" >
    <div>
<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
<input type="text"  onChange={((e)=>{
  setFname(e.target.value);
})}
 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
 placeholder="John" required />
</div>
    <div>
<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
 <input type="text" onChange={((e)=>{
   setLname(e.target.value);
 })}
  placeholder="Doe" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
 </div>
 <div>
<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
 <input type="tel" onChange={((e)=>{
  setPhone(e.target.value);
 })}
  placeholder="Doe" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
 </div>
</form>
</div>
    );
}