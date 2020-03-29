import React, { Component } from 'react'
import PropTypes from "prop-types"

export default class TodoHead extends Component {
  render () {
    return (
      <h2>
        {this.props.title}
      </h2>
    )
  }
}

// 设置title的类型和是否必须
TodoHead.propTypes = {
  title: PropTypes.string.isRequired
}

// 设置title的默认值
TodoHead.defaultProps = {
  title: '123'
}

