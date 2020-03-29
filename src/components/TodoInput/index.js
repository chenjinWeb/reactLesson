import React, { Component } from 'react'

export default class TodoInput extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleClick = () => {
    this.props.handleInputAdd(this.state.inputValue)
    this.setState({
      inputValue: ''
    })
  }
  render () {
    return (
      <>
        <input value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.handleClick}>添加到TodoList</button>
      </>
    )
  }
}