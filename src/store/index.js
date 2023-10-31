import {configureStore} from '@reduxjs/toolkit';
import sign from './sign';

const store = configureStore({
    reducer:{
        sign:sign.reducer
    }
});

export default store;