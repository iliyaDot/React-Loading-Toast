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
 
const[state, dispatch]=useReducer( userAction,initialState)


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
