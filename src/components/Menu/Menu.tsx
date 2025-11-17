'use client';

import React, { useState } from 'react';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import '@/styles/Menu/menu.scss';

interface ElMenus {
    name: string;
}

const Menu: React.FC = () => {
    const [isOpen, setIsOpen] = useState<Boolean>(false);
    // const [elMenu, setElMenu] = useState<HTMLElement[] | null>([]);

    const toggleMenu = () => setIsOpen(!isOpen);
    const elMenus: ElMenus[] = [{ 
        name: 'Home', 
    }, { 
        name: 'Profile' 
    }, { 
        name: 'createPost'
    }];

  return (
    <>
    <div className='menu'>
        {isOpen ? (
        <>
            <button onClick={toggleMenu} className='btn-menu'>
                <span className='btn-menu_icon'>
                    <IoIosMenu />
                </span>
            </button>
        </>
        ) : (
        <>
            <button onClick={toggleMenu} className='btn-menu'>
                <span className='btn-menu_icon'>
                    <IoIosClose />
                </span>
            </button>
        </>
        
        )}
        <div>
            {!isOpen ? (
                <nav className='navbar'>
                    <ul className='navbar-list'>
                    {elMenus.map((item, index) => (
                        <li className='navbar-list_item'>{item.name}</li>
                    ))}
                    </ul>
                </nav>
            ) : null}
        </div>
    </div>
    </>
  )
}

export default Menu
