import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import SideNav from "../ui/dashboard/sidenav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row h-screen md:overflow-hidden ">
      <aside className=" flex-none w-full md:w-64 ">
        <SideNav />
      </aside>
      <main className=" flex-grow p-6 md:p-12 md:overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
