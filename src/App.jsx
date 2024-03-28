import React, { useEffect, useState, useReducer } from 'react'
import Loading from './Components/Loading';
import Toast from './Components/Toast/Toast';



const initialState = {
toast: {type: 'info', message:''},
title: '',
postId: 1,
loading: true

}


function reducer(state,action){ // state mitone harchi bashe ye adad ya obj
  switch (action.type) { // action ham structure va nahve vorodi bastegi be ma dare ke bhtre ghardad dashte bashim.
    case'get-post-success': 


return (
  {
    ...state, // harchi hast avalesh gharar bede baghi mavared overwrite kon
    toast: {type: 'info', message:action.message},
    title: action.title, // ghardad inke age dakhel ation ya payload ya x gharar dadin dar dakhel hamon gharar bedin bara tamizi kar .
    // postId: 1, chon taghiresh nadadim nabayad inja bashe mitonim ba spirit kardan maghadri ghabli bedast biarim.
    loading: false
  }
)

case 'get-post-request':
  return {
    ...state,
    postId: action.postId,
    loading: true
  };



  
    
    default:
      break;
  }
  }





export default function App() {
 
const[{postId, toast,title, loading}, dispatch]=useReducer( reducer,initialState) // destructing baraye inke tedad kame estefade mikonim mitonestim az state estefade konim ke dar in sorat bayad maghadir pain ba state.postid ... replace mikardim.


useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(response => response.json())
  .then (post =>{
    dispatch({
      type : 'get-post-success',
      title:post.title,
      message: `post with id ${postId} loaded`
    })
    
})
}, [postId])


function handleLoading(e){


 dispatch({
 type : 'get-post-request',
postId:  e.target.value

 }) 
} 

  return (
<div>

  <div>
    <label>Post Id :</label>
    <input value={postId} onChange={ handleLoading} type='number' /> 
  
  </div>
<div>
{loading ?<Loading /> : <h1>{title}</h1>}


</div>

<Toast type={toast.type} message={toast.message}/>
    </div>
  )
}
