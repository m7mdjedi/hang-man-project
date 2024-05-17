import React from 'react'
import LetterItem from './LetterItem';
const lettersAr:string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const Letters = () => {
  return (
  <div className='w-[70%] flex flex-wrap justify-center items-center '> 
    { 
        lettersAr.map(ele=><LetterItem key={ele} value={ele}/>)
    } </div>
  )
}

export default Letters
