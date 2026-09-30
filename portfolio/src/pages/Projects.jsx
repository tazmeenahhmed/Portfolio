import React from 'react'

const projects = [
  { name: "Crafts Basket", description: "", technologies: [], github: "", photo: {}, demo: {}},
  { name: "Zulip", description: "", technologies: [], github: "", photo: {}, demo: {}},
  { name: "Open Energy Dashboard (1)", description: "", technologies: [], github: "", photo: {}, demo: {}},
  { name: "Open Energy Dashboarc (2)", description: "", technologies: [], github: "", photo: {}, demo: {}},
  { name: "Godot Simple Game", description: "", technologies: [], github: "", photo: {}, demo: {}},
  { name: "Spotify Clone", description: "", technologies: [], github: "", photo: {}, demo: {}},
  { name: "Incentivized Habits App", description: "", technologies: [], github: "", photo: {}, demo: {}},
  { name: "Environmental Sensor Project", description: "", technologies: [], github: "", photo: {}, demo: {}},
  { name: "Mancala Project", description: "", technologies: [], github: "", photo: {}, demo: {}},
  { name: "Safe Label", description: "", technologies: [], github: "", photo: {}, demo: {}},
  { name: "CS157A", description: "", technologies: [], github: "", photo: {}, demo: {}},
  { name: "CS171", description: "", technologies: [], github: "", photo: {}, demo: {}},
]

const Projects = () => {
  return (
    <div className='bg-white text-[#1B222C] text-sm rounded-md overflow-y-auto w-[90%] h-[95%]'>
      <div className='px-6 pt-6'>
        <h3 className='font-bold text-xl text-nowrap text-[#A38AFF] pb-2 border-b-2 border-[#A38AFF]'>PROJECTS</h3>
      </div>
    </div>
  )
}

export default Projects