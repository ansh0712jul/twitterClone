import React from "react";
import { FaTwitter,FaHashtag  } from "react-icons/fa";
import { RiHomeHeartFill,RiNotification4Fill } from "react-icons/ri";
import { BiSolidMessageSquare } from "react-icons/bi";
import { IoBookmarkSharp } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

interface TwitterSidebarButtons {
  title: string;
  icon : React.ReactNode;
}

const sideBarMenuItems : TwitterSidebarButtons[] = [
  {
    title : "Home",
    icon : <RiHomeHeartFill />
  },
  {
    title : "Explore",
    icon : <FaHashtag />
  },
  {
    title : "Notifications",
    icon : <RiNotification4Fill />
  },
  
  {
    title : "Messages",
    icon : <BiSolidMessageSquare />
  },
  {
    title : "Bookmarks",
    icon : <IoBookmarkSharp />
  },
 
  {
    title : "Profile",
    icon : <CiUser />
  },
]
export default function Home() {
  return (
    <div className={inter.className}>
      <div className = 'grid grid-cols-12 h-screen w-screen px-56'>
        <div className="col-span-3  pt-8 ">
          <div className="text-4xl h-fit hover:bg-gray-800 p-2 rounded-full transition-all  cursor-pointer w-fit">
            <FaTwitter  />
          </div>
        <div className="mt-4 text-xl  pr-4">
          <ul>
          {
            sideBarMenuItems.map( item => (
              <li key={item.title} className="flex justify-start items-center gap-4 hover:bg-gray-800 py-2 px-4 rounded-full w-fit" >
                <span>{item.icon}</span>
                <span>{item.title}</span>
                
              </li>
              
            ))
          }
          </ul>
          <div className="mt-4 ">
            <button className="bg-blue-500 text-white rounded-full w-full p-2 text-lg">Tweet</button>
          </div>
          
        </div>
          
        </div>
      <div className="col-span-6 border-r-[0.1px] border-l-[0.1px] border-gray-400"></div>
      <div className="col-span-3 "></div>
      </div>
      
    </div>
      
  );
}
