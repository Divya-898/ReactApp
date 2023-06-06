import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const showPost = createAsyncThunk(
    "showPost",
   
    async (userId, { rejectWithValue }) => {
      const response = await fetch(
       `http://localhost:3500/posts?userId=${userId}`
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
  
//create Todo
export const createPost = createAsyncThunk("createPost", async(data, {rejectWithValue})=>{
    const response = await fetch("http://localhost:3500/posts",{
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
// export const updateUser = createAsyncThunk(
//     "updateUser",
//     async (data, { rejectWithValue }) => {
//       console.log("updated data", data);
//       const response = await fetch(
//         `http://localhost:3500/todos/${data.id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data)
//         }
//       );
  
//       try {
//         const result = await response.json();
//         return result;
//       } catch (error) {
//         return rejectWithValue(error);
//       }
//     }
//   );

// //delete todoos
// export const deleteUser = createAsyncThunk(
//   "deleteUser",
//   async (id, { rejectWithValue }) => {
//     const response = await fetch(
//       `http://localhost:3500/todos/${id}`,
//       { method: "DELETE" }
//     );

//     try {
//       const result = await response.json();
//       console.log(result);
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

    const postSlice = createSlice({
        name:"post",
        initialState: {
            userPosts: [],
            // edit:[],
        loading: false,
        error: null,
        },
        extraReducers: {

            [createPost.pending]:(state)=>{
                state.loading = true;
            },
            [createPost.fulfilled]:(state, action)=>{
                console.log(action)
                state.loading = false;
                state.userPosts.push(action.payload)
            },
            [createPost.rejected]:(state, action)=>{
                state.loading = false;
                state.userPosts = action.payload
            },
            [showPost.pending]:(state, action)=>{
                state.loading = true;
            },
            [showPost.fulfilled]:(state, action)=>{
                state.loading = false;
                state.userPosts = action.payload
            },
            [showPost.rejected]: (state, action) => {
                state.loading = false;
                state.error = action.payload;
              },
              
            //   [updateUser.pending]:(state)=>{
            //     state.loading = true;
            // },
            // [updateUser.fulfilled]:(state, action)=>{
            //     state.loading = false;
            //     state.posts=state.todos.map((ele)=>
            //     (ele.id === action.payload.id ? action.payload : ele)
               
            //     )
                
            // },
            // [updateUser.rejected]:(state, action)=>{
            //     state.loading = false;
            //     state.todos = action.payload
            // },
            // [deleteUser.fulfilled]: (state, action) => {
            //   console.log(action)
            //   state.loading = false;
            //   state.todos =  state.todos.filter((ele)=>ele.id !== action.payload);
            //  console.log(state.todos)
            //   // const{id} = action.payload
            //   // //state.users = action.payload;
            //   // console.log(id);
            //   // if(id){
            //   // state.todos = state.todos.filter((ele)=>ele.id !== id);
            //   // console.log(state.users)
            //   // }
            // },
            // [deleteUser.rejected]: (state, action) => {
            //   state.loading = false;
            //   state.error = action.payload;
            // },
        }
    })
    //   try {
    //     const result = await response.json();
    //     console.log(result);
    //     return result;
    //   } catch (error) {
    //     return rejectWithValue(error);
    //   }
    export default postSlice.reducer;