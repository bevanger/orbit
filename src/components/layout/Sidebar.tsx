import { NavLink } from "react-router-dom";
import { navigation } from "../../constants/navigation";


function Sidebar() {
    return(
        <ul>
            {navigation.map((item) => (
                <li key={item.path}>
                    <NavLink to={item.path}>{item.name}</NavLink>
                </li>
            ))}
        </ul>
    );
}

export default Sidebar;