import React, { Component } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import './App.scss';
import MyCalendar from '../calendar/Calendar';
import ToDoList from '../todo_list/ToDoList';
import moment from 'moment';
const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment().format('YYYY-MM-DD'),
      data: require('../../data.json')
    }
  }

  onSelectHandle = (value) => {
    this.setState((state) => {
      return {
        selectedDate: value.format('YYYY-MM-DD')
      }      
    });
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
        <ToDoList data={this.state.data} selectedDate={this.state.selectedDate}/>
        </div>
      </Col>
      <Col className="content-row" span={4}>
        <div className="content-box">
        <MyCalendar count={this.state.selectedDate} onSelectHandle={this.onSelectHandle}/>
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