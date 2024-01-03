import React from "react";
import SearchInfor from "./components/SearchInfor";
import SelectTime from "./components/SelectTime";
import Record from "./components/Record";
import Status from "./components/Status";

const SiderView: React.FC = () => {
  return (
    <div className="d-flex d-md-block">
      <SearchInfor />
      <SelectTime />
      <Status />
      <Record />
    </div>
  );
};

export default SiderView;
