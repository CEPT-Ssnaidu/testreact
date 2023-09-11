import React,{useEffect, useState} from 'react'
import axios from 'axios'
const Axioss = () => {
    const[userData, setData]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then(response =>{
        setData(response.data);

        })
},[])
    return(

        <div className="text-center mt-9">
        
        
        {userData.map((data)=>{

            return(
                
                <div>
                <table>
                <tr>
                <th><p className="bg-red-500">{`${data.id}`} <th>{`${data.title}`}</th>
                </p></th>
                <th><img src={data.url} alt= "" className="h-6" /> </th>
                </tr></table>
                </div>
            )

        })}
            
                    
            
        
            
        </div>
    )
}
export default Axioss