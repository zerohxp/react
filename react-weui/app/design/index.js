import React from 'react'
import Components from './components'
const btnList = {
  justifyContent:'space-around',
  paddingBottom: '4rem',
  marginTop: '1.6rem',
  position: 'relative',
  display: 'flex'
}
const btnContent = {
  display: 'block',
  width:'4rem',
  height: '1.28rem',
  lineHeight: '1.28rem',
  textAlign: 'center',
  borderRadius: '0.2rem',
  fontSize: '0.75rem',
  border:'0.03rem solid #5077aa',
  background: '#fff',
  color: '#5077aa'
}
const iconClose = {
  position: 'absolute',
  right: '0.8rem',
  top:'-0.3rem',
  width:'0.72rem',
  height:'0.72rem',
  zIndex: '99'
}
const componentBlock = {
  position: 'relative'
}
export default class Design extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      componentList: []
    }
  }
  addTitle(){
    console.log('addTitle');
    var componentList = this.state.componentList;
    componentList.push({type:'title'})
    this.setState({componentList})
  }
  addText(){
    console.log('addText');
    var componentList = this.state.componentList;
    componentList.push({type:'text'})
    this.setState({componentList})
  }
  delComponent(index){
    var componentList = this.state.componentList;
    componentList.splice(index, 1);
    this.setState({componentList})
  }
  render(){
    return (
      <div>
        <div>
        {this.state.componentList.map((obj,index)=>
          <div style={componentBlock} key={index}>
            <img  style={iconClose} onClick={this.delComponent.bind(this,index)} src='https://s.dodoca.com/aicard_weapp/images/user/icon-9.png'/> 
            <Components  type={obj.type} />
          </div>
        )}
        </div>
        <div style={btnList} id='btnContrl'>
          <div style={btnContent} onClick={this.addTitle.bind(this)}>添加标题</div>
          <div style={btnContent} onClick={this.addText.bind(this)}>添加文本</div>
        </div>
      </div>
    );
  }
}