import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('user/fetchUser',async() => {
   let data = await fetch('https://mocki.io/v1/6df33531-8a49-4606-b3f1-ae6a9adff2cd');
   data = await data.json();
   return data;
})

const initialState = {
  value: 0,
  data:[],
  len:0
}

export const seatSlice = createSlice({
  name: 'seat',
  initialState,
  reducers: {
    increment: (state,action) => {
        console.log(action.payload);
        const {groupIndex,rowIndex,seatIndex} = action.payload;
      state.value += 1;
      console.log(state.data);
      console.log(state.data[groupIndex]);
      console.log(state.data[groupIndex].seatRowData[rowIndex]);

      for(let i = 0;i<3;i++){
        if(i>=state.data[groupIndex].seatRowData[rowIndex].length || state.data[groupIndex].seatRowData[rowIndex].seatRowData[seatIndex+i].type !== "AVAILABLE")
        break;
        console.log(i);
      state.data[groupIndex].seatRowData[rowIndex].seatRowData[seatIndex+i].type = "BOOKED";
      console.log(state.data[groupIndex].category, state.data[groupIndex].seatRowData[rowIndex].rowId,state.data[groupIndex].seatRowData[rowIndex].seatRowData[seatIndex+i].seatId);
    }
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
        // Add user to the state array
        console.log(typeof(action.payload),action.payload,Array.isArray(action.payload));
        state.data = (action.payload);
        state.len = action.payload.length;
})
}
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = seatSlice.actions

export default seatSlice.reducer