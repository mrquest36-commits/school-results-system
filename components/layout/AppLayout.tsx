import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <TopNavbar />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}