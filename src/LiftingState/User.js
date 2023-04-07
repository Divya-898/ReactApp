import React from 'react'

function User(props) {
   const data ="divya tiwari"
  return (
    <div>
      {/*//with parent to child
      <h2>User Component: {props.name} </h2>
      <button>click me</button>*/}
      {/* child to parent */}
      <button onClick={() => props.alert(data)}>click me</button>
    </div>
  )
}

export default User
