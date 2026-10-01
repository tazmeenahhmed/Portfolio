import React from 'react'
import codeday from '../assets/codeday_icon.jpg'

const experiences = [
  { title: "Open Source Software Engineering Internship", company: "CodeDay", time: "June 2026 - Aug 2026", description: ["- Contributed to Zulip, an open source chat workspace that divides conversations into ‘topics’ to make conversation flow easier to follow", "- Implemented a notification for issue  #14433 in TypeScript to enable desktop permission verification with a single click", "- Worked alongside a team of interns and a mentor, holding weekly check-ins to scope issues and review each other's progress"]},
  { title: "Open Source Micro Internship", company: "CodeDay", time: "Oct 2025", description: ["- Contributed to Open Energy Dashboard, an open source project that visualizes energy data in a user-friendly way to its numerous individual and company users", "- Wrote unit test for issue #962 in TypeScript for Node.js server’s API by comparing actual versus expected data to ensure that OED’s group meters delivers accurate information when displayed to its users"]}
]

const Experience = () => {
  return (
    <div className='bg-white text-[#1B222C] text-sm rounded-md overflow-y-auto w-[90%] h-[95%]'>
      <div className='px-6 pt-6'>
        <h3 className='font-bold text-xl text-nowrap text-[#A38AFF] pb-2 border-b-2 border-[#A38AFF]'>EXPERIENCE</h3>
      </div>

      <div className='flex flex-col p-6 gap-6'>
        {experiences.map((item) => (

          <div key={item.title} className='text-white bg-[#D7CCFF] rounded-lg h-70'> 
            <div className='flex p-6 gap-4'>
              <img src={codeday} className='w-15 h-15 shrink-0 rounded-md'/>
              <div>
                <h3 className='font-bold text-xl text-nowrap'>{item.title}</h3>
                <h2 className='text-sm text-nowrap'>{item.company} · {item.time}</h2>
                {item.description.map((line) => (
                  <p key={line} className='mt-3 text-base'>{line}</p>
                ))}
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Experience