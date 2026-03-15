import axios from 'axios';
import React from 'react'
import { useOutletContext } from 'react-router';

import Button from '../../components/Button/Button';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";



const api = " http://localhost:3000/data";

const Home = () => {

  
  
  const { darkMode, tx, addCart, data, getData } = useOutletContext();
  
   
  async function checkCard(elem) {
    try {
      let newObj = {
         complite:!elem.complite
      }
      await axios.patch(`${api}/${elem.id}`,newObj)
      getData()
    } catch (error) {
      console.log(error);
      
    }
  }
  

  return (
    <div
      className={`flex flex-col px-20 pb-22 py-18    ${darkMode ? "bg-black text-white" : "bg-gray-200 text-black"}`}
    >
      <div className="md:w-full pt-10 ">
        <Swiper
          spaceBetween={40}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="h-60 w-200 md:w-full md:h-110"
              src="https://avatars.mds.yandex.net/i?id=f00f8f101eea6a38dac54249c9055ec9d144438c-7546197-images-thumbs&n=13"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-60 w-200 md:w-full md:h-110"
              src="https://avatars.mds.yandex.net/i?id=ab6e80fc1ad541e73e17fabbd422a5094c807613-7553437-images-thumbs&n=13"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-60 w-200 md:w-full md:h-110"
              src="https://avatars.mds.yandex.net/i?id=66176fb6f99f9751a200db04c725b18fb4463d11-9107092-images-thumbs&n=13"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-60 w-200 md:w-full md:h-110"
              src="https://avatars.mds.yandex.net/i?id=c9780b53282cc92cfd8f7744344cf7e310bf82b9-16558525-images-thumbs&n=13"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="grid sm:pt-15 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-8 ">
        {data
          .filter((e) => {
            return e.name
              .trim()
              .toLowerCase()
              .includes(tx.trim().toLowerCase());
          })
          .map((e) => {
            return (
              <div key={e.id}>
                <div
                  className={` relative px-7 py-7 rounded-2xl ${darkMode ? "bg-[#1E2024] text-white" : "bg-gray-100 text-black"} `}
                >
                  <FavoriteBorderIcon sx={{position:"absolute", right:"11px", cursor:"pointer", color:e.complite ? "red": "black"}}  onClick={() => checkCard(e) } />

                  <img className="max-w-65 max-h-60 pb-2 " src={e.img} alt="" />
                  <h1>{e.price} c</h1>
                  <h1 className="text-lg font-extrabold">{e.name}</h1>
                  <h1 className="text-gray-500"> {e.color}</h1>

                  <Button onAdd={() => addCart(e)} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
    
}

export default Home