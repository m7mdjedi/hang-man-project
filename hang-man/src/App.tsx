import { useDispatch } from "react-redux";
import HangMan from "./components/HangMan";
import Letters from "./components/Letters";
import Word from "./components/Word";

import { setWord } from "./store/wordSlice";
import words from "./wordList.json"
function App() {
  const dispatch = useDispatch(); 
  dispatch(setWord(words[Math.floor(Math.random()*words.length)].toUpperCase())) ;
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-xl mb-[10px] md:mb-5">refresh the page to try again</h1>
      <HangMan />
      <Word />
      <Letters />
    </div>
  );
}

export default App;
