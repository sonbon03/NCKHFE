import React from "react";
import "./index.css";
import "./media-screen.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter } from "react-router-dom";
import SiderView from "./components/Sider";
import { Content } from "antd/es/layout/layout";
import PostManagement from "./pages/PostManagement";
import Header from "./layout/Header";
import Sider from "antd/es/layout/Sider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="d-flex flex-column flex-md-row layout">
          <Sider className="sider">
            <SiderView />
          </Sider>
          <Content>
            <PostManagement />
          </Content>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
