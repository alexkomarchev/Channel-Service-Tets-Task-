import './InputLogin.scss'

const InputLogin = ({title,changeInput}) => {
    return (
        <div className='inputLogin'>
            <div className='inputLogin__title'>{title}</div>
            <input className='inputLogin__input' onChange={(e) => changeInput(e.target.value)}/>
        </div>
    );
};

export default InputLogin;