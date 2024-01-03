import React, { useState } from "react";

const Status = () => {
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleCheckboxChange = (status: any) => {
    setSelectedStatus(status);
  };
  return (
    <div className="status p-3 space_sider border-bottom border-black ">
      <div className="menu-items">Trạng thái</div>
      <hr className="border-bottom border-secondary mx-2" />
      <ul>
        <li className="d-flex align-items-center gap-2">
          <input
            type="checkbox"
            name="approved"
            id="approved"
            checked={selectedStatus === "approved"}
            onChange={() => handleCheckboxChange("approved")}
          />
          <label htmlFor="approved" className="fs-6">
            Đã duyệt
          </label>
        </li>
        <li className="d-flex align-items-center gap-2">
          <input
            type="checkbox"
            name="notapproved"
            id="notapproved"
            checked={selectedStatus === "notapproved"}
            onChange={() => handleCheckboxChange("notapproved")}
          />
          <label htmlFor="notapproved" className="fs-6">
            Chưa duyệt
          </label>
        </li>
        <li className="d-flex align-items-center gap-2">
          <input
            type="checkbox"
            name="all"
            id="all"
            checked={selectedStatus === "all"}
            onChange={() => handleCheckboxChange("all")}
          />
          <label htmlFor="all" className="fs-6">
            Tất cả
          </label>
        </li>
        <li className="d-flex align-items-center gap-2">
          <input
            type="checkbox"
            name="cancel"
            id="cancel"
            checked={selectedStatus === "cancel"}
            onChange={() => handleCheckboxChange("cancel")}
          />
          <label htmlFor="cancel" className="fs-6">
            Đã hủy
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Status;
