import { User, FolderOpenDot, BriefcaseBusiness, Menu, X } from 'lucide-react';
import profile from '../assets/profile.jpg'
import { NavLink } from 'react-router';

const Sidebar = ({ isOpen, setIsOpen }) => {

    const navItems = [
        {title: 'About', icon: User, path: '/'},
        {title: 'Projects', icon: FolderOpenDot, path: '/projects'},
        {title: 'Experience', icon: BriefcaseBusiness, path: '/experience'}
    ];

    return (
        <div className={`bg-white text-[#1B222C] transition-all duration-300 ease-in-out text-sm rounded-md
            ${isOpen ? 'w-64' : 'w-16'}`}>

            <div className='p-4 flex justify-end items-center'>
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="hover:bg-[#F3F5F7] p-2 rounded-lg"
                >
                    {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
                </button>
            </div>

            <div className={`mx-auto rounded-sm overflow-hidden transition-all duration-300 ${isOpen ? 'w-32 h-32 opacity-100' : 'w-0 h-0 opacity-0'}`}>
                    <img src={profile} alt="Tazmeen Ahmed" className="w-full h-full object-cover" />
            </div>

            <div className={`text-center overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-10 mt-2 opacity-100' : 'max-h-0 mt-0 opacity-0'}`}>
                <h3 className='font-bold text-lg text-nowrap'>Tazmeen Ahmed</h3>
            </div>

            <nav className={`transition-all duration-300 ${isOpen ? 'mt-6' : 'mt-0'}`}>
                {navItems.map((item) => (
                    <NavLink
                        key={item.title}
                        to={item.path}
                        className={({ isActive }) => `px-4 py-3 hover:bg-[#A38AFF] flex items-center
                            ${isActive ? 'bg-[#EDE7FF]' : ''}`}
                    >
                        <item.icon size={20} strokeWidth={1.5} color='#000'/>
                        <span className={`ml-4 whitespace-nowrap overflow-hidden transition-all duration-300
                            ${isOpen ? 'w-32 opacity-100' : 'w-0 opacity-0'}`}>
                                {item.title}
                        </span>
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;