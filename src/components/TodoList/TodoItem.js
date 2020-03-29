import React, { Component } from 'react'

export default class TodoItem extends Component {
  handleChange = (id, e) => {
    this.props.handleCheckChange(id, e.target.checked)
  }
  handleDelete = (index) => {
    this.props.handleDelete(index)
  }
  shouldComponentUpdate (nextProps) {
    return (nextProps.completed !== this.props.completed)
  }
  render () {
    return (
      <>
        <li><input type="checkbox" checked={this.props.completed} onChange={this.handleChange.bind(this, this.props.id)} />{this.props.title} {this.props.completed ? '已完成' : '未完成'}<button onClick={this.handleDelete.bind(this, this.props.index)}>删除</button></li>
      </>
    )
  }
}
