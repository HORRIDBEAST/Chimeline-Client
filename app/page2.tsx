import Image from "next/image";
import React, { useCallback } from "react";
import { FaCloudversify } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { TbFlagStar } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";
import { IoMdFlame } from "react-icons/io";
import FeedCard from "@/Components/FeedCard";
//import {QueryClientProvider,QueryClient, useQueries, useQueryClient} from '@tanstack/react-query'
// import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
// import { toast } from "react-hot-toast";
// import { graphqlClient } from "@/clients/api";
// import { verifyGoogleTokenQuery } from "@/graphql/query/user";
// import LoginComponent from "@/Components/Google/LoginComponent";

interface AppSideBarButtons{
  title:string;
  icon:React.ReactNode;
}

const sideBarMenuItems : AppSideBarButtons[]=[
  {
  title:"Home",
  icon:<IoHomeOutline/>,
  },
  {
    title:"Discover",
    icon:<RiCompassDiscoverLine/>,
    },
    {
      title:"Notifications",
      icon:<IoNotificationsCircleOutline/>,
      },
      {
        title:"Messages",
        icon:<BiSolidMessageSquareDetail/>,
        },
        {
          title:"Flags",
          icon:<TbFlagStar/>,
          },
          {
            title:"Chime Flame",
            icon:<IoMdFlame />,
            },
          {
            title:"User Profile",
            icon:<CgProfile/>,
            },

            {
              title:"More",
              icon:<CgMoreO/>,
              },
]
export default function Home() {
  
  
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1  ml-8 relative">
          <div className="text-4xl h-fit w-fit hover:bg-yellow-800 rounded-full p-2 cursor-pointer transition-all">
     <FaCloudversify />
          </div>
        <div className="mt-2 text-xl font-medium pr-4">
          <ul>
            {sideBarMenuItems.map((item) =><li className="flex justify-start items-center gap-2 hover:bg-gray-800 rounded-full px-3 py-2 w-fit cursor-pointer mt-2" key={item.title}><span className="text-2xl">{item.icon}</span><span>{item.title}</span></li> )}
          </ul>
          <div className="mt-4 pr-3 pl-3">
          <button className="bg-sky-500 font-semibold rounded-full py-2 px-4 w-full">Post</button>
          </div>
          
        </div>
        
       

        
        </div>
        <div className="col-span-6 border-r-[1px] h-screen border-l-[1px] border-r-gray-600  border-l-gray-600">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        

      </div>
    </div>
  );
}
// import { useCurrentUser } from "@/hooks/user";
// const {user}=useCurrentUser()
  
  
  // console.log(user)
 {/* {user && (<div className="absolute bottom-5 flex gap-2 items-center hover:bg-slate-700 px-3 py-2 rounded-xl">
          {user && user.profileImageURL && <Image className="rounded-full" src={user?.profileImageURL} alt="user" height={50} width={50}/>}
          <div>
          <h3 className="text-xl">{user.firstName}</h3>
          <h3 className="text-xl">{user.lastName}</h3>
          </div>
          </div>
        
        )} */}
         /*
         {
         }
         <div className="col-span-3 p-5">
         
          <div className="p-5 border bg-slate-700 rounded-lg ">
          <h3 className="my-2 text-2xl">First time on ChimeLine ?</h3>
        {/* <LoginComponent/>
        </div>
        </div>
         */