import Homepage from './routes/homepage'
import Register from './routes/Register'
import * as React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

const router = createBrowserRouter ([
    {
        path: "/",
        element : <Homepage/>
}, {
    path:"/register",
    element: <Register/>
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router = {router}/>
    </React.StrictMode>
    
)
