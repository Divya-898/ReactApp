import React from 'react'

function UserName(user) {
    if (user){
    let name = user
    var nameparts = [];
    nameparts = name.split(" ");
    var initials =
      nameparts[0].charAt(0).toUpperCase() +
      nameparts[1].charAt(0).toUpperCase();
      return initials;
    }
}

export default UserName
