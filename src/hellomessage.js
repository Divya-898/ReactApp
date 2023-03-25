import React from "react";
function hellomessage(props){
    return(
        <>
     <h1>name= {props.name}</h1>
     <h1>age= {props.age}</h1>
     {props.children}
     </>
);
}
export default hellomessage;