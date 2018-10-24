import React, { Component } from 'react';
import { Layout, Menu, Row, Col, Card } from 'antd';
import './App.scss';
import MyCalendar from '../calendar/Calendar';
const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3,
      todoList: require('../../data.json')
    }
  }

  render() {
    return (
      <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        {/* <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item> */}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
    <Row gutter={16} type="flex" justify="center">
      <Col className="content-row" span={20}>
        <div className="content-box">
        {/* {
          let obj = this.state.todoList;
          for (const key in obj) {
            if (key === "29.10.2018") {
              return (
                <Card
                  title={key}
                  extra={<a href="#">More</a>}
                  style={{ width: 300 }}
                >
                  <p>`${key}: ${obj[key]}`</p>
                </Card>
              )
            }
          }
        } */}
        </div>
      </Col>
      <Col className="content-row" span={4}>
        <div className="content-box">
        <MyCalendar count={this.state.count}/>
        </div>
      </Col>
    </Row>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
    );
  }
}

export default App;