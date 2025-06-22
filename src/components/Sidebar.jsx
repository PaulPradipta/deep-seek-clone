import React, { useState } from 'react';
import { useClerk, UserButton } from '@clerk/clerk-react';
import { useAppContext } from '../context/AppContext';
import ChatLabel from './ChatLabel';

const Sidebar = () => {
  const [expand, setExpand] = useState(true);
  const {openSignIn} = useClerk();
  const {user} = useAppContext()
  const [openMenu, setOpenMenu] = useState({id:0 ,open: false})

  return (
    <div
      className={`bg-[#1c1e24] ${
        expand ? 'w-[250px]' : 'w-[80px]'
      } transition-all duration-300 min-h-screen py-10 px-5 flex flex-col justify-between`}
    >
      {/* Top Section */}
      <div className='flex flex-col space-y-5'>
        {/* Logo and Toggle */}
        <div
          className={`flex items-center ${
            expand ? 'justify-between' : 'flex-col gap-y-6'
          }`}
        >
          <img
            src={expand ? './assets/logo_text.svg' : './assets/logo_icon.svg'}
            className={expand ? 'w-36' : 'w-10'}
            alt='logo'
          />
          <img
            src='./assets/menu_icon.svg'
            alt='menu'
            className='w-7 cursor-pointer'
            onClick={() => setExpand(!expand)}
          />
        </div>

        {/* New Chat Button */}
        <button
          className={`flex items-center  transition-all duration-300 ${
            expand ? 'justify-start gap-x-2 bg-[#4d6bfe] p-2 w-fit rounded-2xl' : 'justify-center '
          }`}
        >
          <img src='./assets/chat_icon.svg' alt='chat' />
          <span
            className={`text-white transition-all duration-300 overflow-hidden whitespace-nowrap ${
              expand ? 'max-w-[200px] opacity-100 ml-2' : 'none max-w-0 opacity-0 ml-0'
            }`}
          >
            New Chat
          </span>
        </button>

        <div className={`mt-4 text-white/25 text-sm ${expand ? "block" : "hidden"}`}>
            <ChatLabel openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex flex-col space-y-[24px]'>
        {/* Get App Section */}
       
        <div
          className={`flex items-center transition-all duration-300 ${
            expand ? 'gap-3 border-solid border-[#4D6BFE] border-2 py-2 px-1 rounded-xl' : 'justify-center'
          }`}
        >
          <img src='./assets/phone_icon_dull.svg' alt='profile' />
          <span
            className={`text-white transition-all duration-300 overflow-hidden whitespace-nowrap ${
              expand ? 'max-w-[150px] opacity-100 ml-2' : 'max-w-0 opacity-0 ml-0'
            }`}
          >
            Get App

          </span>
          {expand && (
            <img
              src='./assets/new_icon.svg'
              alt='new'
              className='transition-opacity duration-300'
            />
          )}
        </div>

        {/* Profile Section */}
        <div
          onClick={user ? null : openSignIn}
          className={`flex items-center transition-all duration-300 ${
            expand ? 'gap-3' : 'justify-center'
          }`}
        >
          {
            user ? <UserButton/> 
            :
            <img src='./assets/profile_icon.svg' alt='profile' />
          }
          <span
            className={`cursor-pointer text-white transition-all duration-300 overflow-hidden whitespace-nowrap ${
              expand ? 'max-w-[150px] opacity-100 ml-2' : 'max-w-0 opacity-0 ml-0'
            }`}
          >
            My Profile
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
