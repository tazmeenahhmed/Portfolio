import React from 'react'
import {Video, Image, File, FolderGit2} from 'lucide-react'
import craftsbasketdemo from '../assets/craftbasketdemo.mp4'
import zulipdemo from '../assets/zulipdemo.mp4'
import oedseconddemo from '../assets/oedseconddemo.mp4'
import spotifydemo from '../assets/spotifydemo.mp4'
import simplegamedemo from '../assets/simplegamedemo.mp4'
import habitsdemo from '../assets/habitsdemo.mp4'
import mancalademo from '../assets/manacalademo.mp4'

const projects = [
  { name: "Zulip", date: "Summer 2026", description: "Contributed to Zulip, an open source chat workspace that divides conversations into ‘topics’ to make conversation flow easier to follow. Specifically, implemented a TypeScript notification (issue  #14433) enabling desktop permission verification with a single click", technologies: ["Typescript", "Docker"], github: [{ label: "#14433", url: "https://github.com/zulip/zulip/pull/39758" }], blog: "https://www.linkedin.com/posts/tazmeenahmed_this-summer-i-contributed-to-zulip-under-ugcPost-7496629485539213312-Fbec/?rcm=ACoAAFQJ50gBQZiVjj3pS43SfL2l8jiQ1E2OxD4", demo: {zulipdemo}},
  { name: "Open Energy Dashboard", date: "Oct 2025 - June 2026", description: "Contributed to Open Energy Dashboard, an open source project that visualizes energy data in a user-friendly way to its numerous individual and company users. Resolved two unit testing issues (#962 & #1439), both merged into the main codebase, writing TypeScript tests for the Node.js server’s API that compare actual versus expected data to ensure OED’s group meters deliver accurate information to its users.", technologies: ["TypeScript", "Node.js", "Docker"], github: [{ label: "#962", url: "https://github.com/OpenEnergyDashboard/OED/pull/1549" }, { label: "#1439", url: "https://github.com/OpenEnergyDashboard/OED/pull/1588" }], blog: "https://www.linkedin.com/pulse/implementing-test-case-open-energy-dashboard-tazmeen-ahmed-dzm2e/", demo: {oedseconddemo}},
  { name: "Crafts Basket", date: "Summer 2026", description: "Built a responsive front‑end for craft projects and blog, adding an interactive carousel and modal dialogs. The website divides the crafts into craft type, and each craft is accompanied by different-angle photos, inspirations, and a description. ", technologies: ["HTML", "CSS", "JS"], github: [{ label: "GitHub", url: "https://github.com/tazmeenahhmed/CraftsBasket" }], demo: craftsbasketdemo},
  { name: "Spotify Clone", date: "July 2026", description: "Built a Spotify clone with React and Tailwind CSS featuring a functional audio player (play/pause, next/previous, progress tracking) and dynamic, album-art-driven UI.", technologies: ["React", "Tailwind CSS"], github: ["https://github.com/tazmeenahhmed/SpotifyClone"], demo: {spotifydemo}},
  { name: "Environmental Sensor Project", date: "Spring 2025", description: "Built a self-contained device with a Raspberry Pi 4 which collects temperature and humidity data onto a database server. The user is also able to use a menu-driven text-based program to query the database for information from a particular day", technologies: ["C", "MySQL", "Raspberry Pi 4"], github: ["https://github.com/tazmeenahhmed/EnvironmentSensorProject"], demo: "https://youtu.be/1e7-g0YBA3Y"},
  { name: "Incentivized Habits App", date: "December 2025 - Present", description: "Developed a habit-tracking web application that uses simulated monetary tracking to encourage user-defined habit completion and promote better spending usage with an integrated wishlist.", technologies: ["CSS", "HTML", "JS"], github: ["https://github.com/tazmeenahhmed/IncentivizedHabitsApp"], demo: {habitsdemo}},
  { name: "Mancala Project", date: "Fall 2025", description: "Led a group of 3 other students in building a virtual game program using the MVC design pattern in conjunction with Java GUI components to let two players choose a board design, number of stones, and play a game of Mancala until a winner is found", technologies: ["Java"], github: ["https://github.com/tazmeenahhmed/MancalaProject"], demo: {manacalademo}},
  { name: "Godot Simple Game", date: "July 2026", description: "Experimented with Godot engine and created a simple one-level sidescroller game.", technologies: ["Godot", "GodotScript"], github: ["https://github.com/tazmeenahhmed/GodotSimpleGame"], demo: {simplegamedemo}},
  { name: "Safe Label", date: "In progress", description: "Building a website with a team of 5 that lets users pick an allergen or dietary restriction to avoid, scan a food label, and see flagged concerns with the reasons behind each warning.", technologies: [], github: [], photo: {}, demo: {}},
  { name: "Database Website", date: "In progress", description: "Implementing a functioning web-based database application with a team 5.", technologies: ["MySQL", "Python", "Flask", "HTML", "CSS", "JS"], github: [], photo: {}, demo: {}},
]

const circleStyle = 'w-10 h-10 rounded-full bg-[#A38AFF] text-white flex items-center justify-center overflow-hidden';

const LinkCircle = ({ href, label, children }) => {
  if (!href) {
    return (
      <span aria-label={`${label} (not available yet)`} title={`${label} not available yet`} className={`${circleStyle} opacity-40 cursor-not-allowed`}>
        {children}
      </span>
    )
  }

  return (
    <a href={href} target='_blank' rel='noreferrer' aria-label={label} title={label} className={`${circleStyle} hover:opacity-80`}>
      {children}
    </a>
  )
}

const ProjectCard = ({ project }) => {
  const githubLinks = project.github.map((link) => (typeof link === 'string' ? { label: 'GitHub', url: link } : link));
  const hasDemo = typeof project.demo === 'string';

  return (
    <div className='bg-[#D7CCFF] rounded-lg min-h-60 flex flex-col'>
      <div className='p-6 gap-4 flex flex-col flex-1'>
        <div className='w-full pb-2 border-b-2 border-white text-white'>
          <h3 className='font-bold text-xl'>{project.name}</h3>
          {project.date && <p className='text-sm'>{project.date}</p>}
        </div>
        <div className='flex flex-wrap pt-4 pb-4 gap-2'>
          {project.technologies.map((tech) => (
            <div key={tech} className='bg-[#A38AFF] h-8 px-3 flex items-center justify-center rounded-xs text-white font-bold text-nowrap'><p>{tech}</p></div>
          ))}
        </div>
        <p className="text-lg text-white">{project.description}</p>

        <div className='flex flex-wrap justify-end gap-3 mt-auto pt-4'>
          {project.blog && (
            <LinkCircle href={project.blog} label='Blog'><File size={20} /></LinkCircle>
          )}
          <LinkCircle href={hasDemo ? project.demo : null} label='Video'><Video size={20} /></LinkCircle>
          {githubLinks.length === 0 && (
            <LinkCircle href={null} label='GitHub'><FolderGit2 size={20} /></LinkCircle>
          )}
          {githubLinks.map((link) => (
            <LinkCircle key={link.url} href={link.url} label={link.label}>
              <FolderGit2 size={20} />
            </LinkCircle>
          ))}
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className='bg-white text-[#1B222C] text-sm rounded-md overflow-y-auto w-[90%] h-[95%]'>
      <div className='px-6 pt-6'>
        <h3 className='font-bold text-xl text-nowrap text-[#A38AFF] pb-2 border-b-2 border-[#A38AFF]'>PROJECTS</h3>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 p-6 gap-6'>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects