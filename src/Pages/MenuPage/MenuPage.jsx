import React, { useEffect, useState } from "react";

const MenuPage = () => {
  const [menu, setMenu] = useState([]);
  const [activeCategory, setActiveCategory] = useState("drinks");
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/menu`)
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const currentCategory = menu.find((cat) => cat?.id === activeCategory);

  if (!menu.length) {
    return <div className="text-white">Loading...</div>;
  }

  const handleAddToCart = () => {
    setCart([...cart, { ...selectedItem, quantity }]);
    setSelectedItem(null);
    setQuantity(1);
  };

  return (
    <div className="bg-black uppercase text-white min-h-screen flex  py-20">
      {/* LEFT SIDE - MENU */}
      <div
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        className="flex-1 px-6 md:px-12 py-10"
      >
        <h1 className="text-4xl md:text-6xl font-style mb-8 text-center">
          Our Menu
        </h1>

        {/* FILTER TABS */}
        <div className="flex flex-wrap  justify-center gap-4 mb-10">
          {menu.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full uppercase border transition ${
                activeCategory === cat.id
                  ? "bg-white text-black"
                  : "border-white/30 text-white hover:bg-white hover:text-black"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* SECTIONS */}
        {currentCategory?.sections?.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-3xl font-style mb-4 border-b border-white/20 pb-2">
              {section.name}
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="bg-[#1a1a1a] p-5 rounded-xl border border-white/10 cursor-pointer hover:scale-[1.02] transition"
                >
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-white/60 mt-2">${item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE - CART */}
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        className="w-[320px] bg-[#111] border-l border-white/10 p-6 hidden lg:block"
      >
        <h2 className="text-3xl font-style mb-4">Your Cart</h2>

        {cart.length === 0 && <p className="text-white/50">Cart is empty</p>}

        {cart.map((item, index) => (
          <div key={index} className="mb-4 border-b border-white/10 pb-3">
            <h4>{item.name}</h4>
            <p className="text-white/60 text-sm">Qty: {item.quantity}</p>
            <p className="text-white/80">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}

        {cart.length > 0 && (
          <div className="mt-6">
            <button className="w-full bg-white text-black py-3 rounded-full">
              Checkout
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-[#111] p-6 rounded-xl w-full max-w-md">
            <h2 className="text-3xl font-style mb-2">{selectedItem.name}</h2>
            <p className="text-white/70 mb-4">${selectedItem.price}</p>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-3 py-1 bg-white text-black rounded"
              >
                -
              </button>

              <span>{quantity}</span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 bg-white text-black rounded"
              >
                +
              </button>
            </div>

            {/* OPTIONS */}
            {selectedItem.options &&
              Object.entries(selectedItem.options).map(([key, values]) => (
                <div key={key} className="mb-3">
                  <label className="block text-white/70 capitalize mb-1">
                    {key}
                  </label>
                  <select className="w-full p-2 bg-black border border-white/20 text-white rounded">
                    {values.map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                </div>
              ))}

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setSelectedItem(null)}
                className="w-1/2 border border-white py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleAddToCart}
                className="w-1/2 bg-white text-black py-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuPage;
