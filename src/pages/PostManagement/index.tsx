import React, { useState } from "react";
import { Modal } from "antd";
import ListPosts from "./components/ListPosts";
import ModalPost from "./components/ModalPost";

const PostManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="">
      <div className="d-flex justify-content-between px-3 space_sider">
        <div className="fs-3">Quản lý bài đăng</div>
        <div className="d-flex gap-2">
          <button
            onClick={showModal}
            className="border py-2 px-3 rounded-3 border border-success-subtle bg-info-subtle text-emphasis-info fs-7"
          >
            Tạo mới
          </button>
          <Modal
            title="Thêm mới bài đăng"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            className="w-75 text-center"
            okText="Đăng bài"
            cancelText="Đóng"
          >
            <ModalPost />
          </Modal>
          <button className="border py-2 px-3 rounded-3 border border-success-subtle bg-info-subtle text-emphasis-info fs-7">
            Xuất file
          </button>
        </div>
      </div>
      <ListPosts />
    </div>
  );
};

export default PostManagement;
