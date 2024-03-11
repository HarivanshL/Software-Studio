import React from 'react'
import '../css-styling/Linkbar.css'

function Linkbar() {
  return (
    <div className="buttons row text-center">
    {['Join Our Team', 'More Info', 'FAQ'].map((text, index) => (
        <div className="col-md-4" key={index}>
            <button className="button btn-block fixed-width">{text}</button>
        </div>
    ))}
</div>
  )
}

export default Linkbar;
