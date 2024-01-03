import React, { ChangeEvent, useEffect, useState } from "react";

interface Image {
  name: string;
}

const ModalPost = () => {
  const [date, setDate] = useState("");
  const [images, setImages] = useState<Image[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;

    if (selectedFiles) {
      const filesArray: Image[] = Array.from(selectedFiles).map((file) => ({
        name: file.name,
      }));

      setImages(filesArray);
    }
  };

  const formatDate = (date: any) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  };

  useEffect(() => {
    const currentDate = new Date();

    const formattedDate = formatDate(currentDate);

    setDate(formattedDate);
  }, []);

  return (
    <form action="" className="row form-modal">
      <div className="col-12 col-md-6 d-grid gap-3">
        <div className="row">
          <label htmlFor="" className="col-12 col-md-4">
            Mã(*)
          </label>
          <input type="text" readOnly className="col-12 col-md-8" />
        </div>
        <div className="row">
          <label htmlFor="" className="col-12 col-md-4">
            Tên bài đăng(*)
          </label>
          <input type="text" className="col-12 col-md-8" />
        </div>
        <div className="row">
          <label htmlFor="" className="col-12 col-md-4">
            Điện thoại
          </label>
          <input type="phone" className="col-12 col-md-8" />
        </div>
        <div className="row">
          <label htmlFor="" className="col-12 col-md-4">
            Người đăng
          </label>
          <input type="text" className="col-12 col-md-8" />
        </div>
        <div className="row">
          <label htmlFor="" className="col-12 col-md-4">
            Người đánh giá
          </label>
          <input type="text" readOnly className="col-12 col-md-8" />
        </div>
        <div className="row">
          <label htmlFor="" className="col-12 col-md-4">
            Trạng thái
          </label>
          <div className="d-flex gap-2 col-12 col-md-8 group-status mb-3">
            <span className="border py-1 px-2 rounded bg-primary text-white">
              Chưa duyệt
            </span>
            <span className="border py-1 px-2 rounded bg-dark-subtle text-emphasis-dark">
              Đã duyệt
            </span>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 d-grid gap-3">
        <div className="row">
          <label htmlFor="" className="col-12 col-md-4">
            Tiêu đề (*)
          </label>
          <input type="text" className="col-12 col-md-8" />
        </div>
        <div className="row">
          <label htmlFor="" className="col-12 col-md-4">
            Ngày đăng
          </label>
          <input
            type="date"
            className="col-12 col-md-8"
            value={date}
            readOnly
          />
        </div>
        <div className="row">
          <label htmlFor="" className="col-12 col-md-4">
            Ngày xuất xưởng
          </label>
          <input type="date" readOnly className="col-12 col-md-8" />
        </div>
        <div className="row">
          <label htmlFor="" className="col-12 col-md-4">
            Đơn vị tiêu thụ
          </label>
          <input type="text" className="col-12 col-md-8" />
        </div>
        <div>
          <div className="row">
            <label htmlFor="" className="col-12 col-md-4">
              Ảnh tải lên
            </label>
            <input
              type="file"
              className="col-12 col-md-8"
              multiple
              onChange={handleFileChange}
            />
          </div>

          {images.length > 0 && (
            <div>
              <h2>Các ảnh đã chọn:</h2>
              <ul className="d-flex gap-2">
                {images.map((image, index) => (
                  <li key={index}>{image.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default ModalPost;
