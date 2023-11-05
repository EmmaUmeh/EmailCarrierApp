"use client";

import React, { useState } from "react"
import { BiMenu, BiSearch, BiX } from "react-icons/bi"
import Avatar from "./Avatar";
import { GrNotification } from "react-icons/gr"
import AvatarModal from "./AvatarModal";
import MobileSidebar from "./MobileSidebar";

export default function Navbar() {

    const [avatarmodal, setAvatarModal] = useState(false);
    const [menuToggle, setMenuToggle] =  useState(false)

    const handleAvatarModal = () => {
        setAvatarModal(!avatarmodal)
    }

    const handleToggle = () => {
        setMenuToggle(!menuToggle)
    }
    return(
        <>
            <div className="w-full bg-white">
                <div className="flex border-b-2 py-5 px-3 items-center  border-b-[#E0E0E0] justify-between">
                        <span className="font-lg">Inbox</span>
                        
                        <div className="flex hidden lg:block sm:hidden md:hidden">
                            <BiSearch size={20} color="rgb(163 163 163)" className="absolute top-8 ml-1"/>
                            <input placeholder="Search" className="border-2 rounded-full border-[#E0E0E0] px-2 pl-5 pr-20 bg-[#E0E0E0] focus:outline-none focus:border-[#E0E0E0] focus:border-[#E0E0E0]"/>
                        </div>

                        <div className="flex items-center gap-3">
                            <GrNotification size={20}/>
                            <Avatar width={40} height={40} onClick={handleAvatarModal}/>
                            <div className="flex flex-col text-sm">
                                    <h5>Emmanuel Umeh</h5>
                                    <span>emmanuel@gmail.com</span>
                            </div>
                        </div>

                        {/* block lg:hidden sm:block md:block  */}
                        <div className="cursor-pointer block lg:hidden sm:block md:block" onClick={handleToggle}>
                           {
                            menuToggle
                            ?
                            <BiX size={30}/>
                            :
                            <BiMenu size={30}/>
                           }
                        </div>

                            {avatarmodal && <AvatarModal /> }

                           <div className="absolute left-100 top-4 block lg:hidden sm:block md:block hidden">
                                {menuToggle && <MobileSidebar />}
                           </div>
                        
                </div>
            </div>
        </>
    )
}