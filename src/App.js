
import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from './route-demo/Home';
import Contact from './route-demo/Contact';
import About from './route-demo/About';
import Navbar from './route-demo/Navbar';
import PageNotFound from './route-demo/PageNotFound';
import Products from './route-demo/Products';
import Shirts from './route-demo/Shirts';
import Jeans from './route-demo/Jeans';
/*import Condition2 from './conditionstate/condition2';
import Condition1 from './conditionstate/condition1';
import CssStylesheet from './stylecomponent/CssStylesheet';
import ModuleStylesheet from './stylecomponent/ModuleStylesheet';
import ModuleStylesheet1 from './stylecomponent/ModuleStylesheet1';
//import Payment from './Components/payment'
//import Score from './Components/score'
//import AddPayment from './Components/addPayment';
*/
//import Validation from './LoginValidate/Validation';

export function App() {
  const navigate = useNavigate();
  //navigate to single event handler
  /*const navigateHandle = () =>{
    navigate('/about')
  }*/
  //navigate to multiple  url
  /*const navigateTo = (url) =>{
    navigate(url)
  }*/
  //navigate based on condition
  const navigateToWhere = () =>{
    let name = 'Adil';
    if(name === 'Adil'){
      navigate('/about');
    }
    else{
      navigate('/contact')
    }
  }
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/*nested route */}
      <Route path='/product' element={<Products/>}>
      <Route path='shirts' element={<Shirts/>}/>
      <Route path='jeans' element={<Jeans/>}/>
      </Route>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    {/*<button onClick={()=> navigate('/about')}>About</button>
    <button onClick={()=> navigateHandle()}>About</button>
    <button onClick={()=> navigate('/contact')}>Contact</button>
    <button onClick={()=> navigateTo('/about')}>About</button>
    <button onClick={()=> navigateTo('/contact')}>Contact</button>*/}
    <button onClick={()=> navigateToWhere('/contact')}>click me</button>
    <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
//without jsx
/*
const name = "divya";
if(name === "divya"){
  return <Condition1/>
}
else{
  return <Condition2/>
}*/
//with jsx
/*const name = "divya";
let data;
if(name === "divya"){
  data = <Condition1/>
}
else{
  data = <Condition2/>
}
return(
  <div>
    {data}
  </div>
)*/
//with logical operator jsx
/*const name = "divya";
return (
  <div>
    {name === "divya" && <h1>hello divya</h1>}
  </div>
)*/
//ternary with jsx
/*const name = "divya"
return (
  <div>
{ name === "divya" ? <Condition1 />: <Condition2/>}
<CssStylesheet check={false}/>
<ModuleStylesheet/>
<ModuleStylesheet1/>
</div>
)*/

  /*return (
    <>
   <div className="main-wrapper">
   <Score/>
<Payment/>
</div>
<AddPayment/>
   </>
  );*/
}

//export{App, App2}
//export default App;
