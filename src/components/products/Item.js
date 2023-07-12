// import React, { useEffect, useState } from "react";

// //productMeta

// const ListItems = () => {

//     const [items, setItems] = useState([])

//     const getItems = async () => {
//         try {
//             const response = await fetch("http://localhost:5000")
//             const jsonData = await response.json();

//             setItems(jsonData);
//         } catch (err) {
//             console.error(err.message);

//         }
//     }

//     useEffect(() => {
//         getItems();
//         }, []);

//     console.log(items)


//     return (


//         <div className="card-container">

//             {items.map(item => (
//             <div class="itemCard">

//                 <img style={{maxWidth:300}}src={item.item_picture} alt="Item Image" class="itemCardimage"/>

//                 <h3 class="itemCardname">{item.item_name}</h3>
//                 <p class="itemCard__price">{item.item_price} BTC</p>
//             </div>

//             ))}
//         </div>



//     )
// }

// export default ListItems
