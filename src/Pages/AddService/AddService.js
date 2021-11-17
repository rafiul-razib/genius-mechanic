import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post("https://arcane-springs-06521.herokuapp.com/services", data)
        .then(res=>{
            if(res.data.insertedId){
                alert("Successfully add service")
                // reset();
            }
        })
    };
    return (
        <div className="add-service">
            <h1>Add a service here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
          
            <input placeholder="Please enter service name here" {...register("name", {required: true})} />
            {errors.name && <span>This field is required</span>}
            <textarea placeholder="Description" {...register("description", { required: true })} />
            {errors.description && <span>This field is required</span>}
            <input placeholder="Price" {...register("price", { required: true })} />
            {errors.price && <span>This field is required</span>}
            <input placeholder="Image url" {...register("img", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.img && <span>This field is required</span>}
            
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;