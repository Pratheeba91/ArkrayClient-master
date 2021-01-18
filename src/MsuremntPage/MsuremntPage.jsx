import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import Logo from './images/logo.jpg';
import './Appmeasurement.css';
import { userActions } from '../_actions';

class MsuremntPage extends React.Component {
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
      console.log(event)

        this.setState({ submitted: true });
            this.props.SerialNoPage1(event);
    }
	
	 handleSubmit2(event) {

        this.setState({ submitted: true });
            this.props.SerialNoPage2(event);
    }
	
	 handleSubmit3(event) {

        this.setState({ submitted: true });
            this.props.SerialNoPage3(event);
    }
	
	 handleSubmit4(event) {

        this.setState({ submitted: true });
            this.props.SerialNoPage4(event);
    }

    render() {
	
	
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
		
             <div align="center" className="col-md-6 col-md-offset-3" style={{color: ""}}>
			
							<img  class="topcornerdevice" src={Logo} alt="Logo" />
					<form name="form" onSubmit={this.handleSubmit}>
                   
                       <div  className="form-group"> 
					   <div> <tr><td>
                       </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      	<td>					
					</td></tr> </div>
					 <label class="c" htmlFor="username">Device List</label>
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
                        </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      	<td>					
					<button className="btn btn-primary"   onClick={event => this.handleSubmit3('D-02')}>D-02</button></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	<td>					
					<button className="btn btn-primary"   onClick={event => this.handleSubmit4('D-03')}>D-03</button></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	<td>					
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
    SerialNoPage1: userActions.SerialNoPage1,
	 SerialNoPage2: userActions.SerialNoPage2,
	  SerialNoPage3: userActions.SerialNoPage3,
	   SerialNoPage4: userActions.SerialNoPage4
}

const connectedMsuremntPage = connect(mapState, actionCreators)(MsuremntPage);
export { connectedMsuremntPage as MsuremntPage };