'use client';

import {app} from '@/lib/firebase_config';

import { getDatabase } from 'firebase/database';

export default function ScheduleDelivery(){
const delivery = [];
    return(
        <div className='relative flex min-h-screen flex-col items-center'>
 {
    delivery.length <=0?
<p className='mb-8 text-lg font-normal text-gray-400 lg:text-xl dark:text-gray-200 text-center'>
    You have no delivery on your schedule at the moment
</p>:
null
}
<button onClick={
    ()=>{
        location.replace('/add')
    }
} type="button" className="absolute right-5 bottom-4 text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

<span className="sr-only">Add button </span>
</button>
        </div>
    );

}