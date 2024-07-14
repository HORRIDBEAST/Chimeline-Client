import React, { useCallback } from "react";
import Image from "next/image";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { FaCloudversify } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { TbFlagStar } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";
import { IoMdFlame } from "react-icons/io";

import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { SlOptions } from "react-icons/sl";

import FeedCard from "../Components/FeedCard/index";
import { toast } from "react-hot-toast";
import { graphqlClient } from "../clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import LoginComponent from "@/Components/Google/LoginComponent";

interface AppSideBarButtons {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: AppSideBarButtons[] = [
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
];

export default function Home() {
  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
      const googleToken = cred.credential;
      if (!googleToken) return toast.error(`Google token not found`);

      const { verifyGoogleToken } = await graphqlClient.request(
        verifyUserGoogleTokenQuery,
        { token: googleToken }
      );

      toast.success("Verified Success");
      console.log(verifyGoogleToken);

      if (verifyGoogleToken)
        window.localStorage.setItem("__twitter_token", verifyGoogleToken);
    },
    []
  );

  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-1  ml-8 relative">
          <div className="text-4xl h-fit w-fit hover:bg-yellow-800 rounded-full p-2 cursor-pointer transition-all">
     <FaCloudversify />
          </div>
          <div className="mt-2 text-xl font-medium pr-4">          
              <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-2 hover:bg-gray-800 rounded-full px-3 py-2 w-fit cursor-pointer mt-2"
                  key={item.title}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pr-3 pl-3">
          <button className="bg-sky-500 font-semibold rounded-full py-2 px-4 w-full">Post</button>
          </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] h-screen border-l-[1px] border-r-gray-600  border-l-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 p-5">
          <div className="p-5 bg-slate-700 rounded-lg">
            <h1 className="my-2 text-2xl">New to Twitter?</h1>
            <LoginComponent/>
          </div>
        </div>
      </div>
    </div>
  );
}