import React, { useEffect, useState, useReducer } from 'react'
import Loading from './Components/Loading';
import Toast from './Components/Toast/Toast';



const initialState = {
toast: {type: 'info', message:''},
title: '',
postId: 1,
loading: true

}


function userAction(state,action){ // state mitone harchi bashe ye adad ya obj
  switch (action.type) { // action ham structure va nahve vorodi bastegi be ma dare ke bhtre ghardad dashte bashim.
    case'get-post-success': 
  
    setTitle(payload.title) 
    setLoading(false)
  
    setToast({type:'info', message:payload.message}) 
      break;
  case 'get-post-request':
  
  setPostId(payload)
  setLoading(true)
  
  break;
    default:
      break;
  }
  }





export default function App() {
 
useReducer()


useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(response => response.json())
  .then (post =>{
    
    userAction('get-post-success',
    {
      title:post.title,
      message: `post with id ${postId} loaded`
    }
    )
})
}, [postId])


function handleLoading(e){
 userAction('get-post-request',e.target.value) //*payload inja ye value , ye id hsatesh.
} 

  return (
//     //to in version dare bug mikhure age laoding hamntori bashe matn json neshon nmide pas bayad barash shart bashe //
// {/* <Loading /> */} 
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
