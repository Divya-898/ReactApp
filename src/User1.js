import React from 'react'

class User1 extends React.Component {
  render() {
    console.log(this.props)
    //<div>Id: {this.props.params.id}</div>
      return (
       
        <div>
          <h1>Users</h1>
         
        </div>
    )
  }
}
export default User1