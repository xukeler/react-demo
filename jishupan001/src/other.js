import React, { Component } from 'react';
class Other extends Component{
    navTab(e){
        if(e.target.classList.contains("menu-list")){
          let nav=document.getElementsByClassName('left-menu-wrapper');
          let arr=nav[0].querySelectorAll("div");
          arr.forEach((item,index)=>{
            item.classList.remove('navActive')
          })
          e.target.classList.add('navActive')
        }
      }
    render(){
        let arr=['第一页','第一页','第一页','第一页','第一页','第一页','第一页','第一页',]
        let array=arr.map((item,index)=>{
              return   <div  onClick={this.navTab} className={index===0?'navActive menu-list':'menu-list'} key={index}>{item}</div>
        })
        return (
            <div className="left-menu-wrapper">
                { array}
            </div>
        )
    }
}
class Toder extends Component{
    constructor(){
        super();
        this.contentArr=[];
        this.state={
            contentArr:[]
        }
    }
    send(){
        let textInput=document.getElementById("textInput");
        let textArea=document.getElementById("textArea");
        if(!textInput.value||!textArea.value){
            alert("请输入文字")
            return
        }
        let obj={
            name:textInput.value,
            text:textArea.value,
        }
        this.contentArr.push(obj);
        this.setState({
            contentArr:this.contentArr
        })
        localStorage.setItem("commentData",JSON.stringify(this.contentArr));
        textArea.value="";
    };
    UNSAFE_componentWillMount(){
        let _data=localStorage.getItem("commentData");
        if(_data){
            this.contentArr=JSON.parse(_data);
            this.setState({
                contentArr:this.contentArr
            })
        }
    }
    render(){
        let array=this.state.contentArr.map((item,index)=>{
            return   <div className="comment-list" key={index}>
                        <div className="user-name">{item.name}:</div>
                        <div className="user-text">{item.text}</div>
                    </div>
      })
        return (
            <div className="comment-wrapper">
                <div className="comment">
                    <div className="list-box">
                        <div className="text">用户名:</div>
                        <div className="input">
                            <input id="textInput" type="text"/>
                        </div>
                    </div>
                    <div className="list-box">
                        <div className="text">评论内容:</div>
                        <div className="input">
                            <textarea  name="" id="textArea" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div className="list-box">
                    <div className="text"></div>
                        <div className="input" style={{textAlign:"left"}}>
                            <button onClick={this.send.bind(this)}>发布</button>
                        </div>
                    </div>
                    <div className="show-content">
                        {array}
                    </div>
                </div>
            </div>
        )
    }
}
export {Other,Toder}