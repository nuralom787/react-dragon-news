import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Main from './Components/Main/Main'
import AuthProviders from './Components/Providers/AuthProviders'
import NewsDetails from './Components/NewsDetails/NewsDetails'
import PrivetRoute from './Components/PrivetRoute/PrivetRoute'

function App() {

  return (
    <>
      <AuthProviders>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main></Main>}>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/news/:id' element={<PrivetRoute><NewsDetails></NewsDetails></PrivetRoute>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/register' element={<Register></Register>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProviders>
    </>
  )
}

export default App
