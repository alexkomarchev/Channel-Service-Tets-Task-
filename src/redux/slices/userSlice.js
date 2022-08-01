import {createSlice} from "@reduxjs/toolkit";

const token = localStorage.getItem('token')
const email = localStorage.getItem('email')

const initialState = {
    token: null || token,
    email: null || email,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, {payload}) => {
            state.token = payload.token;
            state.email = payload.email;
            localStorage.setItem('token', payload.token)
            localStorage.setItem('email', payload.email)

        },
        deleteUser: (state) => {
            state.token = null;
            state.email = null;
        }
    }
})


export const {deleteUser, setUser} = userSlice.actions

export default userSlice.reducer