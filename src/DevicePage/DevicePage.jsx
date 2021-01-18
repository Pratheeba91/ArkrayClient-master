import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import Logo from './images/logo.jpg';
import './Appdevice.css';

import { userActions } from '../_actions';

import { MsuremntPage } from '../MsuremntPage';
class DevicePage extends React.Component {
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
        this.handleSubmit = this.handleSubmit.bind(this);
		  // this.shoot = this.shoot.bind(this);
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

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
            this.props.device('23842347');
        
    }
  
    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
		
            <div align="center" className="col-md-6 col-md-offset-3" style={{color: ""}}>
			<img class="students" src={Logo} alt="Logo" />

                <form name="form" >
				
                   
                       <div className="form-group"> 
					   <div> <tr><td>
                       </td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      	<td>					
					</td></tr> </div>
					
			 <label class="c" htmlFor="username">Device Page</label>

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
                        <button className="btn btn-primary" >SPOTCHEM</button></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      	<td>					
					<button className="btn btn-primary"  onClick={this.handleSubmit}>SPD-DEVICE</button></td></tr>
						  
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
    device: userActions.device
}

const connectedDevicePage = connect(mapState, actionCreators)(DevicePage);
export { connectedDevicePage as DevicePage };