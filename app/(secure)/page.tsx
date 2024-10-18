import MainContent from "@/app/_components/mainContent/MainContent";
import Sidebar from "@/app/_components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="min-h-svh flex">
      <Sidebar />
      <MainContent />
    </div>
  );
}
