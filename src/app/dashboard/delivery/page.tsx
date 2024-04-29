'use client';
import { useState, useEffect } from "react";
import { deliveryList } from "./component/delivery";
import { Card } from "flowbite-react";

export default function Delivery(){
    const [itemList, setItemList] = useState(deliveryList);

    return (
        <div className='p-4 max-w-sm md:max-w-2xl lg:max-w-2xl mx-auto overflow-x-hidden'>

<form className="max-w-md mx-auto mb-4 mt-4">   
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input  type="search" id="default-search"
         onChange={(e)=>{
            handleSearch(e.target.value)
        }}
        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Filter with tracking number" required />
    </div>
</form>
{ itemList.map((data, index)=>
<Card key={index} className="relative mb-4 p-4">
<span><p className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Tracking N0:</p><p className="text-lg font-semibold text-gray-900 dark:text-white">{data.oder_number}</p></span>

<ol className="relative border-s border-gray-200 dark:border-gray-700">                  
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">From</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{data.date}</h3>

        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{data.from}</p>
        
    </li>
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">To</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{data.recipient}</h3>

        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{data.to}</p>
    </li>
    </ol>
    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900
     dark:text-blue-300 absolute right-5 top-2">{data.status}</span>

</Card>
)
}
            </div>

    );
   async function handleSearch(value:string){
        const dataOject = deliveryList.filter(item=>item.oder_number.startsWith(value));
        
            setItemList(dataOject);
    }
}

