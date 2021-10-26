import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className=" bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <div>
                            <a href="#" className="flex items-center py-5 px-2 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="font-bold">CollabG</span>
                            </a>
                        </div>
                        {/* primary nav */}
                        <div className="hidden md:flex items-center space-x-1">
                            <a href="" className="py-5 px-3 text-gray-500">Sessions</a>
                        </div>
                    </div>
                    {/* secondary nav */}
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="" className="py-3 px-3 text-gray-700">Login</a>
                        <a href="" className="py-2 px-3 text-gray-700 bg-yellow-400 hover:bg-yellow-300 text-yellow-700 hover:text-yellow-600 rounded transition duration-500 ease-in-out">Signup</a>
                    </div>
                    <div class="md:hidden flex items-center">
                        <button class="mobile-menu-button">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* mobile menu */}
            <div className="mobile-menu hidden md:hidden">
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-300">Sessions</a>
            </div>
                        
        </nav>
    );
  }
  