// import copy from 'copy-to-clipboard'
import React from 'react'
import "./../CardName/CardName.css"
// import { FaRegCopy } from 'react-icons/fa';

function CardName({data}) {

    const nURL = "https://www.namecheap.com/domains/registration/results/?domain=";

    // const handleCopy = (txt) => {
    //    copy(txt,{message: 'Press to copy'})
    // }
   
    const buyDomain = (data) => {
        window.open(nURL+data, "_blank")
    }

    return (
        <div className="name_con">
            <span className="name" onClick={() => buyDomain(data)}>{data}</span>               
        </div>
    )
}

export default CardName
