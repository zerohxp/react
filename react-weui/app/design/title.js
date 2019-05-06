import React from 'react'
const contentList = {
  margin:'0.8rem 1rem 0 1rem'
}

const addtitle = {
  display: 'block',
  width:'14rem',
  lineHeight: '1.6rem',
  background: '#fff',
  textAlign: 'center',
  fontSize: '0.55rem',
  borderColor: 'rgb(169, 169, 169)',
  borderWidth: '1px'
}
const textAlignRight = {
  textAlign: 'right',
  marginBottom:'0.5rem'
}
export default class Title extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div style={contentList}>
        <input style={addtitle} type="text"  placeholder="请输入标题"/>
        <div style={textAlignRight}>0/30</div>
      </div>
    );
  }
}