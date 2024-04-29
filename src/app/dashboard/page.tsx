'use client';
export default function Dashbord(){
    return (
        <section className="w-full md:flex lg:flex lg:justify-items-center md:justify-items-center overflow-hidden p-2 md:p-0 lg:p-0">
            <div className="flex justify-between">
                <div className="flex p-4">
                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>
<p className="text-lg text-neutral-600 px-4">Hi Guest</p>

                </div>
                <div className="p-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
  <path stroke="currentColor"stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
</svg>
</div>
                </div>
            <div className="w-full md:w-4/5 lg:w-4/5 bg-orange-500 h-[200px] rounded-lg
             shadow-sm p-8">
                <h2 className="text-white text-center font-bold text-lg text-pretty ">Welcome</h2>

                <div className="relative w-auto lg:w-2/3 md:w-2/3 mt-10">
            <input type="search" id="location-search" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search for city or address" required />
            <button type="submit" className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-neutral-800 rounded-e-lg border border-neutral-700 hover:bg-neutral-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
            </div>
            <div className="p-2 ">
            <h2 className="text-neutral-500 text-xl md:text-center lg:text-center text-justify text-pretty py-4">What would you like to do now?</h2>
            <div className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-4 md:grid-cols-3 lg:grid-cols-3 ">
                <a className=" p-8 lg:pointer-events-auto lg:p-12 md-12 shadow-md
                 hover:border-orange-400 hover:border rounded-sm hover:text-orange-500 h-4/5"
                href="/send_package" >
                    <div className="flex  gap-2 justify-items-center flex-wrap">
                            <img src="/send_package.png" alt="Toboros logistics-get your items delivered to your recipient
                             from your mobile phone"/>
                        <h5 className="text-sm text-neutral-700 font-bold pt-1"> Send Package</h5>
                    </div>
                </a>
                <a className="pointer-events-none  p-8 lg:pointer-events-auto lg:p-0 shadow-md
                 hover:border-orange-400 hover:border rounded-sm hover:text-orange-500 h-4/5"
                href="#" target="_blank">
                    <div className="flex place-items-center gap-2 flex-wrap justify-items-center">
                    <img src="/schedule_package.png" alt="Toboros logistics-schedule your delivery"/>

                        <h5 className="text-sm text-neutral-700 font-bold p-1"> Schedule</h5>
                    </div>
                </a>

                <a className="pointer-events-none  p-8 lg:pointer-events-auto lg:p-0 shadow-md
                 hover:border-orange-400 hover:border rounded-lg hover:text-orange-500 h-4/5"
                href="#" target="_blank">
                    <div className="flex place-items-center gap-2 flex-wrap justify-items-center ">
                    <img src="/shipping_quote.png" alt="Toboros logistics-Get a shipping quote"/>

                        <h5 className="text-sm text-neutral-700 font-bold p-1"> Shipping quote</h5>
                    </div>
                </a>

            </div>

            </div>
            <div className="mb-4 p-4">
                <h2 className="text-lg text-justify text-neutral-500"> Recent Deliveries</h2>
                <p className="text-center text-sm text-neutral-300">You have no reent deliveries</p>
            </div>
        </section>
    );
}