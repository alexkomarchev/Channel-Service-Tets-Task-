import {useAuth} from "../../hooks/useAuth";
import {Navigate} from 'react-router-dom'
import './main.scss'
import Card from "../../components/Card/Card";
import {getCompanyNameById, getRandomPhotoById, getUserNameById} from "../../helpers/cardHelpers";
import {useGetPhotos, useGetPostsScroll, useGetUsers} from "../../hooks/apiHooks";

const Main = () => {
    const {users} = useGetUsers()
    const {photos} = useGetPhotos()
    const {data} = useGetPostsScroll()

    const {isAuth} = useAuth()

    return isAuth ? (
        <div className='main'>
            {data?.map(user => <Card key={user.id} img={getRandomPhotoById(photos, user)} title={user.title}
                                     author={getUserNameById(users, user)} company={getCompanyNameById(users, user)}
                                     body={user.body}/>)}
        </div>
    ) : <Navigate to='/auth'/>;
};

export default Main;