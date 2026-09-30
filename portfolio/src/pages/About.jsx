import { useState } from 'react'
import computer from '../assets/computer.png'
import {Phone, Mail, Users, FolderGit2, Copy, Check} from 'lucide-react';

const contacts = [
  { label: 'Phone', value: '+1 (408) 512-4678', icon: Phone, copy: true },
  { label: 'E-mail', value: 'tazmeenahhmed@gmail.com', icon: Mail, copy: true },
  { label: 'LinkedIn', value: '@tazmeenahmed', icon: Users, href: 'https://www.linkedin.com/in/tazmeenahmed' },
  { label: 'GitHub', value: '@tazmeenahhmed', icon: FolderGit2, href: 'https://github.com/tazmeenahhmed' },
];

const ContactCard = ({ item }) => {
  const Icon = item.icon;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className='flex items-center gap-4 p-1.5 rounded-lg bg-[#D7CCFF]'>
      <div className='w-14 h-14 shrink-0 flex items-center justify-center rounded-md bg-[#A38AFF]'>
        <Icon size={24} strokeWidth={1.75} />
      </div>
      <div className='min-w-0'>
        <p className='font-bold'>{item.label}</p>
        <div className='flex items-center gap-2'>
          {item.href ? (
            <a href={item.href} target='_blank' rel='noreferrer' className='truncate hover:underline'>{item.value}</a>
          ) : (
            <span className='truncate'>{item.value}</span>
          )}
          {item.copy && (
            <button onClick={handleCopy} aria-label={`Copy ${item.label}`} className='opacity-60 hover:opacity-100'>
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    
    <div className='bg-white text-[#1B222C] text-sm rounded-md overflow-y-auto w-[90%] h-[95%]'>
      <div className='px-6 pt-6'>
        <h3 className='font-bold text-xl text-nowrap text-[#A38AFF] pb-2 border-b-2 border-[#A38AFF]'>ABOUT ME</h3>
      </div>
      <div className='flex items-center gap-6 p-6'>
        <img src={computer} alt="Computer illustration" className='w-1/3 shrink-0' />
        <div className='flex-1 p-2 gap-2'>
          <h3 className='font-bold text-lg text-nowrap text-[#A38AFF] mb-2'>Hello, I'm Tazmeen!</h3>
          <p>
            I'm a Computer Science undergrad student at San Jose State University with an interest in
            software engineering. I started at West Valley College and earned an Associates degree in 
            Mathematics before transferring. I enjoy making front-end designs and turning them into clean,
            usable interfaces and exploring different specialties of coding such as machine learning and
            game design. Outside of code, you'll find me working on hands-on cardboard crafts and painting.
          </p>
        </div>
      </div>

      <div className='px-6 pb-6'>
        <h3 className='font-bold text-xl text-nowrap text-[#A38AFF] pb-2 mb-4 border-b-2 border-[#A38AFF]'>CONTACT</h3>

        <div className='grid grid-cols-2 gap-3'>
          {contacts.map((contact) => (
            <ContactCard key={contact.label} item={contact} />
          ))}
        </div>
      </div>
    </div>

  )
}

export default About