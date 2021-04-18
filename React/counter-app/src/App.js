import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = { 
    counterArray : [
{ id:1 , value :5}, 
{ id:2 , value :0},
{ id:3 , value :0},
{ id:4 , value :0} 
] 
// counter objects identified by the unique id and  a value property 
// which has the initial value for the counter object
 }

 handleReset = () =>{
     const counterArray = this.state.counterArray.filter(c => {c.value=0;
        return c;
     });
     this.setState({counterArray});
 };
 handleIncrement = counter =>{
    //  console.log(counter);
    const counterArray = [...this.state.counterArray];
    // ... is a spread operator to create a anew array 
    const index = counterArray.indexOf(counter);
    counterArray[index] = {...counter};
    //cloning a new counter object
    counterArray[index].value++;
    this.setState({counterArray});
 };

 handleDelete = (counterId) => {
    //  window.console.log("Event Handled",counterId)
    const counterArray = this.state.counterArray.filter( c => c.id!==counterId)
    this.setState({ counterArray });
    // this.setState({counters array : counter const})...here if key and value are same u can just leave as counters
 };
  render() { 
    return ( 
      <React.Fragment>
      <NavBar totalCounters = {this.state.counterArray.filter(c => c.value>0).length}/>
      <main className="container">
        {/* Now, raising events */}

        <Counters
        // Declaring the list of counters as counterArray
        counterArray={this.state.counterArray}
        onReset={this.handleReset} 
        onIncrement={this.handleIncrement} 
        onDelete={this.handleDelete} />

      </main>
      </React.Fragment>
     );
  }
}
 
export default App;