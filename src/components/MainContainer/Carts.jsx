import { useEffect } from "react";
import { useState } from "react";
import Cart from "./Cart";

const Carts = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("local.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart}></Cart>
      ))}
      </div>
    </div>
  );
};

export default Carts;
