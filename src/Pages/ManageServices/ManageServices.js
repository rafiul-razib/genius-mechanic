import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const[services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://arcane-springs-06521.herokuapp.com/services')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])

    const handleRemove =id=>{
        const url = `https://arcane-springs-06521.herokuapp.com/services/${id}`
        fetch(url,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount >0){
                alert("Successfully deleted service")
                const remainingServices = services.filter(service=> service._id !== id);
                setServices(remainingServices);
            }
        })
    }
    return (
        <div className="container">
            <h1>Manage Services here</h1>
            {
                services.map(service =>
                    <div key={service._id} style={{border: "1px solid blue", margin:"10px", padding:"20px"}}>
                        <h2>{service.name}</h2>
                        <button onClick={()=>handleRemove(service._id)} className="btn btn-danger">Delete Service</button>
                    </div>
                    )
            }
        </div>
    );
};

export default ManageServices;