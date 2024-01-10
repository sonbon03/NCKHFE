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
      <div className="d-flex justify-content-between px-3 space_sider flex-wrap gap-2">
        <div className="fs-3">Quản lý bài đăng</div>
        <div className="d-flex gap-3 group-btn">
          <button
            onClick={showModal}
            className="border py-1 px-5 rounded-4 border border-success-subtle"
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
          <button className="border py-1 px-5 rounded-4 border border-success-subtle">
            Xuất file
          </button>
        </div>
      </div>
      <ListPosts />
    </div>
  );
};

export default PostManagement;
