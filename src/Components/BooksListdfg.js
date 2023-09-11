import React from 'react'

export default function BookListdfg({image,email,phone,name})
{
    return(
        <>
            <div>
            <img src={image} />
            <h1> Author Name: {name}</h1>
            <h2>Phone Number : {phone}</h2>
            <h3>eMail Id : {email}</h3>



            </div>


        </>


    );




}