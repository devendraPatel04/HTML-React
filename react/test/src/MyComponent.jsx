const MyComponent = (props) =>{
    const message = "hellow there mate";
    return (
        <>
            <div>{message} your details are : {props.name} age = {props.age}</div>
        </>
    );
}

export default MyComponent;