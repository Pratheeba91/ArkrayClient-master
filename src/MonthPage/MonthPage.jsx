import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import './Appmonthpage.css';
import csvDownload from 'json-to-csv-export'
import ReactDOM from "react-dom";
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
import Popup from "reactjs-popup";
import Logo from './images/logo.jpg';


class MonthPage extends React.Component {
	
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
			{  MONTH	 : ''},

         ]
      }
	          this.handleSubmit = this.handleSubmit.bind(this);

   }
  
  
  
  componentDidMount() {
     let response;
	 let url;
	 url = 'https://t900ccu5bd.execute-api.ap-south-1.amazonaws.com/devicemonth/Device'+this.props.location.search;
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
   handleSubmit(event) {
      console.log(event)
        this.setState({ submitted: true });
		let test = this.props.location.search;
        this.props.DateListPage(test+"&YM="+event);

  }
  renderTableHeader() {
      let header = Object.keys(this.state.students[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>

      })
   }

 renderTableData() {
		let i
		let j
 		let table;
        let buffer =[]
		let buffer1 =[]
		let buffer2;

		    console.log(this.state.data1); 
			for(i in this.state.data1)
			{
			var test = this.state.data1[i].Date;
			 		var fields = test+"";
			 		var month = fields.split('-');

					if(month[1]=="01"){
                    var monthtxt = "Jan"
					}
					else if(month[1]=="02"){
					var monthtxt = "Feb"
					}
					else if(month[1]=="03"){
					var monthtxt = "Mar"
					}
					else if(month[1]=="04"){
					var monthtxt = "Apr"
					}
					else if(month[1]=="05"){
					var monthtxt = "May"
					}
					else if(month[1]=="06"){
					var monthtxt = "Jun"
					}
					else if(month[1]=="07"){
					var monthtxt = "Jul"
					}
					else if(month[1]=="08"){
					var monthtxt = "Aug"
					}
					else if(month[1]=="09"){
					var monthtxt = "Sep"
					}
					else if(month[1]=="10"){
					var monthtxt = "Oct"
					}
					else if(month[1]=="11"){
					var monthtxt = "Nov"
					}
					else if(month[1]=="12"){
					var monthtxt = "Dec"
					}
					
					buffer1.push(monthtxt+"-"+month[0]);
                     buffer2 = monthtxt+"-"+month[0];
					}
                   let uniqueChars = [...new Set(buffer1)];
				   
				   for (const [index, value] of uniqueChars.entries()) {
				  
					  table = <tr >
			   <td  ><button type="submit" className="btn btn-primary"  onClick={event => this.handleSubmit(uniqueChars[index])}> {uniqueChars[index]} </button></td>
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
			 <div align="center" className="col-md-6 col-md-offset-3" style={{color: ""}}>
             <div className="col-md-6 col-md-offset-3" style={{color: ""}}>
            <table id='students'>
              {this.renderTableHeader()}
			 <tr data={this.state.data1}/>
            <tr><td align="center">{this.renderTableData()}</td></tr>
            </table>
		
          </div>

         </div>
		                

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
    DateListPage: userActions.DateListPage
}


const connectedMonthPage = connect(mapState, actionCreators)(MonthPage);
export { connectedMonthPage as MonthPage };