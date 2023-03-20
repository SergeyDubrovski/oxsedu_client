import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import RegLogServise from '../../api/reglogServise';

export const fetchReg = createAsyncThunk(
    'regist/fetchReg',
    async ({email, password, role}, {rejectWithValue, dispatch, getState}) => {
        //console.log(getState());
        try {
             const response = await RegLogServise.regUser({email, password, role});
        return response

        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
       
    }
)
const setError = (state, action) => { //обработка ошибки
    state.status = 'rejected';
    state.error = action.payload;}

const regSlice = createSlice({
    name: 'regist',
    initialState: {
        reg:{email: '',
        password: '',
        role: ''},
        status: null,
        error: null
    },
    reducers: {
        registrReducer(state, action) {
           
           return {...state,
                email: action.payload.email,
                password: action.payload.password,
                role: action.payload.role}
            
        }
    },
    extraReducers: {
        [fetchReg.pending] : (state, action) => {

        }, // метод жизненного цикла - загрузка 
        [fetchReg.fulfilled] : (state, action) => { 

        }, // метод жизненного цикла - успешное получение данных
        [fetchReg.rejected] : setError // метод жизненного цикла - неполадка
        
    }
})

export const { registrReducer, extraReducers } = regSlice.actions
export default regSlice.reducer