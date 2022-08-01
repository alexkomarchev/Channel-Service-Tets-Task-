import {useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../constants/api";

export const useGetUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(`${baseURL}/users`).then(res => {
            setUsers(res.data)
        })
    },[])

    return {users}
}
export const useGetPhotos = () => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        axios.get(`${baseURL}/photos`).then(res => {
            setPhotos(res.data)
        })
    },[])

    return {photos}
}

export const useGetPostsScroll = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrenPage] = useState(1)
    const [fetching, setFetching] = useState(true)

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }

    }

    const limit = Math.floor((Math.random() * 11) + 5);

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler)
        return function () {
            document.addEventListener("scroll", scrollHandler)
        }
    }, [fetching])

    useEffect(() => {
        if (fetching) {
            axios.get(`${baseURL}/posts?_limit=${limit}&page=${currentPage}`).then(res => {
                console.log(res.data)
                setData([...data, ...res.data])
                setCurrenPage(prevState => prevState + 1)
            }).finally(() => setFetching(false))

        }
    }, [fetching])



    return {data}
}