import React from 'react';
import {Line,Bar} from 'react-chartjs-2';

class App extends React.Component {

    data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: ''
        }
      ]
    };
    state = {
      data: '',
      dl:[]
   }
    componentDidMount(){
       const dataList= [];
       //const dataList= data.map (nextData)
      
       fetch('http://192.168.8.100:3001/app', {
            method: 'GET'
         })
         .then((response) => response.json())
         .then((responseJson) => {
            //console.log(responseJson);
            this.setState({
               
               dataList: responseJson
            })
         })
         .catch((error) => {
            console.error(error);
         });
   
         console.log(dataList);
         this.data.datasets.data=dataList;
    }

     BarGraph=(props)=>{
      // const dataList= [];
      const dataList= [];
      
      fetch('http://192.168.8.100:3001/app', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         //console.log(responseJson);
         this.setState({
            
            data: responseJson
         })
         // console.log(responseJson[0].s1);
         dataList.push(parseInt(responseJson[props.id].s1));
         dataList.push(parseInt(responseJson[props.id].s2));
         dataList.push(parseInt(responseJson[props.id].s3));
         dataList.push(parseInt(responseJson[props.id].s4));
         dataList.push(parseInt(responseJson[props.id].s5));
         this.setState({
            
            dl: dataList
         })
      })
      .catch((error) => {
         console.error(error);
      });
      
      // this.state.data.map(item => (
         // console.log(this.state.data[0].appName);
      //)
         
         // );
         console.log(this.state.dl);

      const  data = {
          labels: ['1 star', '2 Star', '3 Star', '4 Star', '5 Star'],
          datasets: [
            {
              label: 'My First dataset',
              fill: false,
              lineTension: 1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.state.dl
            }
          ]
        };
        return (
         <div>
         
      <div>
      
      
      


      <Bar
      id={0}
        data={data}
        height={150}
        options={{
          maintainAspectRatio: false
        }}
     /> 
    </div>
     </div>
      );

    }

   


   render() {

     

      return ( 
         
         <div>
            
            <table  id="items" >
    <thead>
    <tr>
      <th>Downloads</th>
      <td>{0}</td>
    </tr>
    <tr>
      
      <th>Earnings</th>
      <td>Earnings</td>
    </tr>
    </thead>
    </table>
      <this.BarGraph id={0}/>
     </div>
   
      );
   }
}

export default App;