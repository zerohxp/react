import React from 'react'
import Title from './title'
import Text from './text'

export default class Components extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    if(this.props.type=='title'){
        return (
            <Title />
        );
    } else if(this.props.type == 'text'){
        return (
          <Text />
        );
    }
  }
}