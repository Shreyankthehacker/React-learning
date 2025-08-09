import React from "react";


const ChitChat = () =>{

return (
    <>
    <div className = 'shadow-lg outline gap-x-4 outline-black dark:outline-white/10 justify-between dark:bg-slate-800  mx-auto items-center rounded-2xl w-120 h-30 '>
        <img
        className="h-18 -px-2  translate-y-4  translate-x-5  items-center"
        src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png?20220101141644'></img>
        <div><div className="text-xl px-2 translate-x-25 -translate-y-10 flex items-center dark:text-white ">Telegram Messenger</div>
    </div>
    <div className="px-2 dark:text-gray-300 text-1xl translate-x-25 -translate-y-10">Anywhere anytime</div>
    </div>
    </>
)



}


export default ChitChat