import React from "react";
import Link from "next/link";
import { HomeIcon, PlusIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
    return (
      <div className="flex flex-col h-screen w-20 bg-gray-800 text-white">
        <div className="p-4 flex-1">
            <Link href="/">
            
            </Link>
        </div>
      </div>
    );
  };
  
  export default Sidebar;