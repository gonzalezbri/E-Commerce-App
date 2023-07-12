import React, { Fragment, useState } from "react";

const InputItem = () => {
  const [item_type, setType] = useState("");
  const [item_name, setName] = useState("");
  const [item_picture, setPicture] = useState("");
  const [item_price, setPrice] = useState("");
  const [item_description, setDescription] = useState("");

  const onSubmitItem = async (e) => {
    e.preventDefault();
    try {
      const body = {
        item_type,
        item_name,
        item_picture,
        item_price,
        item_description,
      };
      const response = await fetch("http://localhost:5000", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <h1>Item Submission</h1>
      <form className="entry-form" onSubmit={onSubmitItem}>
        {/* Form Selection */}
        <select value={item_type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select item type</option>
          <option value="Weapons">Weapons</option>
          <option value="Clothes">Clothes</option>
          <option value="Vehicles">Vehicles</option>
          <option value="Pets">Pets</option>
        </select>

        {/* Item Name */}
        <input
          type="text"
          placeholder="Item Name"
          value={item_name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Item Img */}
        <input
          type="text"
          placeholder="Item Picture URL"
          value={item_picture}
          onChange={(e) => setPicture(e.target.value)}
        />

        {/* Item price */}
        <input
          type="number"
          placeholder="Item Price"
          value={item_price}
          onChange={(e) => setPrice(e.target.value)}
        />

        {/* Item Description */}
        <input
          type="text"
          placeholder="Item Description"
          value={item_description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button>Add Item</button>
      </form>
    </Fragment>
  );
};

export default InputItem;
