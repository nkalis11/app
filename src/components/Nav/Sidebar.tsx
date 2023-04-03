import React, { useState } from 'react';
import Link from 'next/link';
import { useUser, SignInButton, SignOutButton } from '@clerk/nextjs';

const DisplayUser = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="flex flex-row items-center p-5">
      <img src={user.profileImageUrl} alt="Profile Img" className="w-10 h-10 rounded-full"/>
      <h1 className="text-black ml-2">Hello, {user.username}!</h1>
    </div>    
  );
};

const Sidebar = () => {
  const user = useUser();

  return (
    <>
      <div className="flex flex-col w-56 bg-zinc-100 h-screen transition-all duration-300" >
        <div className="flex items-center justify-center h-20 bg-indigo-500">
          <h1 className="text-3xl uppercase text-white">SKED</h1>
        </div>
        <div className="flex flex-col h-full bg-gray-50 border-r-2 border-gray-100 shadow-[0_15px_30px_-15px_rgba(0,0,0,0.1)]">
          <ul className="flex flex-col py-4 items-center hover:text-white">
            <li>
              <Link href="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 focus:bg-blue-500 focus:text-white hover:text-white hover:bg-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2">
                <span className="text-sm font-medium">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:bg-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2 focus:bg-blue-500  focus:text-white hover:text-white">
                  <span className="text-sm font-medium">Calendar</span>
                </div>
              </Link>
            </li>
          </ul>
          <div className="flex flex-col mt-auto pb-10">
            {user && <DisplayUser />}
            <div className="flex items-center justify-center">
              {!user.isSignedIn ? (
                <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
                  <SignInButton />
                </div>
              ) : (
                <div className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-block">
                  <SignOutButton />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
