import { Filter } from '@mui/icons-material';
import React from 'react'
import { Link, useOutletContext } from 'react-router';
import Button from '../../components/Button/Button';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from 'axios';


const api = " http://localhost:3000/data";

const Favourites = () => {

  const { data, addCart, darkMode, getData } = useOutletContext()
  
  const FavouritesCard = data.filter((e) => e.complite === true)

  async function checkCard(elem) {
    try {
      let newObj = {
        complite: !elem.complite,
      };
      await axios.patch(`${api}/${elem.id}`, newObj);
      getData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className={` flex  px-20  pt-30 pb-140  ${darkMode ? "bg-black text-white" : "bg-gray-200 text-black"}`}
    >
      {FavouritesCard.length === 0 ? (
        <div className="flex justify-center items-center flex-col pl-150 pt-50">
          <p className="font-extrabold">В избранном пока пусто</p>
          <Link to="/">
            <button className="flex  gap-1 mt-3 bg-orange-500 border-none px-10 cursor-pointer py-1 rounded-2xl ">
              На главную
            </button>
          </Link>
        </div>
      ) : (
        <div
          className={`grid sm:pt-15 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-8 relative px-7 py-7 rounded-2xl ${darkMode ? "bg-[#1E2024] text-white" : "bg-gray-100 text-black"} `}
        >
          {FavouritesCard.map((e) => (
            <div className="bg-gray-300 rounded-xl p-4">
              <FavoriteBorderIcon sx={{position:"absolute", top:"79px", cursor:"pointer", color:"red"}}  onClick={() => checkCard(e) } />
              <img className=" rounded-xl pb-1 mb-3" src={e.img} alt="" />
              <h1>{e.price} c</h1>
              <h1 className="text-lg font-extrabold">{e.name}</h1>
              <h1 className="text-gray-500">{e.color}</h1>
              <Button onAdd={() => addCart(e)}></Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites