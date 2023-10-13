import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const sanitize = (obj) => {
  return JSON.parse(JSON.stringify(obj, (key, value) => {
    return (key === "type" && value === "SELECTED" ? "AVAILABLE" : value);
  }));
};

export const fetchUsers = createAsyncThunk('user/fetchUser',async() => {
   let data = await fetch('https://mocki.io/v1/6df33531-8a49-4606-b3f1-ae6a9adff2cd');
   data = await data.json();
   return data;
})

const initialState = {
  value: 0,
  data:[],
  len:0,
  noOfSeats:4,
  noOfSeatsSelected:0,
}

export const seatSlice = createSlice({
  name: 'seat',
  initialState,
  reducers: {
    selectTotalSeats: (state,action) => {
      state.data = sanitize(state.data);
      state.noOfSeats = action.payload;
      state.noOfSeatsSelected = 0;
    },
    increment: (state,action) => {
        console.log(action.payload);
        const {groupIndex,rowIndex,seatIndex} = action.payload;
      state.value += 1;
      console.log(state.data);
      console.log(state.data[groupIndex]);
      console.log(state.data[groupIndex].seatRowData[rowIndex]);
      let limit = 0;
if(state.noOfSeatsSelected === state.noOfSeats)
{
  limit = state.noOfSeats;
  state.noOfSeatsSelected = 0;
  // let tempData = state.data;
  // tempData = JSON.stringify(tempData);
  // console.log(tempData);
  // tempData.replaceAll("SELECTED","AVAILABLE");
  // console.log(tempData);
  // tempData = JSON.parse(tempData)
  state.data = sanitize(state.data);

}
else if(state.noOfSeatsSelected!==0 && state.noOfSeatsSelected < state.noOfSeats)
limit = state.noOfSeats - state.noOfSeatsSelected;
else
limit = state.noOfSeats;

      for(let i = 0;i<limit;i++){
        if(i>=state.data[groupIndex].seatRowData[rowIndex].length || state.data[groupIndex].seatRowData[rowIndex].seatRowData[seatIndex+i].type !== "AVAILABLE")
        break;
        console.log(i);
      state.data[groupIndex].seatRowData[rowIndex].seatRowData[seatIndex+i].type = "SELECTED";
      console.log(state.data[groupIndex].category, state.data[groupIndex].seatRowData[rowIndex].rowId,state.data[groupIndex].seatRowData[rowIndex].seatRowData[seatIndex+i].seatId);
      state.noOfSeatsSelected = state.noOfSeatsSelected + 1;
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
export const { increment, decrement, incrementByAmount, selectTotalSeats } = seatSlice.actions

export default seatSlice.reducer