import './AuthField.scss'
import InputLogin from "../InputLogin/InputLogin";
import {useState} from "react";
import Error from "../Error/Error";

const AuthField = ({handleClick,error}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    return (
        <div className='authField'>
            <div className='authField__title'>Autorization</div>
            <InputLogin title={'login'} changeInput={(value) => setEmail(value)}/>
            <InputLogin title={'password'} changeInput={(value) => setPassword(value)}/>
            {error && <Error text='Неправильный логин или пароль'/>}
            <button onClick={() => handleClick(email,password)} className='authField__login'>Войти</button>
        </div>
    );
};

export default AuthField;