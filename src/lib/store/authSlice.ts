import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthResult{
    displayName: string | null,
    first_name: string | null,
    last_name: string | null,
    email: string | null,
    phone: string | null,
    authToken: string | null ,
    isAuthenticated: boolean | null
}
const initialState: AuthResult={
    displayName: '',
    email: '',
    first_name: '',
    last_name: '',
    phone: '',
    authToken: '',
    isAuthenticated:false,
}
export const AuthSlice = createSlice({
    name: "auth_result",
    initialState,
    reducers:{
        setDisplayName:(state, action:PayloadAction<string|null>)=>{
         state.displayName = action.payload;
        },
        setFirstName:(state, action:PayloadAction<string|null>)=>{
            state.first_name = action.payload;
           },
           setLastName:(state, action:PayloadAction<string|null>)=>{
            state.last_name= action.payload;
           },
           setEmail:(state, action:PayloadAction<string|null>)=>{
            state.email = action.payload;
           },
           setPhone:(state, action:PayloadAction<string|null>)=>{
            state.phone = action.payload;
           },
           setAuthToken:(state, action:PayloadAction<string|null>)=>{
            state.authToken = action.payload;
           },
           setIsAuthenticated:(state, action:PayloadAction<boolean>)=>{
            state.isAuthenticated = action.payload;
           },
    }

});
export const {
    setAuthToken,
    setDisplayName,
    setEmail,
    setFirstName,
    setIsAuthenticated,
    setLastName,
    setPhone
}= AuthSlice.actions;
export const authReducer = AuthSlice.reducer;
