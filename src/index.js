

/*-------------------------------------第一种函数式组件-------------------------------------*/
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

// const createApp = (props) => {
//   return (
//     <div>
//       <h1>Welcome {props.title}!!!</h1>
//     </div>
//   )
// }
// const app = createApp({
//   title: 'React'
// })
// const App = (props) => {
//   return (
//     <div>
//       <h1 title={props.title}>Welcome {props.title}!!!</h1>
//     </div>
//   )
// }
// ReactDOM.render(<App title="React" />, document.querySelector("#root"));

/*-------------------------------------第二种类组件-------------------------------------*/
// class App extends React.Component {
//   render () {
//     return (
//       <div>
//         <h1>Welcome {this.props.desc}!!!</h1>
//       </div>
//     )
//   }
// }
// // const app = new App({
// //   desc: "asd"
// // }).render()
// ReactDOM.render(<App desc="React" />, document.querySelector("#root"))


/*-------------------------------------官网时钟案例-------------------------------------*/
// 函数式声明
// function tick () {
//   const element = (
//     <div>
//       <h1>Hello React</h1>
//       <p>{new Date().toLocaleTimeString()}</p>
//     </div>
//   )
//   ReactDOM.render(element, document.querySelector("#root"))
// }
// setInterval(tick, 1000)

// function Clock (props) {
//   return (
//     <div>
//       <h1>Hello React</h1>
//       <p>{props.date.toLocaleTimeString()}</p>
//     </div>
//   )
// }
// function tick () {
//   ReactDOM.render(<Clock date={new Date()} />, document.querySelector("#root"))
// }
// setInterval(tick, 1000)

// 类声明
// class Clock extends React.Component {
//   render () {
//     return (
//       <div>
//         <h1>Welcome React</h1>
//         <p>{this.props.date.toLocaleTimeString()}</p>
//       </div>
//     )
//   }
// }
// function tick () {
//   ReactDOM.render(<Clock date={new Date()} />, document.querySelector("#root"))
// }
// setInterval(tick, 1000)

// 继续简化
// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { date: new Date() }
//   }
//   componentDidMount () {
//     this.timer = setInterval(() => {
//       this.tick()
//     }, 1000)
//   }
//   componentWillUnmount () {
//     clearInterval(this.timer)
//   }
//   tick () {
//     this.setState({
//       date: new Date()
//     })
//   }
//   render () {
//     return (
//       <div>
//         <h1>Welcome React</h1>
//         <p>{this.state.date.toLocaleTimeString()}</p>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Clock />, document.querySelector("#root"))

// 事件处理
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { isToggleOn: true }

//   }
//   handleClick () {
//     this.setState(state => {
//       return ({
//         isToggleOn: !state.isToggleOn
//       })
//     })
//   }
//   render () {
//     return (
//       <button onClick={this.handleClick.bind(this)}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     )
//   }
// }
// ReactDOM.render(<Toggle />, document.querySelector("#root"))
// this指向问题
// class LoggingButton extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick () {
//     console.log('this is:', this);
//   }
//   render () {
//     return (
//       <button onClick={this.handleClick}>
//         Click me
//       </button>
//     );
//   }
// }
// ReactDOM.render(<LoggingButton />, document.querySelector("#root"))

/*-------------------------------------条件渲染-------------------------------------*/
// class UserGreeting extends React.Component {
//   render () {
//     return (
//       <h1>你好，用户你已经登录了</h1>
//     )
//   }
// }
// class GuestGreeting extends React.Component {
//   render () {
//     return (
//       <h1>请登录</h1>
//     )
//   }
// }
// class Greeting extends React.Component {
//   render () {
//     return this.props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />
//   }
// }
// class LoginInBtn extends React.Component {
//   render () {
//     return (
//       <button onClick={this.props.onClick}>登录按钮</button>
//     )
//   }
// }
// class LoginOutBtn extends React.Component {
//   render () {
//     return (
//       <button onClick={this.props.onClick}>注销按钮</button>
//     )
//   }
// }
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { isLoggedIn: false }
//   }
//   handleInClick () {
//     this.setState({
//       isLoggedIn: true
//     })
//   }
//   handleOutClick () {
//     this.setState({
//       isLoggedIn: false
//     })
//   }
//   render () {
//     return this.state.isLoggedIn ? (
//       <div>
//         <Greeting isLoggedIn={this.state.isLoggedIn} />
//         <LoginOutBtn onClick={this.handleOutClick.bind(this)} />
//       </div>
//     ) : (
//         <div>
//           <Greeting isLoggedIn={this.state.isLoggedIn} />
//           <LoginInBtn onClick={this.handleInClick.bind(this)} />
//         </div>
//       )
//   }
// }
// ReactDOM.render(<LoginControl />, document.querySelector("#root"))

// class Warn extends React.Component {
//   render () {
//     return (
//       <div>
//         这是一条警告信息
//       </div>
//     )
//   }
// }
// class Page extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { isShow: true }
//   }
//   handleClick () {
//     this.setState(state => {
//       return {
//         isShow: !state.isShow
//       }
//     })
//   }
//   render () {
//     return (
//       <div>
//         {this.state.isShow && <Warn />}
//         <button onClick={this.handleClick.bind(this)}>{this.state.isShow ? '隐藏' : '显示'}</button>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Page />, document.querySelector("#root"))

/*-------------------------------------列表 & Key-------------------------------------*/
// const nums = [1, 2, 3, 4, 5]
// const elementLi = nums.map(item => <li>{item}</li>)
// ReactDOM.render(<ul>{elementLi}</ul>, document.querySelector("#root"))

// class NumberList extends React.Component {
//   render () {
//     const ele = this.props.nums.map((item, index) => <li key={index.toString()}>{item}</li>)
//     return (
//       <ul>{ele}</ul>
//     )
//   }
// }
// const nums = [1, 2, 3, 4, 5]
// ReactDOM.render(<NumberList nums={nums} />, document.querySelector("#root"))

// class NumberList extends React.Component {
//   render () {
//     return (
//       <ul>{this.props.nums.map((item, index) => <li key={index.toString()}>{item}</li>)}</ul>
//     )
//   }
// }
// const nums = [1, 2, 3, 4, 5]
// ReactDOM.render(<NumberList nums={nums} />, document.querySelector("#root"))

/*-------------------------------------表单-------------------------------------*/
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: '',
//       age: '',
//       address: ''
//     }
//   }
//   handleSubmit (e) {
//     alert('提交的名字: ' + JSON.stringify(this.state));
//     e.preventDefault();
//   }
//   handleChange (e) {
//     console.info(e.target.name)
//     let name = e.target.name
//     this.setState({
//       [name]: e.target.value
//     })
//   }
//   render () {
//     return (
//       <form onSubmit={this.handleSubmit.bind(this)}>
//         <label>姓名：</label>
//         <input type="text" placeholder="请输入姓名" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} />
//         <label>年龄：</label>
//         <input type="text" placeholder="请输入年龄" name="age" value={this.state.age} onChange={this.handleChange.bind(this)} />
//         <label>地址：</label>
//         <input type="text" placeholder="请输入地址" name="address" value={this.state.address} onChange={this.handleChange.bind(this)} />
//         <input type="submit" value="提交" />
//       </form>
//     )
//   }
// }
// ReactDOM.render(<NameForm />, document.querySelector("#root"))

/*-------------------------------------状态提升-------------------------------------*/
// const scaleNames = {
//   c: '温度',
//   f: '华摄氏度'
// };
// class WaterShow extends React.Component {
//   render () {
//     return (
//       this.props.celsius > 100 ? <p>水马上沸腾</p> : <p>水不会沸腾</p>
//     )
//   }
// }
// class Wenduji extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       value: ""
//     }
//   }
//   handleChange (e) {
//     this.setState({
//       value: e.target.value
//     })
//   }
//   render () {
//     return (
//       <div>
//         <legend>输入{scaleNames[this.props.scale]}:</legend>
//         <input value={this.state.value} onChange={this.handleChange.bind(this)} />
//         <WaterShow celsius={parseFloat(this.state.value)} />
//       </div>
//     )
//   }
// }
// class Calculator extends React.Component {
//   render () {
//     return (
//       <div>
//         <Wenduji scale="c" />
//         <Wenduji scale="f" />
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Calculator />, document.querySelector("#root"))

/*-------------------------------------状态提升-------------------------------------*/
// class FancyBorder extends React.Component {
//   render () {
//     console.info(this.props.children)
//     return (
//       <div className={'FancyBorder FancyBorder-' + this.props.color}>
//         {this.props.children}
//       </div>
//     )
//   }
// }
// class WelcomeDialog extends React.Component {
//   render () {
//     return (
//       <FancyBorder color="blue">
//         <h1 className="Dialog-title">
//           Welcome
//         </h1>
//         <p className="Dialog-message">
//           Thank you for visiting our spacecraft!
//         </p>
//       </FancyBorder>
//     )
//   }
// }
// ReactDOM.render(<WelcomeDialog />, document.querySelector("#root"))

// class Contacts extends React.Component {
//   render () {
//     return (
//       <div>
//         Contacts
//       </div>
//     )
//   }
// }
// class Chat extends React.Component {
//   render () {
//     return (
//       <div>
//         {this.props.name}
//       </div>
//     )
//   }
// }
// class SplitPane extends React.Component {
//   render () {
//     console.info(this.props.right)
//     return (
//       <div>
//         {this.props.left}
//         {this.props.right}
//       </div>
//     )
//   }
// }
// class App extends React.Component {
//   render () {
//     return (
//       <SplitPane left={<Contacts />} right={<Chat name="123" />} />
//     )
//   }
// }
// ReactDOM.render(<App />, document.querySelector("#root"))

/*-------------------------------------React 哲学-------------------------------------*/
// const resultList = [
//   { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
//   { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
//   { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
//   { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
//   { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
//   { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
// ];

// function outResult (arr) {
//   let result = [];
//   arr.forEach(item => {
//     result.push(item.category)
//   });
//   let res = [];
//   Array.from(new Set(result)).forEach((item, index) => {
//     res.push({ category: item, list: [] })
//     arr.forEach(item2 => {
//       if (item.indexOf(item2.category) > -1) {
//         res[index].list.push({ price: item2.price, stocked: item2.stocked, name: item2.name })
//       }
//     })
//   })
//   return res
// }

// const productList = outResult(resultList)

// class InputSearch extends React.Component {
//   handleChange (e) {
//     this.props.inputChange(e.target.value)
//   }
//   handleSearch () {
//     this.props.inputSearch()
//   }
//   handleReset () {
//     this.props.inputReset()
//   }
//   render () {
//     return (
//       <div>
//         <input type="text" placeholder="搜索" value={this.props.searchText} onChange={this.handleChange.bind(this)} />
//         <button onClick={this.handleSearch.bind(this)}>搜索</button>
//         <button onClick={this.handleReset.bind(this)}>重置</button>
//       </div>
//     )
//   }
// }

// class Product extends React.Component {
//   render () {
//     return (
//       <div>
//         {
//           this.props.productList.map((item, index) => {
//             return (
//               <div key={index.toString()}>
//                 <h3>{item.category}</h3>
//                 {
//                   item.list.map((item2, index2) => {
//                     return (
//                       <ProductItem name={item2.name} price={item2.price} stocked={item2.stocked} key={index2.toString()} />
//                     )
//                   })
//                 }
//               </div>
//             )
//           })
//         }
//       </div>
//     )
//   }
// }

// class CheckStocked extends React.Component {
//   handleChange (e) {
//     this.props.checkChange(e.target.checked)
//   }
//   render () {
//     return (
//       <div>
//         <input type="checkbox" checked={this.props.checked} onChange={this.handleChange.bind(this)} />
//         仅选择stock是ture的
//         <Product productList={this.props.productList} />
//       </div>
//     )
//   }
// }

// class ProductItem extends React.Component {
//   render () {
//     let style = {
//       color: this.props.stocked ? '' : 'red'
//     }
//     return (
//       <div>
//         <span style={style}>{this.props.name}</span>  {this.props.price}
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       searchText: '',
//       productList,
//       checked: false
//     }
//   }
//   inputChange (value) {
//     this.setState({
//       searchText: value
//     })
//   }
//   inputSearch () {
//     // console.info(this.state.searchText)
//     let searchText = this.state.searchText;
//     let result = [];
//     this.state.productList.forEach((item, index) => {
//       result.push({ category: item.category, list: [] })
//       item.list.forEach(item2 => {
//         if (item2.name.indexOf(searchText) > -1) {
//           result[index].list.push(item2)
//         }
//       })
//     })
//     this.setState({
//       productList: result
//     }, () => {
//       console.info(this.state.productList)
//     })
//   }
//   inputReset () {
//     this.setState({
//       searchText: '',
//       checked: false,
//       productList
//     })
//   }
//   checkChange (checked) {
//     this.setState({
//       checked
//     }, () => {
//       let checked = this.state.checked;
//       let result = [];
//       productList.forEach((item, index) => {
//         result.push({ category: item.category, list: [] })
//         item.list.forEach(item2 => {
//           if (item2.stocked === checked) {
//             result[index].list.push(item2)
//           }
//         })
//       })
//       this.setState({
//         productList: result
//       }, () => {
//         console.info(this.state.productList)
//       })
//     })
//   }
//   render () {
//     return (
//       <div>
//         <InputSearch searchText={this.state.searchText} inputChange={this.inputChange.bind(this)} inputSearch={this.inputSearch.bind(this)} inputReset={this.inputReset.bind(this)} />
//         <CheckStocked checked={this.state.checked} productList={this.state.productList} checkChange={this.checkChange.bind(this)} />
//       </div>
//     )
//   }
// }
// ReactDOM.render(<App />, document.querySelector("#root"))

// 高级指引
/*-------------------------------------无障碍辅助功能-------------------------------------*/
// class InputCom extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       value: '123',
//       labelText: '124'
//     }
//   }
//   handleChange () {

//   }
//   render () {
//     return (
//       // <Fragment>
//       //   <input type="text" aria-label={this.state.labelText} aria-required="true" value={this.state.value} onChange={this.handleChange.bind(this)} />
//       //   <p>q23qw21312</p>
//       // </Fragment>
//       <>
//         <input type="text" aria-label={this.state.labelText} aria-required="true" value={this.state.value} onChange={this.handleChange.bind(this)} />
//         <p>q23qw21312</p>
//       </>
//     )
//   }
// }
// ReactDOM.render(<InputCom />, document.querySelector("#root"))

// class FocusComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.textInput = React.createRef();
//   }
//   handleFocus () {
//     this.textInput.current.focus()
//   }
//   handleBlur () {
//     this.textInput.current.blur()
//   }
//   render () {
//     return (
//       <Fragment>
//         <input type="text" ref={this.textInput} />
//         <button onClick={this.handleFocus.bind(this)}>获取焦点</button>
//         <button onClick={this.handleBlur.bind(this)}>失去焦点</button>
//       </Fragment>
//     )
//   }
// }
// ReactDOM.render(<FocusComponent />, document.querySelector("#root"))

// class FocusComponent extends React.Component {
//   render () {
//     return (
//       <Fragment>
//         <input type="text" ref={this.props.inputRef} />
//         <button onClick={this.props.handleFocus.bind(this)}>获取焦点</button>
//         <button onClick={this.props.handleBlur.bind(this)}>失去焦点</button>
//       </Fragment>
//     )
//   }
// }
// class ParentFocus extends React.Component {
//   constructor(props) {
//     super(props);
//     this.textInput = React.createRef()
//   }
//   handleFocus () {
//     this.textInput.current.focus()
//   }
//   handleBlur () {
//     this.textInput.current.blur()
//   }
//   render () {
//     return (
//       <FocusComponent inputRef={this.textInput} handleFocus={this.handleFocus.bind(this)} handleBlur={this.handleBlur.bind(this)} />
//     )
//   }
// }
// ReactDOM.render(<ParentFocus />, document.querySelector("#root"))

// import './css/index.css'
// class SelectOption extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isShow: false,
//       options: [1, 2, 3]
//     }
//     this.selectRef = React.createRef();
//     this.closeOption = this.closeOption.bind(this)
//   }
//   componentDidMount () {
//     window.addEventListener('click', this.closeOption)
//   }
//   componentWillUnmount () {
//     window.removeEventListener('click', this.closeOption)
//   }
//   handleClick () {
//     this.setState((state, props) => {
//       return {
//         isShow: !state.isShow
//       }
//     })
//   }
//   closeOption (e) {
//     if (this.state.isShow && !this.selectRef.current.contains(e.target)) {
//       this.setState({
//         isShow: false
//       })
//     }
//   }
//   render () {
//     return (
//       <div ref={this.selectRef}>
//         <button onClick={this.handleClick.bind(this)}>下拉选择</button>
//         {
//           this.state.isShow && <ul className="ul">
//             {
//               this.state.options.map((item, index) => {
//                 return <li key={index.toString()}>{item}</li>
//               })
//             }
//           </ul>
//         }
//       </div>
//     )
//   }
// }
// React.createElement()
// ReactDOM.render(<SelectOption />, document.querySelector("#root"))

/*-------------------------------------Context:方便祖先组件与后代组件（中间隔了好多层组件）传值-------------------------------------*/
// const { Provider, Consumer } = React.createContext('123')
// class App extends React.Component {
//   render () {
//     let name = '123321'
//     return (
//       <Provider value={name}>
//         <p>这是父组件</p>
//         <Son />
//       </Provider>
//     )
//   }
// }

// class Son extends React.Component {
//   render () {
//     return (
//       <Fragment>
//         <Consumer>
//           {
//             name => <div>
//               <p>这是子组件，从父组件传过来的值是：{name}</p>
//               <GrandSon />
//             </div>
//           }
//         </Consumer>
//         <p>123321</p>
//       </Fragment>
//     )
//   }
// }

// class GrandSon extends React.Component {
//   render () {
//     return (
//       <Consumer>
//         {
//           name => <div>
//             <p>这是孙子组件</p>
//             <p>这是孙子组件，从祖组件传过来的值是{name}</p>
//           </div>
//         }
//       </Consumer>
//     )
//   }
// }
// ReactDOM.render(<App />, document.querySelector("#root"))

// const ThemeContext = React.createContext()

// class App extends React.Component {
//   render () {
//     return (
//       <ThemeContext.Provider value={{ background: 'green', color: "#fff" }}>
//         <Head />
//       </ThemeContext.Provider>
//     )
//   }
// }

// class Head extends React.Component {
//   render () {
//     return (
//       <Title>Hello createContext</Title>
//     )
//   }
// }

// class Title extends React.Component {
//   render () {
//     return (
//       <ThemeContext.Consumer>
//         {
//           ({ background, color }) => <h3 style={{ background: background, color: color }}>{this.props.children}</h3>
//         }
//         {/* {
//           context => <h3 style={{ background: context.background, color: context.color }}>{this.props.children}</h3>
//         } */}
//       </ThemeContext.Consumer>
//     )
//   }
// }
// ReactDOM.render(<App />, document.querySelector("#root"))

/*-------------------------------------千峰教育的ToduList-------------------------------------*/
import App from "./App"

// import * as services from "./services"
// React.Component.prototype.http = services

ReactDOM.render(<App />, document.querySelector("#root"))

