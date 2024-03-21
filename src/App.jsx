import React, { useState } from 'react'
import Loading from './Components/Loading';
import Toast from './Components/Toast/Toast';





export default function App() {

const [toast ,  setToast]=useState({type: 'info', message:'heloo'}) // for me : bara inke information dar yekjaie zakhire konim az usestate estefade kardim va ghesmat pain

  return (
    <div>
<Loading />
<Toast type={toast.type} message={toast.message}/>
    </div>
  )
}