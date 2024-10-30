
import { configureStore, createSlice } from "@reduxjs/toolkit"

const cardSlice=createSlice({
    name:"card",
    initialState:{
        value:[]
    },
    reducers:{
        addCard:(state,action)=>{
           state.value.push({name:action.payload,id:Math.random()})
        },
        removeCard:(state,action)=>{
            console.log(action.payload,state.value)
            return {
                value:state.value.filter((item)=>{
                    return item.id!=action.payload.id
                })
            }
        }
    }
})


const store=configureStore({
    reducer:{
        card:cardSlice.reducer
    }
})

export const {addCard,removeCard}=cardSlice.actions

export default store