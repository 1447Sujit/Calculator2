import "./App.css";
import InputBox from "./Components/InputBox";
import Button from "./Components/Button";
import { useState } from "react";

function App() {

  const [calVal, setCalVal] = useState("")

  const onButtonClick = (buttonText)=>{
        if (buttonText === "AC") {
          setCalVal("")
        }else if (buttonText === "=") {
          const result = eval(calVal)
          setCalVal(result)
        }else if (buttonText === "DEL") {
          const del = calVal.substring(0,calVal.length-1)
          setCalVal(del)
          }else {
          const newDisplayValue = calVal + buttonText
          setCalVal(newDisplayValue)
        }
  }


  return (
    <div className="calculator">
      <h1 className="heading">Calculator</h1>

      <InputBox calVal={calVal}></InputBox>
      <Button onButtonClick={onButtonClick}></Button>
    </div>
  );
}

export default App;
