import React, { useContext } from 'react'
import { CustomContext1 } from './MainApp'

function CustomContext() {
    const {users} = useContext(CustomContext1)
  return (
    <div>
    <h1>custom</h1>
    <h1>{users}</h1>
     <CustomContext1.Consumer>
        {users => <b>Users: {users.name}</b>}
      </CustomContext1.Consumer>
    </div>
  )
}

export default CustomContext
