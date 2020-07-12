import React, { useState, useEffect } from 'react';

import {All_DATA} from './store/action/actionTypes'
import { connect } from 'react-redux'


function Other(props) {

  const [state, setState] = useState({})

  const updateState = (e) => {
    state[e.target.id] = e.target.value
    setState({ ...state })
  }



  const getvalue = (() => {
    props.sendReducersHundlet(state)
  })



  return (
    <div className="App">
      <center>

        <h1>Professtional way to get value </h1>
         Form store
        <h3> Name{props.data.name}</h3>
        <h3> Password{props.data.upassword}</h3>
        <h3> Email{props.data.uEmail}</h3>


        <h3>Form</h3>
  user name <input type="txt" id="name" value={state.name} onChange={updateState} />
   password<input type="txt" id="upassword" value={state.upassword} onChange={updateState} />
    Email<input type="txt" id="uEmail" value={state.uEmail} onChange={updateState} />
   address<input type="txt" id="address" value={state.address} onChange={updateState} />

        <button onClick={getvalue}> get valeu</button>


      </center>


    </div>
  );
}

const mapStateToProps = (state) => {
  return { data: state }
}


const dispatchStatetopProps = (dispatch) => {
  return {
    sendReducersHundlet: (state) => { dispatch({ type: All_DATA, payload: state }) }
  }
}

export default connect(mapStateToProps, dispatchStatetopProps)(Other);







//  const mapStateToProps=state=>({myvalue:state})
// export default connect(mapStateToProps)(Other);














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


