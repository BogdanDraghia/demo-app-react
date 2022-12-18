import { createSlice } from "@reduxjs/toolkit";


const initialState= {};

const podcastSlice = createSlice({
    name:"podcast",
    initialState,
    reducers:{
        setPodcasts: (state,action) =>{
            return {podcast:action.payload}
        },
        clearPodcasts:() =>{
            return {podcast:""}
        }
    }
})

const {reducer, actions} = podcastSlice

export const { setPodcasts, clearPodcasts } = actions
export default reducer;