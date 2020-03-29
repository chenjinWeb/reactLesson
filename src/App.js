import React from 'react'
import { TodoHead, TodoInput, TodoList } from "./components"

import { getTodos } from "./services"


export default class App extends React.Component {
  state = {
    title: '任务列表',
    todoList: [
      {
        id: 1,
        title: '吃饭',
        completed: false
      },
      {
        id: 2,
        title: '睡觉',
        completed: true
      }
    ]
  }
  componentDidMount () {
    getTodos().then(resp => {
      if (resp.status === 200) {
        this.setState({
          todoList: resp.data
        })
      }
    })
  }
  handleInputAdd = (name) => {
    if (!name) return;
    let newList = this.state.todoList
    newList.push({
      id: Math.random(),
      title: name,
      completed: false
    })
    this.setState({
      todoList: newList
    })
  }
  handleCheckChange = (id, value) => {
    let newList = this.state.todoList;
    newList.forEach(item => {
      if (item.id === id) {
        item.completed = value
      }
    })
    this.setState({
      todoList: newList
    })
  }
  handleDelete = (index) => {
    let newList = this.state.todoList
    if (newList.length === 1) {
      alert('至少有一个值吧')
      return
    }
    newList.splice(index, 1)
    this.setState({
      todoList: newList
    })
  }
  render () {
    return (
      <div>
        <TodoHead title={this.state.title} />
        <TodoInput handleInputAdd={this.handleInputAdd} />
        <TodoList todoList={this.state.todoList} handleCheckChange={this.handleCheckChange} handleDelete={this.handleDelete} />
      </div>
    )
  }
}


