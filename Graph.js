import React, {Component} from 'react';
// import Chart from 'react-apexcharts'
import { Chart } from "react-google-charts";

var chartData = [['x', 'y']];
export default class Graph extends Component {
  
  constructor(props) {
    super(props);
 
    this.state = {
      chartData: [['x', 'y'],[1,1],[2,3]]
    }
    var chartData = [['x', 'y'],[0, 0],[1,1],[2,1]];
  }

  componentDidUpdate(prevProps, prevState) {
  // only update chart if the data has changed
  if(prevProps.a !== this.props.a) {
    // let arr = [3,5];
    chartData.push(this.props.a[this.props.a.length-1]);
    console.log('Hey There !! From cdu');
    console.log(chartData);
  }
   
  // this.getRepoDetails(this.props.userName);
}
 
  render() {
    return (
     <div className={"my-pretty-chart-container"}>
        <Chart
  width={'400px'}
  height={'400px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={chartData}
  options={{
    hAxis: {
      title: 'X Axis',
    },
    vAxis: {
      title: 'Y Axis',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>
      </div>

    )
  }
}