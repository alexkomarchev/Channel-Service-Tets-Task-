import './Auth.scss'
import {ReactComponent as Exit} from "../../assets/exit.svg";
import {useAuth} from "../../hooks/useAuth";
import {useDispatch} from "react-redux";
import {deleteUser} from "../../redux/slices/userSlice";

const Auth = () => {
    const {isAuth,email} = useAuth()

    const dispatch = useDispatch()

    return isAuth && (
        <div className='auth'>
            <div className='auth__name'>{email}</div>
            <Exit onClick ={() => dispatch(deleteUser())}  className='auth__icon'/>
        </div>
    );
};

export default Auth;