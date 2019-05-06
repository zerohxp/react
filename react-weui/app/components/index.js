import React from 'react'
import IndexSection from './index_section'

export default class Index extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.mymethod = this.mymethod.bind(this);
  }
  mymethod(e){
    console.log("子组件调用了父组件的方法，传递参数值:"+e);
  }
  componentDidMount(){
    console.log(this.refs.mybutton);
    console.log(this.refs.mysection);
    this.refs.mysection.testlog();
  }
  handleClick(e){
    console.log(e.target);
    console.dir(e.target);
    console.log("------------");
  }
  handleBlur(e){
    console.log(e.target);
    console.dir(e.target);
    console.log(e.target.value);
    console.log("------------");
  }
  handleChange(e){
    console.log(e.target);
    console.dir(e.target);
    console.log(e.target.value);
    console.log("------------");
  }
  render(){
    return (
      <div>
          <h1>这是index.js</h1>
          <button onClick={this.handleClick}>测试button点击事件</button>
          <div>
            测试input框的onblur事件
            <input type="text"  onBlur={this.handleBlur} />
          </div>
          <div>
            测试select的onchange事件
            <select onChange={this.handleChange}>
              <option value="opt1">选项1</option>
              <option value="opt2">选项2</option>
              <option value="opt3">选项3</option>
            </select>
          </div>
          <button ref="mybutton">测试button点击事件</button>
          <IndexSection  ref="mysection" test={this.mymethod}/>
      </div>
    );
  }
}
