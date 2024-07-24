import { Suspense, lazy } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'

// Works also with SSR as expected
const Home = lazy(() => import('./Home'))
const Detail = lazy(()=>import('./Detail'))


function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/:id'} element = {<Detail/>}/>
    </Routes>
    </Suspense>
    </div>
  )
}

export default App
