import {useSelector} from "react-redux";

export const useAuth = () => {
    const {token,email} = useSelector(state => state.user)

    return {
        isAuth: !!email,
        email,
        token
    }
}