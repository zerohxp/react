import React from 'react'
const contentList = {
  margin:'0.8rem 1rem 0 1rem'
}

const addContent = {
  display: 'block',
  width:'13.5rem',
  padding:'0.3rem',
  height: '5rem',
  background: '#fff',
  textAlign: 'center',
  fontSize: '0.55rem'
}
const textAlignRight = {
  textAlign: 'right',
  marginBottom:'0.5rem'
}
export default class Text extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div style={contentList}>
        <textarea style={addContent} rows="3" cols="20"  placeholder="请输入文本内容"></textarea>
        <div style={textAlignRight}>0/200</div>
      </div>
    );
  }
}