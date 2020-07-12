import React ,{useState, useEffect}from 'react';
  import Other from '../src/other'
  import { PersistGate } from 'redux-persist/integration/react'
   import store from './store/store'
 import {Provider } from 'react-redux'
  import NewComponet from '../src/newcomponet'


 
function App() {

  return (
   <>

     <Other/>
 
   </>
 
 
  );
}

export default App;














// const [state,setState]= useState({})

// const  updatestate=(e)=>{
//    state[e.target.id]=e.target.value;
//      setState({...state})
//  }

//  const submitFunct=()=>{
// console.log("totelState",state)
//  }


{/* <input type="txt" id="uname" value={state.uname} onChange={updatestate}/>
<input type="password" id="upass"  value={state.upass} onChange={updatestate}/>
  <select   id="city"onChange={updatestate}>
 <option value="">--city--</option>
 <option value="Fsd ">Faisalbad</option>
 <option value="Isl">Islamabad</option>
 <option value="Laho ">Lahore</option>





  </select>


<button   onClick={submitFunct} >Submit</button> */}


 