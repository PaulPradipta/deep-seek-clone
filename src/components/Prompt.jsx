import React, { useState } from "react";
import Message from "./Message";

const Prompt = ({setIsLoading, isLoading}) => {

    const [prompt, setPrompt] = useState('')
     const [messages, setMessages] = useState([])

  return (
    <div className="p-4 flex flex-1 flex-col items-center justify-center bg-[#2d2f36] min-h-screen">
      {messages.length === 0 ? (
            <>
            <div className="flex items-center gap-3">
              <img src="./assets/logo_icon.svg" alt="" className="h-16"/>
              <p className="text-2xl font-medium text-white">Hi, I'm DeepSeek.</p>
            </div>
            <p className="text-sm mt-2 text-white">How can I help you today?</p>
            </>
          ): 
          <>
            <div>
              <Message role='user' content='What is Next JS'/>
            </div>
          </>
          }
      {/* Prompt Box */}
      <form
        className={`w-full ${
          false ? "max-w-3xl" : "max-w-2xl"
        } bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}
      >
        <textarea
          className="outline-none w-full resize-none overflow-hidden break-words bg-transparent text-slate-200"
          rows={2}
          placeholder="Message DeepSeek"
          value={prompt}
          onChange={(e)=> setPrompt(e.target.value)}
        />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <p className="flex items-center gap-2 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition text-white">
              <img className="h-5" src="./assets/deepthink_icon.svg" alt="" />
              DeepThink (R1)
            </p>

            <p className="flex items-center gap-2 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition text-white">
              <img className="h-5" src="./assets/search_icon.svg" alt="" />
              Search
            </p>
          </div>

          <div className="flex items-center gap-2">
            <img
              className="w-4 cursor-pointer"
              src="./assets/pin_icon.svg"
              alt=""
            />
            <button
              className={`${
                prompt ? "bg-blue-500" : "bg-[#71717a]"
              } rounded-full p-2 cursor-pointer`}
            >
              <img
                className="w-3.5 aspect-square"
                src={
                  prompt ? "./assets/arrow_icon.svg" : "./assets/arrow_icon_dull.svg"
                }
                alt=""
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Prompt;
