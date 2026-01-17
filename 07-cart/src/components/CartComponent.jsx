import React, { useState } from "react";

export default function CartComponent() {
  const [productsAdded, setProductsAdded] = useState([]);
  const [product, setProduct] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const discount = productsAdded.length > 10;

  const addProductToCart = () => {
    if (product === "") {
      setError(true);
      setErrorMessage("El producto no puede ser vacío");
      return;
    }

    if (productsAdded.includes(product)) {
      setError(true);
      setErrorMessage("El producto ya está en el carrito");
      return;
    }

    setProductsAdded([...productsAdded, product]);
    setProduct("");
    setError(false);
  };

  return (
    <div>
      <h2>Cart</h2>

      <input value={product} onChange={(e) => setProduct(e.target.value)} />
      <button onClick={addProductToCart}>Add</button>

      <ul>
        {productsAdded.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      {discount && <p>¡Tienes un descuento!</p>}
      {error && <p className="error">{errorMessage}</p>}
    </div>
  );
}
