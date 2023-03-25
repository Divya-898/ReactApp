
import React ,{useState } from "react";

function Hoc(){
    return(
        <div>
            <h1>Hoc</h1>
            <MainRed cmp={Counter}/>
            <MainGreen cmp={Counter}/>
        </div>
    );
}

function MainRed(props){
    return <h2 style={{backgroundColor:"red",width:100}}><props.cmp/></h2>
}
function MainGreen(props){
    return <h2 style={{backgroundColor:"green",width:100}}><props.cmp/></h2>
}

function Counter(){
    const [count,setCount]=useState(0)
    return<div>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count+1)}>Update</button>
    </div>

}
export default Hoc;