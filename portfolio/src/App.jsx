import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx';
import './App.css'

function App() {

  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='h-screen flex p-2 bg-[#D7CCFF]'>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default App
