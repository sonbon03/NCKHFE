import React from "react";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import iconTrash from "../../../assets/images/icon-trash.svg";
import iconShow from "../../../assets/images/icon-show.svg";
interface DataType {
  key: string;
  title: string;
  idpost: string;
  datePost: string;
  poster: string;
  assessor: string;
  status: string;
  buyer: string;
  tags: string;
  packDate: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Hoạt động",
    dataIndex: "action",
    key: "action",
    render: (_) => (
      <div className="d-flex gap-2 justify-content-center">
        <input type="checkbox" />
        <img src={iconShow} alt="show" />
        <img src={iconTrash} alt="delete" />
      </div>
    ),
  },
  {
    title: "Tiêu đề",
    dataIndex: "title",
    key: "title",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "Mã bài",
    dataIndex: "idpost",
    key: "idpost",
    render: (id) => <span>{id}</span>,
  },
  {
    title: "Ngày đăng bài",
    dataIndex: "datePost",
    key: "datePost",
    render: (datePost) => <span>{datePost}</span>,
  },
  {
    title: "Người đăng",
    dataIndex: "poster",
    key: "poster",
    render: (poster) => <span>{poster}</span>,
  },
  {
    title: "Người đánh giá",
    dataIndex: "assessor",
    key: "assessor",
    render: (assessor) => <span>{assessor}</span>,
  },
  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
    render: (tag, record) => {
      const status = record.status;
      return (
        <Tag color={status === "APPROVED" ? "green" : "red"} key={tag}>
          {String(tag).toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "Đơn vị tiêu thụ",
    dataIndex: "buyer",
    key: "buyer",
    render: (buyer) => <span>{buyer}</span>,
  },
  {
    title: "Ngày xuất xưởng",
    dataIndex: "packDate",
    key: "packDate",
    render: (packDate) => <span>{packDate}</span>,
  },
];

const data: DataType[] = [
  {
    key: "1",
    title: "John Brown",
    idpost: "32",
    datePost: "New York No. 1 Lake Park",
    poster: "string",
    assessor: "string",
    status: "APPROVED",
    buyer: "string",
    tags: "Đã duyệt",
    packDate: "string",
  },
  {
    key: "2",
    title: "Jim Green",
    idpost: "42",
    datePost: "London No. 1 Lake Park",
    poster: "string",
    assessor: "string",
    status: "NOTAPPROVED",
    buyer: "string",
    tags: "Chưa duyệt",
    packDate: "string",
  },
  {
    key: "3",
    title: "Joe Black",
    idpost: "32",
    datePost: "Sydney No. 1 Lake Park",
    poster: "string",
    assessor: "string",
    status: "APPROVED",
    buyer: "string",
    tags: "Đã duyệt",
    packDate: "string",
  },
];

const ListPosts: React.FC = () => <Table columns={columns} dataSource={data} />;

export default ListPosts;
