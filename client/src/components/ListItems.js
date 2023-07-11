import React, { Fragment, useEffect, useState } from "react";

const ListItems = () => {

    const [items, setItems] = useState([])

    const getItems = async () => {
        try {
            const response = await fetch("http://localhost:5000")
            const jsonData = await response.json();

            setItems(jsonData);
        } catch (err) {
            console.error(err.message);
            
        }
    }

    useEffect(() => {
        getItems();
      }, []);
      
    console.log(items)


    return (
    <Fragment>
        <table>
        <thead>
            <tr>

            </tr>
        </thead>
        <tbody>
            {items.map(item => (
                <tr>
                    <td>
                        <div>
                        <h3>
                        {item.item_name} |
                        {item.item_price}|
                        {item.item_description}
                        </h3>
                        <img style={{maxWidth:300}}src={item.item_picture}/>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
        </table>

    </Fragment>
    )
}

export default ListItems