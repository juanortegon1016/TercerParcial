import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { LoginPage } from './LoginPage'
import { UserRoutes } from './UserRoutes'

export const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/Login' element={<LoginPage/>}/>
            <Route path='/*' element={
            
            <UserRoutes/>
            } />
        </Routes>
    </div>
  )
}