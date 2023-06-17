import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const showUser = createAsyncThunk(
    "showUser",
    async (id, { rejectWithValue }) => {
        const response = await fetch(
          `http://localhost:3500/users/${id}`
        );   
        try {
          const result = await response.json();
          console.log(result);
          return result;
        } catch (error) {
          return rejectWithValue(error);
        }
      }
    );
  
//update todo
export const updateUser = createAsyncThunk(
    "updateUser",
    async (data, { rejectWithValue }) => {
      console.log("updated data", data);
      const response = await fetch(
        `http://localhost:3500/users/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
        }
      );
  
      try {
        const result = await response.json();
        console.log(result)
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

    const userSlice = createSlice({
        name:"user",
        initialState: {
            user: [],      
        loading: false,
        error: "",
        },
        extraReducers: {
            [showUser.pending]:(state, action)=>{
                state.loading = true;
            },
            [showUser.fulfilled]:(state, action)=>{
                state.loading = false;
                state.user = action.payload
            },
            [showUser.rejected]: (state, action) => {
                state.loading = false;
                state.error = action.payload;
              },
              
              [updateUser.pending]:(state)=>{
                state.loading = true;
            },
            [updateUser.fulfilled]:(state, action)=>{
                state.loading = false;
                state.user = action.payload;
                state.error="Succesfully Updated";
                // state.user=state.user.map((ele)=>
                // (ele.id === action.payload.id ? action.payload : ele)  
                // )   
            },
            [updateUser.rejected]:(state, action)=>{
                state.loading = false;
                state.user = action.payload;
                state.error="Not Updated";
            },
            
        }
    })
    //   try {
    //     const result = await response.json();
    //     console.log(result);
    //     return result;
    //   } catch (error) {
    //     return rejectWithValue(error);
    //   }
    export default userSlice.reducer;