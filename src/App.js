import React from 'react';

class App extends React.Component {
  constructor(){
  super();
  this.state = {
    title: "this is state value"
  }
  }

  update(event){
    this.setState({title: event.target.value})
  }

  render(){
    return (
      <div>
            <h1>{this.state.title}</h1>
            <Button update={this.update.bind(this)}>
      </div>     
    )
}
}



const Button = (props) => 
<input type="text" onChange={props.update}/>




export default App

