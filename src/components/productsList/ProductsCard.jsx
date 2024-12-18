import React from "react";
import { handleAddCart } from "../utils/handleAdd";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, toggleAddRemove } from "../store/cartSlice";
import { setCartStatus } from "../store/categorySlice";

function ProductsCard({ productArray }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cartItem);

  function checkValue(id) {
    // const isAdded = useSelector((state)=> state.cart.isAdded)
    const item = cartItem.find((item) => item.id === id);
  }

  return (
    <>
      {!productArray ? (
        <h1>Not Available</h1>
      ) : (
        productArray.map(({ id, title, cartStatus }, idx) => {
          return (
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
              key={idx}
            >
              <img
                className="w-full h-48 object-cover"
                src="https://via.placeholder.com/400"
                alt="Product Image"
              />
              <div className="px-6 py-4">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-600 text-lg">$99.99</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="ml-2 text-sm text-gray-500">(5/5)</span>
                </div>
              </div>
              <div className="px-6 py-4 text-center flex gap-4">
                {!cartStatus ? (
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
                    onClick={() => {
                      const products = handleAddCart({
                        id,
                        qty: 1,
                        productArray,
                      });
                      dispatch(addItem(products));
                      dispatch(setCartStatus({id,status:true}));
                    }}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded  focus:outline-none"
                    onClick={() => {
                      dispatch(setCartStatus({id,status:false}));
                      dispatch(deleteItem(id));
                    }}
                  >
                    Delete From Cart
                  </button>
                )}

                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none">
                  Details
                </button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

export default ProductsCard;
