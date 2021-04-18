import React, { Component } from 'react';

//component class imported on the top from react module



class Counter extends Component {

    // Since counter is a controlled component so to make a single source of truth we remove state element
    // state = {  
    //     // count: 0
    //     count : this.props.counter.value
    //     // tags: ['tag1', 'tag2', 'tag3']
    // };
        // imageURL: ""
        // styles ={
        //     fontSize: 100,
        //     //react will auto converts to 10px
        //     fontWeight: "bold"
        // }
    //state is special property in react component. It has all the data that a component needs
    
    //Helper method for if condition

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }




    // renderTags(){
    //     if (this.state.tags.length === 0) 
    //     return <p>There are no tags</p>;
    
    // return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }

    // handleIncrement = product => {
    //     // window.console.log("Increment applied",this);
    //     // this.state.count++;
    //     console.log(product);
    //     this.setState({count: this.state.count+1 });

    // };
    

    //this acts like a wrapper method for handleIncrement method
    // doHandleIncrement = () => {
    //     this.handleIncrement({ id : 1 });
    // };
    


    render() { 
        // window.console.log('props',this.props);
        return (
        <React.Fragment>
            {/* {this.props.children} */}
            <h4>Counter #{this.props.counter.id}</h4>
            {/* <img src= {this.state.imageURL} alt="something"/> */}
               
            {/* <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>  */}
            <span className= {this.getBadgeClasses()}>{this.formatCounter()}</span> 
            
         
            {/* <ul>
                {/* {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} */}
{/* Here tag is a string  . if tags are objects we use key={tag.id} id property*/}
                {/* // </ul> */} 
                {/* <button onClick={this.doHandleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                 */}
                   {/* <button onClick={() => this.handleIncrement({id:1})} */}
                   <button onClick={() => this.props.onIncrement(this.props.counter)} 
                //    here onIncrement is an event
                    className="btn btn-secondary btn-sm">Increment</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                {/* {this.state.count.length === 0 && 'Please create a new tag'}
                {this.renderTags()} */}
        </React.Fragment> 
        
        );
        // We dont have conditional stmts and loops in jsx
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value===0 ? "warning" : "primary";
        return classes;
    }


    formatCounter(){
        const { count } = this.props.counter//this.state;
        return count===0 ? "Zero" : this.props.counter.value

    }
    

}
 
export default Counter;


// When you're in a react component, all methods on the base component will be scoped with the this being the current component, just like any other JavaScript "class".