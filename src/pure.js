import React from "react";

class Pure extends React.PureComponent{
    constructor(){
        super();
        this.state = {
            count:0
        }
    }
    render()
    {
        console.log("check re-rendering")
        return(
            <div className="Pure">
                <h1>Pure component in react {this.state.count}</h1>
                <button onClick={()=>this.setState({count:1})}>update count</button>
            </div>
        )
    }
}
export default Pure;