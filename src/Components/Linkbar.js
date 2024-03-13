import React from 'react'
import '../css-styling/Linkbar.css'
import { NavLink } from 'react-router-dom'
const Linkbar = ({links}) =>{
  return (
    <div className="buttons row text-center">
    {links.map((link, index) => (
        <div className="col-md-4" key={index}>
          <NavLink className="button btn-block fixed-width" to={link.route}>
            {link.name}
          </NavLink>
        </div>
    ))}
</div>
  )
}

export default Linkbar;
