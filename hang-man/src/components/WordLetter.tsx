import React from "react";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

const WordLetter: React.FC<{ value: string }> = (props) => {
  const sovledWord = useSelector((state: RootState) => state.game.solvedWord);
  const counter = useSelector((state: RootState) => state.game.counter);

  return (
    <div className="flex flex-col ">
      <div className={`w-[40px]  text-3xl text-center ${(sovledWord.includes(props.value)|| counter>=6)?"opacity-100":"opacity-0"} ${(counter>=6)?"text-red-700":"text-black"}`}>{props.value}</div>
      <span className={`w-[40px] border-2 border-dashed ${(counter>=6)?"border-red-700":"border-black"}`} />
    </div>
  );
};

export default WordLetter;
