import Header from "../Header/Header";
import './Layout.scss'
const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div className='main'>{children}</div>

        </>
    );
};

export default Layout;