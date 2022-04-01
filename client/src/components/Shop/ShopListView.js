import React from "react";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
import Sidebar from "../MyAccount/Sidebar.js";
import ProductItems1 from "../Shop/ProductItems1.js";
import ProductItems2 from "../Shop/ProductItems2.js";

const ShopListView = () => {
  const [product, setProduct] = React.useState("second");
  return (
    <div className="container">
      <div className="flex items-center mt-4">
        <AiOutlineHome className="text-myColor" />
        <AiOutlineRight className="text-gray-500 mx-2" />
        <h6>Shop</h6>
        <AiOutlineRight className="text-gray-500 mx-2" />
        <h6>List view</h6>
      </div>
      <div className="grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        {/* sidebar */}
        <Sidebar />
        {/* product items */}
        <div className="col-span-3">
          <div className="flex items-center mb-4">
            <select
              name=""
              id=""
              className="w-44 text-sm text-gray-600 border-gray-300 shadow-sm rounded focus:ring-myColor focus:border-myColor"
            >
              <option value="default-sorting">Default sorting</option>
              <option value="price-low-high">Price low-high</option>
              <option value="price-high-low">Price high-low</option>
            </select>
            <div className="flex gap-2 ml-auto show-items group">
              <div
                onClick={() => setProduct("first")}
                className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 active:bg-myColor active:text-white rounded cursor-pointer"
              >
                <i className="fas fa-th"></i>
              </div>
              <div
                onClick={() => setProduct("second")}
                className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 active:bg-myColor   active:text-white rounded cursor-pointer"
              >
                <i className="fas fa-list"></i>
              </div>
            </div>
          </div>
          {/* product items */}
          {product === "first" && <ProductItems1></ProductItems1>}
          {product === "second" && <ProductItems2></ProductItems2>}
        </div>
      </div>
    </div>
  );
};

export default ShopListView;
