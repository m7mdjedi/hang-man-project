import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import type { RootState } from '../store/store';
import { addToCounter, addToSolvedWord } from '../store/wordSlice';

const LetterItem:React.FC<{value:string}>= (props)=> {
  const word = useSelector((state: RootState)=>state.game.word);
  const dispatch = useDispatch(); 
  const [status , setStatus] = React.useState(true);
  const onClickHandler = ()=>{ 
    if(status){ 
          if(word.includes(props.value)) { 
              setStatus(false); 
              dispatch(addToSolvedWord(props.value)); 
          }
          else {  
            dispatch(addToCounter());
        }
    }
  }
  return (
    <div  onClick={onClickHandler} className={`w-[50px] cursor-pointer text-center rounded-md  text-3xl border-2 border-gray-500 active:bg-blue-500 ${!status?"pointer-events-none opacity-65":""}`}>
      {props.value}
    </div>
  )
}

export default LetterItem
