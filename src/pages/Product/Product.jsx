import axios from 'axios';
import React, { useEffect } from 'react'
import { Link, useOutletContext } from "react-router";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";


const Product = () => {
  const { darkMode, cart ,setCart } = useOutletContext();

  let total = 0

  cart.forEach((e) => {
    total = total + Number(e.price)
  })


   function deleteCart(id) {
     const changeCart = cart.filter((item) => item.id !== id)
     setCart(changeCart)
  }

  return (
    <div
      className={`flex px-20 py-20  ${darkMode ? "bg-black text-white" : "bg-gray-200 text-black"}`}
    >
      <div className="h-600">
        {cart.length === 0 ? (
          <div className="flex justify-center items-center flex-col pl-150 pt-50">
            <p className='font-extrabold'>В корзине пока пусто</p>
            <Link to="/">
              <button  className="flex  gap-1 mt-3 bg-orange-500 border-none px-10 cursor-pointer py-1 rounded-2xl ">
                На главную
              </button>
            </Link>
          </div>
        ) : (
          <div className="w-200 ">
            {cart.map((e, index) => {
              return (
                <div
                  key={index}
                  className={`flex items-end justify-between mt-4  p-4 rounded-xl ${darkMode ? "bg-[#1E2024]" : "bg-white"}`}
                >
                  <div className='flex gap-5'>
                    <img
                      src={e.img}
                      // alt={e.name}
                      className="w-20 h-20"
                    />

                    <div>
                      <h2 className="text-xl font-bold">{e.name}</h2>
                      <p className="text-gray-500">{e.price} c.</p>
                      <p className="text-sm"> {e.color}</p>
                    </div>
                  </div>

                  <button
                    className=" cursor-pointer"
                    onClick={() => deleteCart(e.id)}
                  >
                   <DeleteForeverIcon/>
                  </button>
                </div>
              );
            })}
            <div className="mt-10 p-5 border-t border-gray-400">
              <h2 className="text-2xl font-bold">ИТОГО : 
                { total}c
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product