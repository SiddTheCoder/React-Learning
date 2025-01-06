import React from "react";

function Card({userName='SiddTheCoder'}){
    return(
        <>
        <div className="bg-purple-500 w-[30%] h-auto p-5 flex items-center mt-10 ml-10 rounded-md justify-center cursor-pointer">
            <div>
                <img src="https://avatars.githubusercontent.com/u/162303130?v=4" alt="Photo" />
            </div>
            <div>
                <h2 className="text-purple-300 text-2xl">{userName}</h2>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, repudiandae perspiciatis fuga enim veniam omnis!</p>
            </div>
        </div>
        </>
    )
}
export default Card