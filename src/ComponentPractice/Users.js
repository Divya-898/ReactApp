import React, { useCallback, useEffect, useState } from "react";
import SelectedUsers from "./SelectedUser";
import SelectedUserName from "./SelectedUser";

function Users({ user }) {
  const [userid, setUserID] = useState([]);

  return (
    <div>
      {/* {userid.map((post) => (
       
      ))} */}
      <SelectedUserName user={user}></SelectedUserName>
    </div>
  );
}
export default Users;
{ 
  /* <p>{post.userId}
        {console.log(post.userId)}
        </p> */
}

{
  /* <span>Name:{post.name}</span> */
}

{
  /* <p>Body: {post.body}</p> */
}
