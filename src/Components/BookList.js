import React from 'react'

export default function BookList(props)
{
    return(
        <>
        <div className="m-2">
            <img src={props.image}/>
            <h1>Authoname: {props.name}</h1>
            <h2>Phone Number: {props.phone}</h2>
            <h3>email id: {props.email}</h3>

        </div>
        </>
    )

}
