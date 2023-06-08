import { useEffect, useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing.page'
import ErrorPage from './pages/Error404.page'
import Auth from './pages/auth/Auth'
import Home from './pages/user/home/Home.page'
import Dashboard from './pages/user/dashboard/Dashboard.page'
import Mint from './pages/user/mint/Mint.page'
import Governance from './pages/user/governance/Governance.page'
import Feed from './pages/user/home/Feed'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <ErrorPage />
  },
  {
    path: '/register',
    element: <Auth />,
    errorElement: <ErrorPage />
  },
  {
    path: '/user',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'feed',
        element: <Feed />
      },
      {
        path: 'mint',
        element: <Mint />
      },
      {
        path: 'governance',
        element: <Governance />
      }
    ]
  }
])

export function App() {
  const [isReady, setIsReady] = useState(false)
  const { isConnected } = useAccount()

  useAccount({
    onDisconnect() {
      document.location.href = '/'
    }
  })

  useEffect(() => {
    if (isConnected || document.location.pathname === '/') {
      setIsReady(true)
    } else {
      document.location.href = '/'
    }
    console.log('Ready: ', isReady)
  }, [isConnected])



  return (
    <>
      {isReady && (
         <RouterProvider router={router} />
      )}
    </>
  )
}

/* 
<Routes>
  <Route path='/' element={<Landing />} />
  <Route path='register' element={<Register />} />
  
  <Route path='/user' element={<Home />} />
    <Route index path='/user' element={<Home />} />
    <Route path='home' element={<Home />} />
    <Route path='dashboard' element={<Dashboard />} />
    <Route path='mint' element={<Mint />} />
    <Route path='governance' element={<Governance />} />
  <Route/>

  <Route path='*' element={<Error404/>}/>
</Routes> */
