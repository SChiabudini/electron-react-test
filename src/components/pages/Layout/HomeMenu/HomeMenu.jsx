import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Filters from "../Filters/Filters.jsx";
import style from './HomeMenu.module.css';

const HomeMenu = () => {

    return (
      <div className={style.container}>
          <div className={style.searchBar}><SearchBar /></div>
          <div className={style.filters}><Filters /></div>
      </div>
   );
}

export default HomeMenu;