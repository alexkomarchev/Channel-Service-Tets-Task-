import './Header.scss'
import Auth from "../Auth/Auth";
import Logo from "../Logo/Logo";

const Header = () => {

    return (
        <div className='header'>
            <div className='header__logo'>
                <Logo/>
            </div>
            <div className='header__auth'>
                <Auth/>
            </div>

        </div>
    );
};

export default Header;