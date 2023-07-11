import React, {Fragment, useState} from "react";

const InputItem = () => {

    const[item_name, setName]= useState("Item Name")

    const onSubmitItem = async(e) =>{
        e.preventDefault();
        try {
            const body = {item_name};
            const response = await fetch("http://localhost:5000/items", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (error) {
            console.log(error.message)
     
        }
    } 
    return(
        <Fragment>
            <h1> Item List </h1>
            <form className="entry-form" onSubmit={onSubmitItem}>
                <input type="text" value={item_name} onChange={e=> setName(e.target.value)}/>

                <button>Add Item</button>

            </form>

            
        </Fragment>
    )
}

export default InputItem