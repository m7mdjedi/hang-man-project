import React, { useCallback, useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import type { RootState } from '../store/store';
import { addToCounter, addToSolvedWord } from '../store/wordSlice';

const LetterItem:React.FC<{value:string}>= (props)=> {
  const word = useSelector((state: RootState)=>state.game.word);
  const dispatch = useDispatch(); 
  const [status , setStatus] = React.useState(0);
  const escFunction = useCallback((event:KeyboardEvent) => {
    if (event.keyCode === props.value.toUpperCase().charCodeAt(0) ) {
      if(status==0){ 
        if(word.includes(props.value)) { 
            setStatus(1); 
            dispatch(addToSolvedWord(props.value)); 
        }
        else {  
          setStatus(2);
          dispatch(addToCounter());
      }
  }
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);
  const onClickHandler = ()=>{ 
    if(status==0){ 
          if(word.includes(props.value)) { 
              setStatus(1); 
              dispatch(addToSolvedWord(props.value)); 
          }
          else {  
            setStatus(2); 
            dispatch(addToCounter());
        }
    }
  }
  return (
    <div  onClick={onClickHandler} className={`w-[50px] cursor-pointer text-center  font-bold aspect-square rounded-md flex items-center justify-center  text-3xl border-2 border-gray-500  ${(status==2)?"pointer-events-none opacity-65":(status==1)? "bg-blue-500  pointer-events-none": ""}`}>

      {props.value}
    </div>
  )
}

export default LetterItem
