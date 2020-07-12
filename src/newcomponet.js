 import React from 'react'

  import {connect} from 'react-redux'
  function Newcompoent(props){


  return(
      <div>
        jkb
      </div>

  )
 
  }

   const mapStateToProps =state=>{
       return  state
   }

export default  connect(mapStateToProps)(Newcompoent)