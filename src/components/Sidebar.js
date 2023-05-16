import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginIcon from '@mui/icons-material/Login';
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({links, close}){
    const location = useLocation()
    return(
        <div className="sidebar" onClick={close}>
           
            {links?.map(link => (
                <Link to={link.path} className={location?.pathname === link.path ? "sidebar-link active" : "sidebar-link"} key={link.name}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </Link>
            ))} 
            
            <Link to="">  <LoginIcon/> </Link> 
        </div>
    )
}