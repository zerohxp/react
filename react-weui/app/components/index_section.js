import React from 'react'

export default class IndexSection extends React.Component{
  constructor(props){
    super(props);
    this.state = {name:"IndexSection自身的state:name",age:"IndexSection自身的state:age"};
    this.testlog = this.testlog.bind(this);
  }
  testlog(){
    console.log("使用ref调用子组件的方法");
  }
  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.props.test("子组件挂载完成");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps,nextProps:"+nextProps.name);
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;        // 返回true/false
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render(){
    console.log(this.props);
    return (
      <section>
          <h1>这是index_section.js</h1>
          <h1>{this.props.name}</h1>
          <h1>{this.props.age}</h1>
          <h1>{this.state.name}</h1>
          <h1>{this.state.age}</h1>
      </section>
    );
  }
}
