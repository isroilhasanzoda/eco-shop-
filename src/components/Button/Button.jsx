import React from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTranslation } from 'react-i18next';





const Button = ({onAdd}) => {

    const { t, i18n } = useTranslation()
  return (
    <div>
      <button onClick={onAdd} className="flex gap-1 mt-3 bg-orange-500 border-none px-10 cursor-pointer py-1 rounded-2xl ">
        <ShoppingCartIcon />
        {t("tx.text.btn")}
      </button>
    </div>
  );
}

export default Button