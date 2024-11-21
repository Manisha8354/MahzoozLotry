import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Client/Home.jsx'
import Youtube from './components/Client/Youtube.jsx'
import Faqs from './components/Client/Faqs.jsx'
import Login from './components/Client/Login.jsx'
// import Cart from './components/Client/howToWithdraw/Cart.jsx'
// import CardDetail from './components/Client/howToWithdraw/CartDetail.jsx'

let router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
    <Route path='/youtube' element={<Youtube/>}/>
    {/* <Route path='/cart' element={<Cart/>}/>
    <Route path='/cartdetail' element={<CardDetail/>}/> */}
    <Route path='/faq' element={<Faqs/>}/>
    <Route path='/login' element={<Login/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
