import {useState} from "react";
const NewCompWithProps = prop =>{
    const {name ,age} = prop;
    const [count,setCount] = useState(1); //creating use state hook


    const increaseCount = () => {
        setCount(count+1);
    };

    return (
        <div>
            <h2>name : {name}</h2>
            <h2>age : {age}</h2>
            <h2>Current Count is : {count}</h2>
            <button onClick={increaseCount}>Press me</button>
        </div>
    );
};

export default NewCompWithProps;