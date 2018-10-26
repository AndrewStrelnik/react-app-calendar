import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedToDos: this.props.data[this.props.selectedDate] || '',
      toDoArray: []
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.date !== props.selectedDate) {
      if (state.selectedToDos !== props.data[props.selectedDate]) {
        let toDoArray = [];
        for (const key in state.selectedToDos) {
          console.log('in_loop');
          toDoArray.push( 
            <Col span={8} key={key}>
              <Card title={key} bordered={false}>{state.selectedToDos[key]}</Card>
            </Col>)
        }
        console.log(toDoArray);
        return {
          selectedToDos: props.data[props.selectedDate] || '',
          toDoArray: toDoArray
        }
      }
      else {
        return {
        selectedToDos: props.data[props.selectedDate] || ''
        }
      }      
    }
    else {
      return null;
    }
  }

  render() {
       
    return (
      <div style={{ background: '#fff', padding: '30px' }}>
        
        <Row gutter={16}>
          {this.state.toDoArray}
        </Row>
      </div>
    )
  }
}

export default ToDoList;