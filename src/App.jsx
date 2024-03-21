import React from 'react'
import Loading from './Components/Loading';
import Toast from './Components/Toast/Toast';





export default function App() {
  return (
    <div>
<Loading />
<Toast type='info' message='loaded ...'/>
    </div>
  )
}