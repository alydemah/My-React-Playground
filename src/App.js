import React from 'react';

// Class Component
// Can have state
class App extends React.Component {
  render(){
    //let title = this.props.title;
    return (
           <h1>{this.props.title}</h1>

           // OR
           // <h1>{title}</h1>
    )
}
}
// This is Statless function Component
// Can't have state
// const App = () => <h1>Hello World</h1>


App.defaultProps = {
 title: "This is default value and it can be override if we passed value to title"
 
}


export default App


/*
Different ways to Create React Components and when to use each.




Container Components


Presentation Components



*/