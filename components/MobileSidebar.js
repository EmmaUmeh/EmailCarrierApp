"use client";

import React, { useState } from "react";
import ComposeModal from "./ComposeModal";
import { BsInbox } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { TbSend } from "react-icons/tb";
import { FiTrash2 } from "react-icons/fi"

export default function MobileSidebar() {

        const [toggleModal, setToggleModal] = useState(false);

        const handleToggleModal = () => {
            setToggleModal(!toggleModal)
        }

    return (
      <>
        <div className="fixed w-60 left-0 h-screen bg-white z-50 border-r-2 border-[#E0E0E0] py-4 px-3 lg:hidden sm:block md:block hidden">
          <div className="py-5 px-3">
            <button className="w-full rounded-lg bg-[#0085ff] text-white text-sm py-2 px-2" onClick={handleToggleModal}>Compose</button>
          </div>

          <div>{toggleModal && <ComposeModal onCancel={handleToggleModal}/>}</div>

          <div className="py-5 px-3 mt-10">
                
                {/* Inbox */}
                <div className="flex gap-2 mb-10 cursor-pointer">
                    <BsInbox size={20}/>
                    <span>Inbox</span>
                </div>

                {/* Starred */}
                <div className="flex gap-2 mb-10 cursor-pointer">
                    <AiOutlineStar size={20}/>
                    <span>Stared</span>
                </div>

                {/* Send */}
                <div className="flex gap-2 mb-10 cursor-pointer">
                    <TbSend size={20}/>
                    <span>Send</span>
                </div>

                {/* Delete */}
                <div className="flex gap-2 cursor-pointer">
                    <FiTrash2 size={20}/>
                    <span>Trash</span>
                </div>
          </div>
        </div>
      </>
    );
  }
  