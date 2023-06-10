import { Avatar, CardHeader, IconButton } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

function SelectedUserName({ user }) {
  //console.log(props)
  //const [user, setuser] = useState({});
  const [username, setUserName] = useState("");
  // const getdata = () => {
  //   fetch(`http://localhost:3500/users/${props}`)
  //     .then((response) => response.json())
  //     .then((result) => setuser(result))
  //     .catch((error) => console.log("error", error));
  // };
  var options = { year: "numeric", month: "long", day: "numeric" };
  const currentDate = new Date();
  const dateFormate = currentDate.toLocaleDateString("en-US", options);
  //console.log(user.id);
  useEffect(() => {
    //getdata();
  }, []);
  const data = (user) => {
    if (!user.name) {
      return true;
    }
    const x = user.name;
    var nameparts = [];
    nameparts = x.split(" ");
    var initials =
      nameparts[0].charAt(0).toUpperCase() +
      nameparts[1].charAt(0).toUpperCase();
    setUserName(initials);
  };
  useEffect(() => {
    data(user);
  }, [user]);

  return (
    <div>
      
        <>
          <CardHeader sx={{padding: "16px 9px 0px"}}
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                <p>{username}</p>
              </Avatar>
            }
            action={<IconButton aria-label="settings"></IconButton>}
            title={user.name}
            subheader={dateFormate}
          />
        </>
      
    </div>
  );
}
export default SelectedUserName;
//    const getdata1 =() => {
//     fetch(`http://localhost:3500/users/{user}`)
//       .then((response) => response.json())
//       .then((result) => setuser(result)
//       )
//       .catch((error) => console.log("error", error));
//   };
//   useEffect(() => {
//     getdata1();
//    }, []);
//console.log(initials)
{
  /* var postname = post.name;
      const toInitials = str => str
   .replace(/[^A-Z]/g, "") 
   .concat(str.charAt(1).toUpperCase()) 
   .substring(0, 2); 
    var w;
    var user =(`${toInitials(w)}`)
var userName =[postname].forEach(w => {
   user=(`${toInitials(w)}`)
}); */
}
{
  /* useEffect(() => {
      const controller = new AbortController()
  
      fetch(`http://localhost:3500/users/${props}`, {
          signal: controller.signal,
      })
          .then(res => res.json())
          .then(json => setuser(json.title))
          .catch(error => console.error(error.message))
  
      return () => controller.abort()
  }, [])
      
*/
}
