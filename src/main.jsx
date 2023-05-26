import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App'
import { Provider } from './components/Context'
import { PrivateRoutes } from './components/PrivateRoutes'
import { LoginPage } from './components/LoginPage'
import { Homepage } from './components/Homepage'
import { MainApp2 } from './components/MainApp2'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <BrowserRouter>
      <MainApp2/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoutes children={<Homepage />} />}>
            <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
