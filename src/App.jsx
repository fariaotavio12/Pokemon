
import {
  BrowserRouter,
  Routes,
  Route,
  
} from 'react-router-dom'
import Home from './Pages/Home'
import Regioes from './Pages/Regioes'
import Tipos from './Pages/Tipos'
import Notfund from './Pages/notFund'
import Geracoes from './Pages/Geracoes'
import Navbar from './Pages/navbar'

function App() {

  return (
    <>
    <div className='flex'>
      <div className='fixed w-full'>
        <Navbar/>
      </div>
      <div className='mt-10 w-full h-screen'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Regioes' element={<Regioes />}></Route>
            <Route path='/Tipos' element={<Tipos />}></Route>
            <Route path='*' element={<Notfund />}></Route>
            <Route path='Geracoes' element={<Geracoes />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>  
    </>
  )
}

export default App
