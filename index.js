
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
// import { Router, browserHistory } from 'react-router'
import { renderRoutes } from 'react-router-config'
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import Loadable from 'react-loadable';

//import asyncComponent from './components/AsyncComponent'

import Left from './components/menus/Left'
import Top from './components/menus/Top'

const { Header, Content, Footer, Sider } = Layout;

const index = Loadable({
  loader: () => import('./components/Index')
})

const entrust = ({ route }) => (<div><h2>entrust</h2>{renderRoutes(route.routes)}</div>)
//const entrust = asyncComponent(() => import('./components/entrust/entrust.jsx'))
const entrustown = ({ route }) => (<div><h2>entrustown</h2>{renderRoutes(route.routes)}</div>)
const historylist = ({ route }) => (<div><h2>historylist</h2></div>)


const rootRoute = [{
  path: '/',
  exact: true,
  component: index,
}, {
  path: '/entrust',
  component: entrust,
  routes: [
    {
      path: '/entrust/entrustown',
      component: entrustown,
      routes: [
        {
          path: '/entrust/entrustown/historylist',
          component: historylist
        }
      ]
    }
  ]
}]

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Top></Top>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <Sider width={200} style={{ background: '#fff' }}>
            <Left />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            {renderRoutes(rootRoute)}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </BrowserRouter>,
  document.getElementById('container'));