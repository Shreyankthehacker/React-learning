import React from "react";


const Profile = () =>(
    <>
<div className="flex items-center justify-center ">
    <div className = 'flex border-gray-500 border-4 rounded-2xl w-120 h-40 s '>

<div className="flex translate-x-10 py-6  justify-center items-center">
<img 
className="h-30  rounded-full mx-auto sm:shrink-0"
src = 'https://pbs.twimg.com/media/EhpXZHvVgAAmpI6?format=jpg&name=4096x4096'/>
</div>
<div className="space-y-3">
<div className=" translate-y-8 translate-x-20 text-2xl text-shadow-neutral-900">Anjali Balatripurasundari </div>
<div className="text-lg translate-y-8 translate-x-20 text-gray-500">Actress Tamil Telugu</div>
</div>
<div className="space-y-3">
<button className="py-2 translate-y-25 -translate-x-45 self-start rounded-full  px-4  border border-purple-200 text-purple-600  hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 transition duration-200">
  Message
</button>
</div>
</div>
    </div>
    </>
)

export default Profile