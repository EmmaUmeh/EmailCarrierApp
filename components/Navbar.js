"use client";

import React from "react"
import { BiSearch } from "react-icons/bi"

export default function Navbar() {
    return(
        <>
            <div className="w-full bg-white">
                <div className="flex border-b-2 py-5 px-3  border-b-[#E0E0E0] justify-between">
                        <span className="font-lg">Inbox</span>
                        
                        <div className="flex">
                            <BiSearch size={20} color="rgb(163 163 163)" className="absolute top-6 ml-1"/>
                            <input placeholder="Search" className="border-2 rounded-full border-[#E0E0E0] px-2 pl-5 bg-[#E0E0E0] focus:outline-none focus:border-[#E0E0E0] focus:border-[#E0E0E0]"/>
                        </div>
                </div>
            </div>
        </>
    )
}