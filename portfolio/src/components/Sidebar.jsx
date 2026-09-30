import { User, FolderOpenDot, BriefcaseBusiness, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Sidebar = ({ isOpen, setIsOpen }) => {

    const navItems = [
        {title: 'About', icon: User},
        {title: 'Projects', icon: FolderOpenDot},
        {title: 'Experience', icon: BriefcaseBusiness}
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

            <nav className="mt-6">
                {navItems.map((item) => (
                    <div key={item.title}>
                        <div className="px-4 py-3 hover:bg-[#A38AFF] cursor-pointer flex items-center justify-between">
                            <div className="flex items-center">
                                <item.icon size={20} strokeWidth={1.5} color='#000'/>
                                <span className={`ml-4 whitespace-nowrap overflow-hidden transition-all duration-300
                                    ${isOpen ? 'w-32 opacity-100' : 'w-0 opacity-0'}`}> 
                                        {item.title} 
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;