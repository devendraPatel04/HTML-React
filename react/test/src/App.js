// import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import square from './helper';
import { cube } from './helper';
import MyComponent from './MyComponent';
import Propss from './Propss';
import NewCompWithProps from './NewCompWIthProps';
import ClassComponent from "./ClassComponent";

function App() {
  const [name, setName] = useState("Dev");
  const [showFunctionComponent, setShowFunctionCompoenent] = useState(false);

  // setTimeout(() =>{
  //   setName(name+"new")
  // },2000 );

  const changeName = () => {
    setName(name + "new");
  }

  const setView = () =>{
    setShowFunctionCompoenent(!showFunctionComponent);
  }

  return (
    <div className="App">
      <div>hello React I m here </div>
      <button onClick={changeName}>Change Name</button>
      {showFunctionComponent && 
        <div>
          <NewCompWithProps name={name} age="13" />
        </div>}
      { !showFunctionComponent &&
        <div>
          <ClassComponent />
        </div>
      }
      <button onClick={setView}>setView</button>
      {/* <p>here my man hehe</p>
      <div>{square(5)}</div>
      <div>{cube(5)}</div>
      <div>
        <MyComponent name="dev" age="22" />
      </div> 
      <p>
        <Propss name="Dev" age="55"/>
      </p>  */}


    </div>
  );
}

export default App;
