import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to={""}>
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to={""}>
                  Quản lý bài đăng
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={""}>
                  Quản lý khai báo
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to={""}>
                  Quản lý giao nhận
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to={""}>
                  Quản lý hệ thống
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
