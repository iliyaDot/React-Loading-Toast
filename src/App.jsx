import React, { useEffect, useState } from 'react'
import Loading from './Components/Loading';
import Toast from './Components/Toast/Toast';





export default function App() {

const [toast ,  setToast]=useState({type: 'info', message:'heloo'}) // for me : bara inke information dar yekjaie zakhire konim az usestate estefade kardim va ghesmat pain
const [title ,setTitle]= useState('')
const [postId ,setPostId]= useState(1)


useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(response => response.json())
  .then (post =>setTitle(post.title))
}, [postId])

  return (
//     //to in version dare bug mikhure age laoding hamntori bashe matn json neshon nmide pas bayad barash shart bashe //
// {/* <Loading /> */} 
<div>

  <div>
    <label>Post Id :</label>
    <input value={postId} onChange={(e)=>setPostId(e.target.value)} type='number' /> 
  
  </div>
<div>
<h1>{title}</h1>

</div>

<Toast type={toast.type} message={toast.message}/>
    </div>
  )
}

// baraye <input value={postId} onChange={(e)=>setPostId(e.target.value)} type='number' /> 
// state tarif kardim ke $ optimize she ke hardafe avaz she matni ke az json migirim ro