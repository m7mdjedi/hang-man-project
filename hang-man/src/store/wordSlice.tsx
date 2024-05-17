import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
  word: string[];
  solvedWord: string[];
  counter: number;
} = {  word:["M","O","M","A"],solvedWord:[],counter:0};


const gameSlice=createSlice({ 
    name:'game',
    initialState,
    reducers:{ 
     addToSolvedWord:(state,action:PayloadAction<string>)=>{ 
        state.solvedWord=state.solvedWord.concat(action.payload);
     },
     addToCounter:(state)=>{ 
        state.counter+=1;
     },
     setWord:(state , action:PayloadAction<string>)=>{ 
      state.word=action.payload.split('');
     }
    }
}) 

export const {addToCounter,addToSolvedWord , setWord} = gameSlice.actions;
export default gameSlice.reducer;   