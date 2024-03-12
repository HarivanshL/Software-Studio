import React from 'react'
import '../css-styling/Linkbar.css'

const Linkbar = ({linkNames}) =>{
  return (
    <div className="buttons row text-center">
    {linkNames.map((text, index) => (
        <div className="col-md-4" key={index}>
            <button className="button btn-block fixed-width">{text}</button>
        </div>
    ))}
</div>
  )
}

export default Linkbar;
