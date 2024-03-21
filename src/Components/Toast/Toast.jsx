// import React, { useEffect } from 'react'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';

// export default function Toast({type='info', message=''}) {

//     useEffect(() => {
// if(message){
//     toast[type](message) // for me : type va info vared kard to destructring va bad to app.jsx vared kard to div onaro nevesht bad 
//                         // useeffect zad if nevesht ke if dakhelesh message bashe va bad toast type message nevesht ke noesh moshakash beshe .
// }
//     },  [type, message]  )

//     return (
//         <ToastContainer
//         position="bottom-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
    
//         />
//     )
// }
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Toast({ type = 'info', message = '' }) {

    useEffect(() => {
        if (message) {
            toast[type](message)
        }

    }, [type, message])

    return (
        <ToastContainer
            position="bottom-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    )
}
