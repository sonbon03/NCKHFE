import React from "react";
import "./index.css";
import "./media-screen.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter } from "react-router-dom";
import SiderView from "./components/Sider";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import PostManagement from "./pages/PostManagement";
import Header from "./layout/Header";

const { Sider } = Layout;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Layout className=" flex-column flex-md-row">
          <Sider className="sider">
            <SiderView />
          </Sider>
          <Content>
            <PostManagement />
          </Content>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
