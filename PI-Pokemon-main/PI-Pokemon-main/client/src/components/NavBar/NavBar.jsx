import { Link } from "react-router-dom/cjs/react-router-dom.min";
import style from './NavBar.module.css';
const NavBar = () => {
return(
    <div className={style.mainContainer}>
<Link to="/home">HOME</Link>
<Link to="/form">FORM</Link>
    </div>
)
}

export default NavBar;