
import WordLetter from './WordLetter';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

const Word = () => {
  const word = useSelector((state: RootState)=>state.game.word);

  return (
        <div className='flex m-10 gap-5'>{ 
            word.map((ele,index)=><WordLetter key={index} value={ele}/>)
        } </div>
  )
}

export default Word
