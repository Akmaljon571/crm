import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  OrderedListOutlined,
  PayCircleOutlined,
  ReadOutlined,
  UploadOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {useNavigate} from "react-router-dom"
import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import useStart from "../hooks/useStart";
import Logo from "../img/logo.svg";
import HeaderMe from "../page/header/header";
import '../page/header/header.scss'
import MainMe from "../page/main/main";

const { Header, Sider, Content } = Layout;

const LayoutMe = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {setHead} = useStart()
  const navigate = useNavigate()

  const link = (evt) => {
    if(evt.domEvent.target.textContent){
      navigate(evt.domEvent.target.textContent)
      setHead(evt.domEvent.target.textContent)
    } else {
      navigate(evt.domEvent.currentTarget.innerText)
      setHead(evt.domEvent.currentTarget.innerText);
    }
  }


  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}> 
        <div onClick={() => setCollapsed(!collapsed)} className="Sabinas_logo">
          <img width={50} height={50} src={Logo} alt="logo" />
          <span className={`${collapsed ? 'none ': ''}`}>
            Sabina's
             Academiya
          </span>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          onClick={(evt) => link(evt)}
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              // text: "Xisobod",
              icon: <HomeOutlined style={{fontSize: 20}} />,
              label: "Xisobod",
            },
            {
              key: "2",
              icon: <ReadOutlined style={{fontSize: 20}} />,
              label: "O’quvchilar",
            },
            {
              key: "3",
              icon: <UsergroupAddOutlined style={{fontSize: 20}} />,
              label: "Guruhlar",
            },
            {
              key: "4",
              icon: <PayCircleOutlined style={{fontSize: 20}} />,
              label: "To’lovlar",
            },
            {
              key: "5",
              icon: <OrderedListOutlined style={{fontSize: 20}} />,
              label: "Davomat",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background header"
          style={{
            padding: 0,
          }}
        >
          <HeaderMe />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <MainMe />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutMe;
