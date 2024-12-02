import  React, {Component} from 'react';

class MyClassComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            message: 'Hello, Welcome to React Class Component!',
            counter:0,
        };
    }

    incrementCounter = () =>{
        this.setState((prevState)=>({
            counter:prevState.counter +1,
        }));
    };

    render(){
        return(
            <div style={{ textAlign: 'center', background:'yellow', marginTop:'50px'}}>
                <h1>{this.state.message}</h1>
                <p>counter:{this.state.counter}</p>
                <button onClick={this.incrementCounter} style={{padding:'10px 20px', fontSize:'16px'}}>Increment counter</button>
            </div>
        );
    }
}

export default MyClassComponent;