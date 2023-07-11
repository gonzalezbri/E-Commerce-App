import React, { Fragment, useEffect, useState } from "react";

const ListItems = () => {

    const [items, setItems] = useState([])

    const getItems = async () => {
        try {
          const response = await fetch("http://localhost:3000");
          const jsonData = await response.json();
      
          setItems(jsonData);
        } catch (err) {
          console.error("Error parsing JSON:", err);
        }
      };
      

    useEffect (() => {
        getItems()
    }, [])

    console.log(items)

    return (
    <Fragment>
        <table>

        </table>

    </Fragment>
    )
}

export default ListItems