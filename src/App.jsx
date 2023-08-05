import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Contact from './component/Contact'
import Create from './component/Create'
import Edit from './component/Edit'




const App = () => {
  return (
    <div className='container mx-auto my-5'>
    <Routes>
      <Route  path='/' element={<Contact />} />
      <Route  path='/create' element={<Create />} />
      <Route  path='/edit/:id' element={<Edit />} />

    </Routes>
    </div>
  )
}

export default App