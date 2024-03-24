import React, { useEffect, useState } from 'react'
import Loading from './Components/Loading';
import Toast from './Components/Toast/Toast';





export default function App() {

const [toast ,  setToast]=useState({type: 'info', message:''}) // for me : bara inke information dar yekjaie zakhire konim az usestate estefade kardim va ghesmat pain
const [title ,setTitle]= useState('')
const [postId ,setPostId]= useState(1)
const [loading ,setLoading]= useState(true) // baraye inke namayesh dade shavad loading ya nashavad


function userAction(type, payload){ // *baraye har kodom baayd payload motakheses khudesh dashte bashim
switch (type) {
  case'get-post-success': // *in baraye useeffect code haye ke neveshtime hamon kar daram mikonam

  setTitle(payload.title) // *inja mostaghiman nmitavan paylaod pass dad chon payintar meghdari ke pass dade shode ye obj hast.
  setLoading(false)

  setToast({type:'info', message:payload.message}) 
    break;
case 'get-post-request':

setPostId(payload)
setLoading(true)


  default:
    break;
}
}
useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(response => response.json())
  .then (post =>{
    
    userAction('get-post-success',
    {
      title:post.title,
      message: `post with id ${postId} loaded`
    }
    ) // *ma darinja ye title va ye id niaz darim nmitonim mostaghiman vared konim pas be ye obj niaz darim

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
