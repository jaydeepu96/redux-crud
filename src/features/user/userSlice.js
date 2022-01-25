import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    login: "",
    name: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.login = action.payload.login;

        },
        setSignOut: (state) => {
            state.login = false;
        }
    }
})

export const { setUserLogin, setSignOut } = userSlice.actions;

// export const selectLogin = (state) => state.user.login;
export const selectLogin = (state) => state.user.login;


export default userSlice.reducer;