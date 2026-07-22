import "./Layout.css";

import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
return(
    <div className="layout">
        <Sidebar/>
            <div className="content">
                <Header />

            <main>{children}</main>
        </div>
    </div>
    );
}
    
export default Layout;