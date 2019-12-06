import React, { Component } from 'react';
// import ReactDOM from 'react-dom';//操作dom
import {Other,Toder} from './other'
import './App.css';
class Header extends Component {
  navTab(e){
    if(e.target.nodeName==="LI"){
      let nav=document.getElementsByClassName('nav-list-box');
      let arr=nav[0].querySelectorAll("li");
      arr.forEach((item,index)=>{
        item.classList.remove('navActive')
      })
      e.target.classList.add('navActive')
    }
  }
  render() {
    return (
      <div title="头部标题" className="header-container" >
          <div className="logo-wrapper">
            <span className="icon icon-yinxianglogo"></span>
            <span>KloudSync</span>
          </div>
          <div className="nav-wrapper">
            <ul className="nav-list-box" onClick={this.navTab}>
                <li className="navActive">文档</li>
                <li>聊天</li>
                <li>联系人</li>
                <li>会议</li>
                <li>音想房间</li>
                <li></li>
            </ul>
          </div>
      </div>
    );
  }
}
class Body extends Component {

  render() {

    return (
      <div className="body-container">
        <Other></Other>
        <Toder></Toder>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
      <Body der={['123']} fun={()=>{console.log("传了个函数")}} content={{name:"name"}} title="props标题"></Body>
      </div>
    );
  }
}



export default App;
