import './Logo.scss'
import logo from "../../assets/logo.svg";
import logo_mobile from "../../assets/logo_mobile.svg";
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to='/'>
            <img className='logo' src={logo} alt="Каналсервис"/>
            <img className='logo_mobile' src={logo_mobile} alt="Каналсервис"/>
        </Link>

    );
};

export default Logo;