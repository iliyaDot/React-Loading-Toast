import React, { useEffect, useState } from 'react'
import Loading from './Components/Loading';
import Toast from './Components/Toast/Toast';





export default function App() {

const [toast ,  setToast]=useState({type: 'info', message:''}) // for me : bara inke information dar yekjaie zakhire konim az usestate estefade kardim va ghesmat pain
const [title ,setTitle]= useState('')
const [postId ,setPostId]= useState(1)
const [loading ,setLoading]= useState(true) // baraye inke namayesh dade shavad loading ya nashavad


useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(response => response.json())
  .then (post =>{setTitle(post.title)
   setLoading(false)
})
}, [postId])

function handleLoading(e){
  setPostId(e.target.value)
  setLoading(true)
} // zamani ke request dade shod loading namayesh dade she va vaghti response shod dge javab dade nashe 

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

// baraye <input value={postId} onChange={(e)=>setPostId(e.target.value)} type='number' /> 
// state tarif kardim ke $ optimize she ke hardafe avaz she matni ke az json migirim ro