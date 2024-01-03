import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";

const Record = () => {
  const [select, setSelect] = useState<string | null>(null);

  const handleItemClick = (value: string) => {
    setSelect(value);
  };

  const items = [
    {
      key: "1",
      onClick: () => handleItemClick("10"),
      label: <span>10</span>,
    },
    {
      key: "2",
      onClick: () => handleItemClick("20"),
      label: <span>20</span>,
    },
    {
      key: "3",
      onClick: () => handleItemClick("25"),
      label: <span>25</span>,
    },
    {
      key: "4",
      onClick: () => handleItemClick("50"),
      label: <span>50</span>,
    },
  ];

  return (
    <div className="p-3 record">
      <div className="menu-items">Lựa chọn số bản ghi</div>
      <hr className="border-bottom border-secondary mx-2" />
      <div className="d-flex gap-3 px-3">
        <span className="number-record">Số bản ghi:</span>
        <Dropdown.Button
          icon={<DownOutlined />}
          overlay={
            <Menu>
              {items.map((item) => (
                <Menu.Item key={item.key} onClick={item.onClick}>
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
          }
          className=""
        >
          {select === null ? "10" : select}
        </Dropdown.Button>
      </div>
    </div>
  );
};

export default Record;
