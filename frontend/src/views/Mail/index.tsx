import './index.scss';
import React, { FC, useState } from 'react';
import { Link, useParams, useOutletContext } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';

import LayoutHeader from './LayoutHeader';

import MailCompose from './MailCompose';
import MailList from './MailList';

const { Sider, Content } = Layout;

const Mail: FC = () => {
  const [user, setUser] = useOutletContext<any>();

  const { category } = useParams();
  let [showCompose, setShowCompose] = useState(false);
  let [composeData, setComposeData] = useState({});

  const openCompose = (data: any = {}) => {
    setComposeData(data);
    setShowCompose(true);
  }

  const closeCompose = () => {
    setComposeData({});
    setShowCompose(false);
  }

  return (
    <Layout className="mail-container">
      <LayoutHeader setUser={setUser} />
      <Layout className="layout">
        <Sider className="sidebar">
          <div className="btn-box">
            <Button className="compose-btn" type="primary" shape="round" onClick={() => openCompose()}>Compose</Button>
          </div>
          <Menu
            className="side-menu"
            selectedKeys={[category!]}
          >
            <Menu.Item key="2">
              <Link to="/mail/list/2">Inbox</Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to="/mail/list/1">Sent</Link>
            </Menu.Item>
            <Menu.Item key="0">
              <Link to="/mail/list/0">Draft</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content className="content">
          <MailList user={user} openCompose={openCompose} showCompose={showCompose}/>
          {showCompose ? 
          <>
            <div className="compose-mask"/>
            <MailCompose user={user} defaultData={composeData} onClose={closeCompose}/>
          </>: null}    
          </Content>
      </Layout>
    </Layout>
  );
}

export default Mail;