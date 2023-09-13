import React from 'react';
// import { FaBars } from 'react-icons/fa';
// import { faBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const links = [
    {
    id: 1,
      link: 'home'
  },
  {
    id: 1,
      link: 'about'
  },
  {
    id: 1,
      link: 'portfolio'
  },
  {
    id: 1,
      link: 'experience'
  }, 
  {
    id: 1,
      link: 'contact'
 },
]


  return (
    <header>
      <div className='text-white flex justify-between w-full h-20 items-center bg-slate-950 fixed '>
        <div>
          <h1 className=' text-5xl font-signature ml-2'>Adit</h1>
        </div>
        <ul className='hidden md:flex'>

          {links.map(({ id, link }) => (
            <li key={id}
             className='px-4 cursor-pointer capitalize  text-gray-500 hover:scale-105 duration-200' >
              {link}
            </li>
          ))}

        </ul>

        <div className='cursor-pointer pr-8'>
          <FaBars size={30}/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;