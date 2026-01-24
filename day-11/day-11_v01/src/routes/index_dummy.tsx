// import { createFileRoute } from '@tanstack/react-router'
// import logo from '../logo.svg'
// import { useState,useEffect } from 'react';
// import { header } from '../components/header';
// import { sidebar } from '../components/sidebar';
// import { dashboard } from '../components/dashboard';

// export const Route = createFileRoute('/index_dummy')({
//   component: App,
// })

// function App() {
//   const [counter, setCounter] = useState<number>(0)
//   const [name, setName] = useState<string | null | number>('')
//   const [loginData, setLoginData] = useState({
//     username: '',
//     password: '',
//   })
//   const [isAdmin, setIsAdmin] = useState(false)
//   useEffect(() => {
//     if(loginData.username === 'admin' && loginData.password === 'admin') {
//       setIsAdmin(true)
//     } else {
//       setIsAdmin(false)
//     }
//   })

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div>
//         <h3>Counter {counter}</h3>
//         <button type="button" onClick={()=> setCounter(counter+1)}
//         className="bg-black text-white p-2 rounded-lg w-full">Increase</button>
//         <button type="button" onClick={()=> setCounter(counter+-1)}
//         className="bg-black text-white p-2 rounded-lg w-full">Decrease</button>

//         <h3> Hello, {name} !</h3>
//         <input onChange={(event) => setName(event.target.value)}
//         className="p-2 rounded-lg border"/>

//         <h3> Login Form </h3>
//         <input onChange={(event) => setLoginData({...loginData, username:event.target.value})}
//         className="p-2 rounded-lg border"/>
//         <input type="password" onChange={(event) => setLoginData({...loginData, password:event.target.value})}
//         className="p-2 rounded-lg border"/>

//         <h4>{isAdmin ? "Welcome, Master!" : "Welcome, Guest"}</h4>
//       </div>
//     </div>
//   )
// }
