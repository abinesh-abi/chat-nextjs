import MainContent from "@/components/mainContent/MainContent";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="min-h-svh flex">
      <Sidebar />
      <MainContent />
    </div>
  );
}
