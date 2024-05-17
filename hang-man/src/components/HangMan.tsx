
import {useSelector} from 'react-redux'
import type { RootState } from '../store/store';


const HangMan = () => {
    const counter = useSelector((state: RootState)=>state.game.counter);
  return (
    <div className='flex w-full flex-col items-center '>
      <div className={`w-[150px] ml-[146px] h-[40px] relative flex flex-col justify-end  border-4 border-black border-b-0 `}> 
        <div  className={`w-[50px] h-[50px] rounded-[50%] absolute bottom-[-50px] right-[-28px] border-2 border-black  ${(counter>=1)?"opacity-100":"opacity-0"}`}></div>
        <div   className={`w-[5px] h-[100px] absolute bottom-[-150px] right-[-5px] bg-black ${(counter>=2)?"opacity-100":"opacity-0"}`}></div>
        <div   className={`w-[60px] h-[3px] bg-black absolute bottom-[-80px] right-[-55px] -rotate-45 ${(counter>=3)?"opacity-100":"opacity-0"}`}> </div>
        <div   className={`w-[60px] h-[3px] bg-black absolute bottom-[-80px] right-[-10px] rotate-45 ${(counter>=4)?"opacity-100":"opacity-0"}`}> </div>
        <div   className={`w-[60px] h-[3px] bg-black absolute bottom-[-170px] right-[-55px] rotate-45 ${(counter>=5)?"opacity-100":"opacity-0"} `}> </div>
        <div  className={`w-[60px] h-[3px] bg-black absolute bottom-[-170px] right-[-10px] -rotate-45 ${(counter>=6)?"opacity-100":"opacity-0"}`}> </div>
      </div>
      <div className='h-[250px]  self-center w-[4px] bg-black'> </div>
      <div className='w-[200px] h-[6px] bg-black'> </div>
    </div>
  )
}

export default HangMan
