import React from 'react'
import Student1 from './Student1'

function Student() {
   //const students = ["neha","nidhi","Zain"];
   //let studentName =  students.map((std ,index) => <li key={index}>{std}</li>)
    //const number = [2,4,6,8]
    //list of object
    const students = [
        {    id:1,
            name:"divya",
            age:23,
        },
        {    id:2,
            name:"kumar",
            age:22,
        },
        {   id:3,
            name:"neha",
            age:27,
        }
    ]
  return (
    <div>
  {/* {<ul>{studentName}</ul>}
    {students.map((std ,i) => <h1 key={i}>{std}</h1>)}
    {number.map((num ,i) => <h1 key={i}>{num}</h1>)}*/}
     {students.map(std => <Student1 key={std.id}  st={std}/>)}
    </div>
  )
}

export default Student
