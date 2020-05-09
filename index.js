import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Graph from './Graph';
import './style.css';

const array=[];
class App extends Component {
  constructor() {
    super();
    
    this.state = {
      name: 'React',
      xAxis: 0,
      yAxis: 0,
      axis: [],
      isStraightLine: 'Yes'
    };
  }

  handleSubmit= (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let arr = [];
    let nameNew = 'NG';
    arr.push(parseInt(this.state.xAxis));
    arr.push(parseInt(this.state.yAxis));
    this.setState({name: nameNew});
    
    this.setState(prevState => ({
  axis: [...prevState.axis, arr]
}))
array.push(arr);
this.checkSlope(arr);
  }

 checkSlope = (arr2) => {
  if(this.state.axis.length<=2) {
   this.setState({isStraightLine: 'YES'});
   return;
  }
 
  var arr = array;
   console.log('Hey There !! Fro Slope');
  console.log(arr);
  if(arr.length>=2){
  const initialSlope = (arr[0][1]-arr[2][1])/(arr[0][0]-arr[2][0]);
  const newSlope = (arr[0][1]-arr2[1])/(arr[0][0]-arr2[0]);
  console.log('Hey There !! Fro Slope 2');
  console.log(initialSlope);
  console.log('Hey There !! Fro Slope 3');
  console.log(newSlope);
  console.log('Hey There !! Fro Slope 4');
  console.log(arr[0]);
  console.log('Hey There !! Fro Slope 4');
  console.log(arr[1]);
  if(initialSlope == newSlope) {
    this.setState({isStraightLine: 'YES'});
  } else {
    this.setState({isStraightLine: 'NO'});
  }
  }
  
}



   // console.log('Hey There !! From Handle Submit');
   // console.log(this.state.axis);
    // this.setState({})
    

onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        this.setState({ [e.target.name]: e.target.value });
      }

  render() {
     const { xAxis, yAxis} = this.state;
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <form onSubmit={this.handleSubmit}>
        <input type='number' id='xAxis'name='xAxis' placeholder='Enter X axis Value' value={xAxis} onChange={this.onChange}/>
  
        <input type='number' id='yAxis' name='yAxis' placeholder='Enter Y axis Value' value={yAxis} onChange={this.onChange}/>

        <button type='submit'> Submit</button>
        </form>

        

        <Graph a={this.state.axis} />

        <h5> Is StraightLine? {this.state.isStraightLine}</h5>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
