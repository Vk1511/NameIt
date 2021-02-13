import React from 'react'
import '../Head/Head.css'

function Head({title , handleInput, headclass}) {

    return (
        <div className="head_container">
            <img className={`head_logo ${headclass ? 'head_logo_con' : 'head_logo_exp'}`} src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" alt="logo"/>
            <h3>{title}</h3>
            <input className="s_box" onChange={(event) => handleInput(event.target.value)} placeholder="Enter Word"/>
        </div>
    )
}

export default Head
