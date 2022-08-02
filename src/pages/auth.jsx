import Login from "../components/Login";
import {useAuth} from "../hooks/useAuth";
import {Navigate} from "react-router-dom";

const Auth = () => {
    const {isAuth} = useAuth()

    return isAuth ? <Navigate to='/' /> : <Login/>

};

export default Auth;