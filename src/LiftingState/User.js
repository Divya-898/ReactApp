import React from 'react'

function User(props) {
   const data ={name:"divya tiwari",
                email:"tiwaridiv2206"
}
  return (
    <div>
      {/*//with parent to child
      <h2>User Component: {props.name} </h2>
      <button>click me</button>*/}
      {/* child to parent */}
      <h1>hi divya</h1>
      <button onClick={() => props.alert(data)}>click me</button>
    </div>
  )
}

export default User
