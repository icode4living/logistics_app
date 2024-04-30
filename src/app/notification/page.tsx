import { notification } from "./component/data";
export default function Notification(){
    return (
<div className=" max-w-sm md:max-w-2xl lg:max-w-2xl mx-auto  bg-white border border-gray-100 rounded-lg dark:bg-gray-700 dark:border-gray-600 h-96">
    <ul>
      { notification.map((data, index)=>
        <li className="border-b border:gray-100 dark:border-gray-600" key={index}>
            <a href="#" className="flex items-center justify-center w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800">
                <img className="me-3 rounded-full w-11 h-11" src="https://img.icons8.com/color/48/appointment-reminders--v1.png"
                 />
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">New message from <span className="font-medium text-gray-900 dark:text-white">{data.title}</span>: {data.message.substring(0,15)} ...</p>
                    <span className="text-xs text-blue-600 dark:text-blue-500">{data.date}</span>
                </div>
            </a>
        </li>
      )
}
    </ul>
</div>
    
    );

}