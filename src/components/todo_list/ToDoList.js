import React, { PureComponent } from 'react';
import { Card, Row, Col, Icon } from 'antd';
import EditModal from '../edit_modal/EditModal';


class ToDoList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedToDos: this.props.data[this.props.selectedDate] || '',
      editModalShow: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.date !== props.selectedDate) {
      return {
        selectedToDos: props.data[props.selectedDate] || ''
      }
    }
    else {
      return null;
    }
  }

  openEditModal = () => {
    this.setState({
      editModalShow: true
    })
  }

  render() {
    
    let ArrayOfTodos = [];
    const renderTodos = () => {
      if (this.state.selectedToDos) {
        for (const key in this.state.selectedToDos) {
          ArrayOfTodos.push(
            <Col span={8} key={key}>
              <Card title={key} hoverable={false} actions={[<Icon type="check" />, <Icon type="edit" onClick={this.openEditModal}/>, <Icon type="delete" />]} bordered={true}>{this.state.selectedToDos[key]}</Card>
            </Col>)
        }
        return ArrayOfTodos;
      }
      else {
        return "Empty";
      }
    }

    return (
      <div style={{ background: '#fff', padding: '30px' }}>
        <>
        <Row gutter={16}>
          {renderTodos()}
        </Row>
        {/* <EditModal isOpen={this.state.editModalShow}/> */}
        </>
      </div>
    )
  }
}

export default ToDoList;