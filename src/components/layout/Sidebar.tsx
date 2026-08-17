import { NavLink } from "react-router-dom";
import { navigation } from "../../constants/navigation";
import "./Sidebar.css";

function Sidebar() {
    return(
        <aside className="sidebar">
            <nav>
                <ul>
                    {navigation.map((item) => (
                        <li key={item.path}>
                            <NavLink to={item.path}>{item.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;