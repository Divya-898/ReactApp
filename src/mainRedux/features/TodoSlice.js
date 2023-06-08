import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const showTodo = createAsyncThunk(
    "showTodo",
    async ( id ) => {
      return fetch(`http://localhost:3500/todos?userId=${id}`
      ).then((res)=>
      res.json()
      );
    })
  
//create Todo
export const createTodo = createAsyncThunk("createTodo", async(data, {rejectWithValue})=>{
    const response = await fetch("http://localhost:3500/todos",{
     method:"POST",
     headers:{
        "Content-Type":"application/json"
     },
     body: JSON.stringify(data)
    })

    try{
     const result = await response.json();
     return result
    }catch(error){
        return rejectWithValue(error)
    }
})
//update todo
export const updateTodo = createAsyncThunk(
    "updateTodo",
    async (data, { rejectWithValue }) => {
      console.log("updated data", data);
      const response = await fetch(
        `http://localhost:3500/todos/${data.id}`,
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
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

//delete todoos
export const deleteTodo = createAsyncThunk(
  "deleteTodo",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3500/todos/${id}`,
      { method: "DELETE" }
    );

    try {
      const result = await response.json();
      console.log(result);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

    const todoSlice = createSlice({
        name:"todo",
        initialState: {
            todos: [],
            edit:[],
        loading: false,
        error: null,
        },
        extraReducers: {
            [createTodo.pending]:(state)=>{
                state.loading = true;
            },
            [createTodo.fulfilled]:(state, action)=>{
                state.loading = false;
                state.todos.push(action.payload)
            },
            [createTodo.rejected]:(state, action)=>{
                state.loading = false;
                state.todos = action.payload
            },
            [showTodo.pending]:(state, action)=>{
                state.loading = true;
            },
            [showTodo.fulfilled]:(state, action)=>{
                state.loading = false;
                state.todos = action.payload
            },
            [showTodo.rejected]: (state, action) => {
                state.loading = false;
                state.error = action.payload;
              },
              
              [updateTodo.pending]:(state)=>{
                state.loading = true;
            },
            [updateTodo.fulfilled]:(state, action)=>{
                state.loading = false;
                state.todos=state.todos.map((ele)=>
                (ele.id === action.payload.id ? action.payload : ele)  
                )   
            },
            [updateTodo.rejected]:(state, action)=>{
                state.loading = false;
                state.todos = action.payload
            },
            [deleteTodo.fulfilled]: (state, action) => {
              console.log(action)
              state.loading = false;
              state.todos =  state.todos.filter((ele)=>ele.id !== action.payload);
             console.log(state.todos)
              // const{id} = action.payload
              // //state.users = action.payload;
              // console.log(id);
              // if(id){
              // state.todos = state.todos.filter((ele)=>ele.id !== id);
              // console.log(state.users)
              // }
            },
            [deleteTodo.rejected]: (state, action) => {
              state.loading = false;
              state.error = action.payload;
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
    export default todoSlice.reducer;