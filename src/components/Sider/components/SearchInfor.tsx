import React from "react";
import iconSearch from "../../../assets/images/icon-search.svg";

const SearchInfor = () => {
  return (
    <div className="search border-bottom border-black p-3">
      <div className="menu-items">Tìm kiếm</div>
      <hr className="border-bottom border-secondary mx-2" />
      <div className="d-flex justify-content-center position-relative">
        <img src={iconSearch} alt="Search" className="position-absolute" />
        <input type="text" className="w-75 p-1 rounded-3 border border-0" />
      </div>
    </div>
  );
};

export default SearchInfor;
