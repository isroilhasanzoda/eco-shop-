import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router'
import { Link } from 'react-router'
import { darkTheme, lightTheme } from '../theme'
import { ThemeProvider } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LanguageIcon from "@mui/icons-material/Language";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Box } from '@mui/material'
import ModalCard from '../components/ModalCard/ModalCard'

import FavoriteIcon from "@mui/icons-material/Favorite";

import axios from "axios";

const api = " http://localhost:3000/data";

const Layout = () => {

  const [category, setCategory] = useState("All")

  const [data, setData] = useState([]);

  const [cart, setCart] = useState([])

  const addCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const [modal, setModal] = useState(false)
  const handlClick = () => {
     setModal(true)
  }

  const [tx, SetTx] = useState("");

  const storedTheme = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(storedTheme === "true");
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };
  const theme = darkMode ? darkTheme : lightTheme;
  
  const { t, i18n } = useTranslation()
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }
  const [lng, setIng] = useState('')

  async function getData() {
    try {
      const { data } = await axios.get(api);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <>
          <header
            className={` w-1/1 py-4 px-2 z-10 flex fixed justify-center top-0 items-center gap-5 ${
              darkMode ? "bg-[#1E2024] text-white" : "bg-white text-black"
            }`}
          >
            <Link to="/">
              {" "}
              <img
                className="w-40 cursor-pointer bg-black"
                src="https://avatars.mds.yandex.net/i?id=8581afddce3541ace18f5fcfcd046c220d854abc-4232421-images-thumbs&n=13"
                alt=""
              />
            </Link>
            <button
              onClick={handlClick}
              className="sm:hidden md:block md:rounded-xl md:cursor-pointer md:border-2 md:px-7 py-2.5  md:bg-orange-500 text-black md:border-none hover:bg-orange-600"
            >
              {t("ly.text.btn")}
            </button>
            <input
              className="w-4/10 border-orange-600 border-2 rounded-xl px-4  py-2"
              type="text"
              placeholder="SEARCH"
              value={tx}
              onChange={(e) => SetTx(e.target.value)}
            />
            <div className="sm:hidden md:flex flex-col items-center cursor-pointer">
              {cart.length > 0 && (
                <p className="fixed pb-3 pl-9"> {cart.length}</p>
              )}

              <ShoppingCartIcon
                sx={{
                  color: "#313233",
                  "&:hover": {
                    color: "#ea580c",
                  },
                }}
              />

              <Link to="/product"> {t("ly.title")}</Link>
            </div>

            <div className="sm:hidden md:flex flex-col items-center cursor-pointer  ">
              <FavoriteIcon
                sx={{
                  color: "#313233",
                  transition: "1,5s",
                  "&:hover": {
                    color: "#ea580c",
                  },
                }}
              />
              <Link to="/favourites" >{t("ly.text.favorite")} </Link>
            </div>
            <div className="sm:hidden md:flex flex-col items-center cursor-pointer  ">
              <LanguageIcon
                sx={{
                  color: "#313233",
                  "&:hover": {
                    color: "#ea580c",
                  },
                }}
              />
              <select
                className=" text-1xl rounded-xl cursor-pointer border-2   border-none "
                value={lng}
                onChange={(e) => {
                  changeLanguage(e.target.value);
                  setIng(e.target.value);
                }}
              >
                <option className="cursor-pointer" value="ru">
                  Русский
                </option>
                <option value="en">English</option>
              </select>
            </div>
            <div className="sm:hidden md:block">
              <IconButton
                sx={{ background: darkMode ? "white" : "white" }}
                onClick={toggleDarkMode}
              >
                <Brightness4Icon />
              </IconButton>
            </div>
          </header>

          <main>
            <Outlet context={{ darkMode, tx, cart, addCart, setCart, data, getData, category }} />
          </main>

          <footer
            className={`  sm:w-full md:hidden py-4 px-2 sm:z-10 flex sm:fixed justify-center sm:bottom-0 items-center gap-5 md:z-0  md:absolute md:w-0.5 ${
              darkMode ? "bg-[#1E2024] text-white" : "bg-white text-black"
            }`}
          >
            <div className="sm:flex sm:flex-col sm:items-center md:hidden">
              {cart.length > 0 && (
                <p className="fixed pb-3 pl-9"> {cart.length}</p>
              )}
              <ShoppingCartIcon className="cursor-pointer  text-[#313233] hover:text-orange-600" />
              <Link to="/product"> {t("ly.title")}</Link>
            </div>
            <div className="md:hidden sm:flex flex-col items-center cursor-pointer  ">
              <FavoriteIcon
                sx={{
                  color: "#313233",
                  transition: "1,5s",
                  "&:hover": {
                    color: "#ea580c",
                  },
                }}
              />
              <p>Избранное</p>
            </div>

            <div className="md:hidden sm:flex flex-col items-center cursor-pointer  ">
              <LanguageIcon className="hover:text-orange-600 text-[#313233]" />
              <select
                className=" text-1xl rounded-xl cursor-pointer border-2   border-none "
                value={lng}
                onChange={(e) => {
                  changeLanguage(e.target.value);
                  setIng(e.target.value);
                }}
                name=""
                id=""
              >
                <option className="cursor-pointer" value="ru">
                  Русский
                </option>
                <option value="en">English</option>
              </select>
            </div>
            <div className="md:hidden sm:block">
              <IconButton
                sx={{ background: darkMode ? "white" : "white" }}
                onClick={toggleDarkMode}
              >
                <Brightness4Icon />
              </IconButton>
            </div>
          </footer>
          {modal ? (
            <div>
              
              <ModalCard setCategory={setCategory} setModal={setModal} data={data} />
            </div>
          ) : null}
        </>
      </Box>
    </ThemeProvider>
  );
}
export default Layout