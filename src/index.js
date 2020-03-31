/*-------------------------------------官方文档的HOOK:HOOK是16.8新增的特性,它可以在不写class的情况下使用state以及react其他特性-------------------------------------*/
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

// function Example () {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     console.info(1111)
//     document.title = `你已经点了${count}次了`
//   })
//   return (
//     <div>
//       <p>你已经点了{count}次了</p>
//       <button onClick={() => setCount(count + 1)}>点我</button>
//     </div>
//   )
// }

/*-------------------------------------使用State Hook特性-------------------------------------*/

// function Example () {
//   const [count, setCount] = useState(0)
//   function handleChangeFruit () {
//     setCount(count + 1)
//   }
//   useEffect(() => {
//     // 如果effect返回的是函数,React 将会在执行清除操作时调用它
//     return () => {
//       console.info(1111)
//     }
//   })
//   return (
//     <div>
//       <p>今天我买的水果是{count}</p>
//       <button onClick={handleChangeFruit}>改变</button>
//     </div>
//   )
// }

// ReactDOM.render(<Example />, document.querySelector("#root"))

// function useDocumentTitle (title) {
//   useEffect(() => {
//     document.title = title
//     return () => {
//       document.title = "前端精读"
//     }
//   }, [title])
// }

// function App () {
//   useDocumentTitle('个人中心')
//   return <div />
// }

// ReactDOM.render(<App />, document.querySelector("#root"))

//监听页面大小变化
function getSize () {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth
  }
}

function useWindowSize () {
  const [windowSize, setWindowSize] = useState(getSize())
  function handleResize () {
    setWindowSize(getSize())
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      console.info('取消了监听事件')
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return windowSize
}

function App () {
  let result = useWindowSize()
  return <div>
    <p>页面的高度:{result.innerHeight}</p>
    <p>页面的宽度:{result.innerWidth}</p>
    <p>浏览器的高度:{result.outerHeight}</p>
    <p>浏览器的宽度:{result.outerWidth}</p>
  </div>
}
ReactDOM.render(<App />, document.querySelector("#root"))


