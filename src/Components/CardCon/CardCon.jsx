import React from 'react'
import "./../CardCon/CardCon.css"
import CardName from "../CardName/CardName";

function CardCon({data}) {

    const single_name = data.map((sdata,key) => {
        return(
            <CardName data={sdata} key={key}/>
        )
    })
    return (
        <div className="con">
            {single_name}
        </div>  
    )
}

export default CardCon
