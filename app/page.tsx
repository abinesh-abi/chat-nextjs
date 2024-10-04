import MainContent from "@/components/mainContent/MainContent";
import Sidebar from "@/components/sidebar/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-svh md:flex">
      <Sidebar />
      <MainContent />
    </div>
  );
}
