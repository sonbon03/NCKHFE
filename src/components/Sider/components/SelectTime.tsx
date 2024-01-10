import React, { useState } from "react";

const SelectTime = () => {
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const handleTimeStart = (e: any) => {
    setTimeStart(e.target.value);
    if (new Date(e.target.value) >= new Date(timeEnd)) {
      setTimeEnd(new Date(e.target.value).toISOString().split("T")[0]);
    }
  };
  const handleTimeEnd = (e: any) => {
    setTimeEnd(e.target.value);
    if (new Date(e.target.value) <= new Date(timeStart)) {
      setTimeStart(new Date(e.target.value).toISOString().split("T")[0]);
    }
  };
  return (
    <div className="p-3 space_sider border-bottom border-black time">
      <div className="menu-items">Thời gian</div>
      <hr className="border-bottom border-secondary mx-2" />
      <div className="d-flex datetime gap-1 justify-content-center align-items-center flex-wrap">
        <input
          className="border border-0"
          type="date"
          name="time-start"
          onChange={handleTimeStart}
          value={timeStart}
        />
        <span className="fs-5 d-none d-xl-block">-</span>
        <input
          className="border border-0"
          type="date"
          name="time-end"
          onChange={handleTimeEnd}
          value={timeEnd}
        />
      </div>
    </div>
  );
};

export default SelectTime;
