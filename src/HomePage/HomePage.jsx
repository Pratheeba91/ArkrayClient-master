import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import './App.css';
import csvDownload from 'json-to-csv-export'
import ReactDOM from "react-dom";
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
import Popup from "reactjs-popup";


class HomePage extends React.Component {
	
 constructor(props) {
      super(props)
      this.state = {
	  device_id : null,
      timestamp : null,
      data1 : null,
	  datavin : [],	
      options1 : [],
      options2 : [],
        students: [
			{  Device_ID   : 2,Serial_No: 'Nil', Time_stamp: 'Wasif'  , Date	 : '20-04-2020', _Time: 21 , Download_CSV_Result: 'wasif@email.com'},

         ]
      }
   }
  
  
  
  componentDidMount() {
  	      let response;

	 let url;
	 url = 'https://9nd61320t5.execute-api.ap-south-1.amazonaws.com/newurl/matc';

     fetch(url) .then((response) => {

      return response.json();
  },function(err){
    console.log(err);
  }).then((data) =>{
    const temp_data = JSON.parse(JSON.stringify(data))


    console.log(temp_data); 
	
	const count = Number(temp_data.Count) //1234
    console.log(count); 

    const data1 = []

    let i;
    for(i in temp_data.Items)
    {
      console.log(temp_data.Items[i])
	  
      data1.push(temp_data.Items[i]) 

    }
	
    this.setState({data1:data1})
	
   
    if(this.state.options1.length>0)
    {
      console.log(this.state)
    }

    
  });

  }

  renderTableHeader() {
      let header = Object.keys(this.state.students[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>

      })
   }

 renderTableData() {
		let i
 		let table;
        let buffer =[]

		    console.log(this.state.data1); 

			for(i in this.state.data1)

			{
	            table = <tr>
                <td>{this.state.data1[i].payload.Device_ID }</td>
				<td>{this.state.data1[i].payload["Serial-No"]}</td>
               <td>{this.state.data1[i]["Time Stamp"]}</td>
			   <td>{<a href={'test'}> {this.state.data1[i].payload.Date} </a>}</td>

               <td>{<a href="#"  onClick={(event => this.popup(this.state.data1[i].payload.Device_ID))}> {this.state.data1[i].payload.Time}
               </a>}</td>
                <td><button type="button" className="Button" value={i} onClick={(event => this.DeviceIdClickHandler(event))}> {'Click here to download csv'} </button>
    </td>
               
               </tr>
               buffer.push(table)
						
			} 
        
		return (
	     <div>

      {buffer}
			   
      </div>

	 )
      
	  
   }  
  DeviceIdClickHandler (i){
  event.preventDefault();
      console.log(event.target.value)


	  
      let device_id = this.state.data1[i].payload.Device_ID
      let timestamp = this.state.data1[i].payload.Time
      let enviro_data = this.state.data1[i].payload.Result

      csvDownload(enviro_data)
      
};

DeviceIdClickHandler (event){
  event.preventDefault();
      console.log(event.target.value)
      let i = event.target.value
      let device_id = this.state.data1[i].payload.Device_ID
      let timestamp = this.state.data1[i].payload.timestamp
      let enviro_data = this.state.data1[i].payload.Result
      csvDownload(enviro_data)
      
};



      render() {
	   
	
      return (
         <div>	       
			   <p>
            <Link to="/login">Logout</Link>
                </p>
            <h1 id='title'>arkray</h1>
            <table id='students'>


                  <tr><td>{this.renderTableHeader()}</td></tr>
                  <tr><td>{this.renderTableData()}</td></tr>

				  
            </table>
			 
         </div>
      )
   } 


}



function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}


const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };