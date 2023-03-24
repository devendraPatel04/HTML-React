import React from "react";

class ClassComponent extends React.Component{
    constructor(props){
        //1
        super(props);
        console.log("constructor is printed");
        this.state = { count:2 };
        //inherit parent props and set initial state
    }

    changeCount = () => {
        this.setState({
            count:this.state.count+1,
        });
    };

    static getDerivedStateFromProps(){
        //2
        console.log("getDerivedStateFromProps is Printed");
        return <><p>hello</p></>
        //if we want to pass something to render function
    }

    componentDidMount(){
        //4
        console.log("ComponentDidMount() is printed");
        //when the component is mounted
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate() is printed");
        //this is called when the component has re-rendered
        //eg starting a timer
        //api calls
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate() is printed");
        return true;
        //wheather a component should re-render or not. return true/false
    }

    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate() is printed");
        return null;
        //used for comparing the old and new values after update
    }

    render(){
        //3
        //actually printing the jsx
        console.log("render is printed");
        return (
            <div>
                <h1>this is class component</h1>
                <h1>Current count is {this.state.count}</h1>
                <button onClick={this.changeCount}>Change Count</button>
            </div>
        );
    }

    componentWillUnmount(){
        console.log("componentWillUnmount() is printed");
        return true;
        //called before unmount
        //clear all timers event listeners
    }
}

export default ClassComponent;