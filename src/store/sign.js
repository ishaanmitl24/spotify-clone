import {createSlice} from '@reduxjs/toolkit'

const sign = createSlice({
    name:'sign',
    initialState:{
        user:null,
        error:'',
        email:'',
        fetchError:'',
        artistData:null
    },
    reducers:{
        setUser(state,action){
            state.user = action.payload.user;
        },
        setError(state,action){
            state.error = action.payload.error;
        },
        setEmail(state,action){
            state.email = action.payload.email;
        },
        setFetchError(state,action){
            state.fetchError = action.payload.fetchError;
        },
        setArtistData(state,action){
            state.artistData = action.payload.artistData;
        }
    }
});


export default sign;
export const SignAction = sign.actions;