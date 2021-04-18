import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
   
    render() { 
        //Destructuring arguments
        const {onReset, onDelete, counter, onIncrement} = this.props ; 
        return ( 
            <div>
                <button onClick= {this.props.onReset}className="btn btn-primary btn-sm m-2">Reset</button>
                {/* <Counter /> <br />
                <Counter /> <br />
                <Counter /> <br />
                <Counter /> <br /> */}
 
                {/* {this.state.counterArray.map(counter => <Counter 
                key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id}> */}
                {/* Instead of adding props and midifying counter props here we can directly use counter object itself */}

                {this.props.counterArray.map(counter => <Counter 
                key={counter.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} counter={counter}>
                    
                    
                    {/* <h4>Counter #{counter.id}</h4> */}
                    
                    </Counter>)}
                {/* By default selected={true} property is set to true so I can delete it */}
                


                {/* Instead of hard coding 4 times like this we will create an array of counter objects for the state 
                property and render then with a map method */}
            </div>
         );
    }
}
 
export default Counters;