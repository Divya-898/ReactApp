import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import FakeCart from "./FakeCart";
import StoreComponent from "./StoreComponent";
import { decode as base64_decode, encode as base64_encode } from "base-64";
import "./StoreStyle.css";
import { LoginContext } from "./FakeLogin";
import { JsonContext } from "../App";
function FakseStore() {
  const { fake } = useContext(JsonContext);
  console.log(fake);
  const navigate = useNavigate();
  const logOutHandler = useCallback(() => {
    //localStorage.clear(temp);
    navigate("/LoggedIn");
  }, []);

  const navigateUser = useCallback((id) => {
    console.log(id);
    //let encodedObject = encodeURIComponent(id);
    // let encoded = base64_encode(id);
    //let en = JSON.stringify(encoded)
    //let decoded = base64_decode(encoded);
    //console.log(typeof(encoded))
    //console.log(typeof(encoded));*/
    //navigate("/store/"+encoded);
    //console.log(id)
    navigate(`/store/${id}`)
  }, []);
  //console.log(document.querySelectorAll('.btn-user'))
  return (
    <>
      <div>
        <div></div>
        <h2>Fake Api Store</h2>
        <button className="Log-out-btn" onClick={logOutHandler}>
          Log Out
        </button>
        <br></br>
        <br></br>
        <div className="container">
          {fake.map((value) => {
            var temp = [value];
            console.log(value.title);
            return (
              <div className="box" key={value.id}>
                <StoreComponent product={value}></StoreComponent>
                <button onClick={()=>navigateUser(value.id)}>add to cart</button>
                {/*<button
                  className="btn-user"
                  id={JSON.stringify(temp)}
                  onClick={navigateUser}
                >
                  add
                </button>

                <button onClick={()=>{
                  var fake1 = setFake([value]);
                 <globalInformation.Provider value={{fake1}}>
                 <FakeCart></FakeCart>
              navigate('/store')
                    
                }}
                >add</button>*/}
              </div>
            );
          })}
        </div>
      </div>
      <useOutlet />
    </>
  );
}
export default FakseStore;

/* <button className='add' id={value} onClick={()=>{
               <button className='add'  onClick={()=>{
               navigate('/store/'+encodedObject);
        
              }}>Add to cart</button>
               
          //navigate('/store',{...temp})
          //console.log(`/store/${temp}`)
         // navigate('/store/'+encodedObject);
          //<FakeCart product={temp} key={value.id} setFake={setFake([value])}/>
      }}> add to cart</button>*/
