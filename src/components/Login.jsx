import {useDispatch} from "react-redux";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import AuthField from "./AuthField/AuthField";
import {setUser} from "../redux/slices/userSlice";
import {useNavigate} from 'react-router-dom'
import {useState} from "react";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [invalidLogin,setInvalidLogin] = useState(false)

    const handleLogin = async (email, password) => {
        const auth = getAuth()
            signInWithEmailAndPassword(auth, email, password).then(({user}) => {
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }))
            navigate('/')
        }).catch(() => setInvalidLogin(true))
    }

    return (
        <AuthField error={invalidLogin} handleClick={handleLogin}/>
    );
};

export default Login;