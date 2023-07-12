// import React, {Fragment, useState} from "react";

// const InputItem = () => {

//     const [item_type, setType] = useState("Item Type")
//     const [item_name, setName] = useState("Item Name")
//     const [item_picture, setPicture] = useState("Item Name")
//     const [item_price, setPrice] = useState("Item Price")
//     const [item_description, setDescription] = useState("Item Description")

//     const onSubmitItem = async(e) =>{
//         e.preventDefault();
//         try {
//             const body = {item_name};
//             const response = await fetch("http://localhost:5000", {
//                 method: "POST",
//                 headers: {"Content-Type":"application/json"},
//                 body: JSON.stringify(body)
//             });
//             window.location = "/";
//         } catch (error) {
//             console.log(error.message)
     
//         }
//     } 
//     return(
//         <Fragment>
//             <h1> Item Submission </h1>
//             <form className="entry-form" onSubmit={onSubmitItem}>
            
//             {/*Form Selection */}
//             <select value={itemType} onChange={(e) => setItemType(e.target.value)}>
//                 <option value="Weapons">Weapons</option>
//                 <option value="Clothes">Clothes</option>
//                 <option value="Vehicles">Vehicles</option>
//                 <option value="Pets">Pets</option>
//             </select>

//             {/* Item Name */}
//             <input type="text" value={item_name} onChange={e=> setName(e.target.value)}/>
            
//             {/* Item Img */}
//             <input type="text" value={item_picture} onChange={e=> setPicture(e.target.value)}/>

//             {/* Item price */}
//             <input type="text" value={item_price} onChange={e=> setPrice(e.target.value)}/>

//             {/* Item Description */}
//             <input type="text" value={item_description} onChange={e=> setDescription(e.target.value)}/>


//             <button>Add Item</button>

//             </form>

            
//         </Fragment>
//     )
// }

// export default InputItem