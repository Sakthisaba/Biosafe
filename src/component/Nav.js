import  {useState} from 'react'
import {navLink} from  '../static/index.js'
import logo from '../assets/logo.png';
function Nav ()
{

const [toggle,sertToggle] = useState(false)


    return(
 <div className={`flex justify-between navbar py-6 `}>
    <img className='w-[125px] ' src={logo}></img>
   
    <ul className="list-none flex  justify-end items-center flex-1">
        {navLink.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[14px] sm:text-[16px] mr-2 sm:mr-10 text-white`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

 </div>
    )
}

export default Nav;