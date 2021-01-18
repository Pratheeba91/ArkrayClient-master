import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import Logo from './images/logo.jpg';
import './AppSerialNoPage4.css';
import { userActions } from '../_actions';

class SerialNoPage4 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit1 = this.handleSubmit1.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.handleSubmit3 = this.handleSubmit3.bind(this);
        this.handleSubmit4 = this.handleSubmit4.bind(this);
        this.handleSubmit5 = this.handleSubmit5.bind(this);
		this.handleSubmit6 = this.handleSubmit6.bind(this);

    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit1(event) {

        this.setState({ submitted: true });
		let tets = this.props.location.search;
		let val =  tets+"&Serial="+event;
        this.props.MonthPage(val);
    }
	 handleSubmit2(event) {

        this.setState({ submitted: true });
		let tets = this.props.location.search;
		let val =  tets+"&Serial="+event;
        this.props.MonthPage(val);
    } handleSubmit3(event) {

        this.setState({ submitted: true });
		let tets = this.props.location.search;
		let val =  tets+"&Serial="+event;
        this.props.MonthPage(val);
    }
	 handleSubmit4(event) {

        this.setState({ submitted: true });
		let tets = this.props.location.search;
		let val =  tets+"&Serial="+event;
        this.props.MonthPage(val);
    }
	 handleSubmit5(event) {

        this.setState({ submitted: true });
		let tets = this.props.location.search;
		let val =  tets+"&Serial="+event;
        this.props.MonthPage(val);
    }
	 handleSubmit6(event) {

        this.setState({ submitted: true });
		let tets = this.props.location.search;
		let val =  tets+"&Serial="+event;
        this.props.MonthPage(val);
    }
    render() {
	
	
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
		
             <div align="center"  style={{color: ""}}>
			
					<form name="form" onSubmit={this.handleSubmit}>
                   
                       <div  className="form-group"> 
					   <div> <tr><td>
                       </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      	<td>					
					</td></tr> </div>
					 <div> <tr><td>
                       </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      	<td>					
					</td></tr> </div>
					 <div> <tr><td>
                       </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      	<td>					
					</td></tr> </div>
					 <div> <tr><td>
                       </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      	<td>					
					</td></tr> </div>
					 <div> <tr><td>
                       </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      	<td>					
					</td></tr> </div>
					 <div> <tr><td>
                       </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      	<td>					
					</td></tr> </div>
					 <div> <tr><td>
                       </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      	<td>					
					</td></tr> </div>
					   <tr><td>
                        <button type="submit" className="btn btn-primary"  onClick={event => this.handleSubmit1("11809034")}>11809034</button></td>&nbsp;&nbsp;&nbsp;
                      	<td>					
					<button type="submit" className="btn btn-primary" onClick={event => this.handleSubmit2("11809035")}>11809035</button></td>&nbsp;&nbsp;&nbsp;	<td>					
					<button type="submit" className="btn btn-primary"  onClick={event => this.handleSubmit3("11809036")}>11809036</button></td>&nbsp;&nbsp;&nbsp;	<td>					
					<button type="submit" className="btn btn-primary"  onClick={event => this.handleSubmit4("11809037")}>11809037</button></td>&nbsp;&nbsp;&nbsp;	<td>					
					<button type="submit" className="btn btn-primary"  onClick={event => this.handleSubmit5("11809038")}>11809038</button></td>&nbsp;&nbsp;&nbsp;	<td>					
					<button type="submit" className="btn btn-primary"  onClick={event => this.handleSubmit6("11809039")}>11809039</button></td>&nbsp;&nbsp;&nbsp;	<td>					

					</td></tr>
						  
                           </div>
						   
						   <div className="form-group">
                       
                        <Link to="/" className="btn btn-link"></Link>
                    </div>
					
					<div className="form-group">
                       
                        <Link to="/" className="btn btn-link"></Link>
                    </div>
					<div className="form-group">
                       
                        <Link to="/" className="btn btn-link"></Link>
                    </div><div className="form-group">
                       
                        <Link to="/" className="btn btn-link"></Link>
                    </div><div className="form-group">
                       
                        <Link to="/" className="btn btn-link"></Link>
                    </div><div className="form-group">
                       
                        <Link to="/" className="btn btn-link"></Link>
                    </div><div className="form-group">
                       
                        <Link to="/" className="btn btn-link"></Link>
                    </div><div className="form-group">
                       
                        <Link to="/" className="btn btn-link"></Link>
                    </div>
					
					
                </form>
				
            </div>
        );
    }
    
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    MonthPage: userActions.MonthPage
}

const connectedSerialNoPage4 = connect(mapState, actionCreators)(SerialNoPage4);
export { connectedSerialNoPage4 as SerialNoPage4 };