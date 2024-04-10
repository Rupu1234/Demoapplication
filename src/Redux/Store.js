import { configureStore } from '@reduxjs/toolkit'
import authslice from './Slice'


export const store= configureStore({
    Reducer:{
     myauth:authslice,
    },
})