'use client'
import MainContent from "@/app/_components/mainContent/MainContent";
import Sidebar from "@/app/_components/sidebar/Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../_store";

export default function Home() {
  const chat = useSelector((state: RootState) => state.chat)
  const mobileSidebar = chat.selectedChat?._id ? 'hidden' : 'flex' /**mobile device */
  const mobileContent = chat.selectedChat?._id ? 'flex' : 'hidden' /**mobile device */
  return (
    <div className="h-svh flex">
      <div
        className={`md:flex ${mobileSidebar} `}
      >
        <Sidebar />
      </div>
      <div className={`md:flex w-full ${mobileContent} `}>
        <MainContent />
      </div>
    </div>
  );
}
