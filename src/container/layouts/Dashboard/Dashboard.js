import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Route, Switch, Link } from 'react-router-dom';
import './Dashboard.css';
import pageRoutes from '../../../config/router';

const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(true);

  const onCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
          {pageRoutes.map((data, i) => {
            return (
              <Menu.Item key={i}>
                <Link to={data.link}>
                  <Icon type={data.icon} />
                  <span className="nav-text">{data.name}</span>
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={onCollapsed}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280
          }}
        >
          <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
            <Switch>
              <Route exact path="/" component={() => <h1>ini ROOT</h1>} />
              <Route path="/camera" component={() => <h1>ini CAMERA</h1>} />
              <Route path="/upload" component={() => <h1>ini UPLOAD</h1>} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
