import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import InputSearch from './InputSearch';

const navigations = [
    {label: 'Antara', path:'/antara'},
    {label: 'Cnbc', path:'/cnbc'},
    {label: 'Cnn', path:'/cnn'},
]

export default function Navbar(params) {
    const [button, setButton] = useState('burger');

    function showNav(e) {
        setButton(button === 'burger' ? 'close' : 'burger')
        const element = document.getElementById('navbar-content')
        element.classList.toggle('expanded');
    }

    return (
        <>
            <section className='md:flex md:flex-initial'>
                <div className="flex justify-between items-center w-100 bg-gray-200 min-h-[2.8rem] px-6 py-2">
                    <NavLink to='/'>News</NavLink>
                    <div className="relative md:hidden">
                        <button type="button" className='w-6 bg-transparent cursor-pointer border-0' onClick={showNav}>
                            {
                                button === 'burger' ?
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="#464455" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 50 50">
                                    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                                </svg>
                            }
                        </button>
                    </div>
                    
                </div>  
                <div id='navbar-content' className={`absolute z-10 collapsed overflow-y-auto navbar-w-bg-h-p transition-all md:flex md:relative md:collapsed-none md:py-2`}>
                    <ul className="list-none md:flex md:flex-row md:justify-end md:w-full md:gap-x-8">
                        {
                            navigations.map((navigation)=>(
                                <li>
                                    <NavLink to={navigation.path} className='block py-3' onClick={showNav}>{navigation.label}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <section>
                <div className="container mx-auto mb-5 py-4">
                    {params.children}
                </div>
            </section>
        </>
    )
}
