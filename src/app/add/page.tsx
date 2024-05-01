'use client';
import { useState} from 'react';
import ScheduleDeliverySummary from './component/delivery_summary';
import { clsx } from 'clsx';
import ScheduleReceiverDetail from './component/receiver_detail';
import SchedulePackageDetail from './component/package_detail';
//import {app} from '@/lib/firebase_config';
import ReduxProvider from '@/lib/store/redux-provider';

//import { getDatabase } from 'firebase/database';



export default function SendPackage(){
    //The number of steps for the stepper
    const [index, setIndex] = useState(0);
    //navigate forward
    //const [isSubmit, setIssumbmit] = useState(false);
    function nextIndex(){
        setIndex(index+1)
    }
    //navigate backward
    function prevIndex(){
        setIndex(index-1)
    }
return(
    <ReduxProvider>
<div className='max-w-sm md:max-w-2xl lg:max-w-2xl mx-auto overflow-x-hidden'>
    <span className='p-2' onClick={()=>{location.replace('dashboard')}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
</svg>

  
 
  </span>
<ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
    <li className={clsx('flex items-center',{
       'flex items-center text-orange-500 dark:text-blue-500':index == 0 
    })} onClick={()=>{setIndex(0)}}>
        <span className={clsx('flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400',
            {
            'flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500':index == 0
            }
        )}>
            1
        </span>
        Item <span className="hidden sm:inline-flex sm:ms-2">Details</span>
        <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
        </svg>
    </li>
    <li className={clsx('flex items-center',{
       'flex items-center text-orange-500 dark:text-blue-500':index == 1
    })} onClick={()=>{setIndex(1)}}>
        <span className={clsx('flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400',
            {
            'flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500':index == 0
            }
        )}>
            2
        </span>
        Recipient <span className="hidden sm:inline-flex sm:ms-2">Info</span>
        <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
        </svg>
    </li>
    <li className={clsx('flex items-center',{
       'flex items-center text-orange-500 dark:text-blue-500':index == 2
    })} onClick={()=>{setIndex(2)}}>
        <span className={clsx('flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400',
            {
            'flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500':index == 0
            }
        )}>
            3
        </span>
        Shipping info
    </li>
</ol>

{/**package details area */}
<div className={clsx('p-4',{
    'block':index == 0,
    'hidden': index !=0   
})}>
    <SchedulePackageDetail/>
    <button  onClick={()=>{setIndex(index+1)
    }}
     className="mt-4 text-white bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
</div>
{/**Recipient */}

<div className={clsx('p-4',{
    'block':index == 1,
    'hidden': index !=1   
})}>
    <ScheduleReceiverDetail/>

    <div className=''>
    <button  onClick={()=>{prevIndex()}}
     className="float-left mt-8 text-white bg-neutral-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Previous</button>
    <button  onClick={()=>{nextIndex()}}
     className="float-right mt-8 text-white bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
</div>  
    </div>

{/**Payment info*/}

<div className={clsx('p-4',{
    'block':index == 2,
    'hidden': index !=2   
})}>
    <ScheduleDeliverySummary />
{/*<div className=''>
    <button  onClick={()=>{prevIndex(),
         setIssumbmit(!true);
    }}
     className="float-left mt-8 text-white bg-neutral-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Previous</button>
    <button  onClick={()=>{nextIndex(),
        setIssumbmit(true);
    }}
     className="float-right mt-8 text-white bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</div>*/}  
</div>
</div>
</ReduxProvider>
);


}

