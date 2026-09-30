import { useState } from 'react'
import { Routes, Route } from 'react-router';
import Sidebar from './components/Sidebar.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import './App.css'

function App() {

  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='h-screen flex p-2 bg-[#D7CCFF]'>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className='flex-1'>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
