import { useState } from "react";
import "./Layout.css";

import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
    children: React.ReactNode;
}



function Layout({ children }: LayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
return(
    <div className={`layout ${sidebarOpen ? "" : "sidebar-hidden"}`}>
        <Sidebar/>

            <div className="content">
                <Header 
                    onMenuClick={() => setSidebarOpen(!sidebarOpen)}
                />

            <main>{children}</main>
        </div>
    </div>
    );
}
    
export default Layout;