import React, { useEffect, useState } from "react";

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState("");
  const [updatedImage, setUpdatedImage] = useState("");

  const getItems = async () => {
    try {
      const response = await fetch("http://localhost:5000");
      const jsonData = await response.json();
      setItems(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  const deleteItem = async (item) => {
    try {
      const response = await fetch(`http://localhost:5000/${item.item_id}`, {
        method: "DELETE",
      });
      setItems(items.filter((i) => i.item_id !== item.item_id));

    } catch (err) {
      console.error(err.message);
    }
  };

  const openUpdateModal = (item) => {
    setSelectedItem(item);
    setUpdatedName(item.item_name);
    setUpdatedPrice(item.item_price);
    setUpdatedImage(item.item_picture);
  };

  const updateItem = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/${selectedItem.item_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            item_price: updatedPrice,
            item_picture: updatedImage,
          }),
        }
      );
      // Handle response or any necessary updates
      // ...
    } catch (err) {
      console.error(err.message);
    }
    setSelectedItem(null);
  };

  return (
    <div className="card-container">
      {items.map((item) => (
        <div className="itemCard" key={item.item_id}>
          <img
            style={{ maxWidth: 300 }}
            src={item.item_picture}
            alt="Item Image"
            className="itemCard__image"
          />
          <h3 className="itemCard__name">{item.item_name}</h3>
          <p className="itemCard__price">{item.item_price} BTC</p>
          <button onClick={() => deleteItem(item)}>Delete</button>
          <button onClick={() => openUpdateModal(item)}>Update</button>
        </div>
      ))}
      {selectedItem && (
        <div className="update-modal">
          <form onSubmit={updateItem}>
            <input
              type="text"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
            <input
              type="text"
              value={updatedPrice}
              onChange={(e) => setUpdatedPrice(e.target.value)}
            />
            <input
              type="text"
              value={updatedImage}
              onChange={(e) => setUpdatedImage(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ListItems;
