import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  handleCheckChange = (id, value) => {
    this.props.handleCheckChange(id, value)
  }
  handleDelete = (index) => {
    this.props.handleDelete(index)
  }
  render () {
    return (
      <ul>
        {
          this.props.todoList.map((todoItem, index) => {
            return (
              <TodoItem {...todoItem} index={index} key={todoItem.id} handleCheckChange={this.handleCheckChange} handleDelete={this.handleDelete} />
            )
          })
        }
      </ul>
    )
  }
}

TodoList.propTypes = {
  todoList: PropTypes.array
}

