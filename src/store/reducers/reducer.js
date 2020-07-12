 import {All_DATA} from '../action/actionTypes'

 export const getvalue =(state=[],action)=>{

     debugger;
     if(action.type=All_DATA)
     {
           return{

              state,
              ...action.payload
           }

     }


 }