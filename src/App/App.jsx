import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { DevicePage } from '../DevicePage';
import { MsuremntPage } from '../MsuremntPage';
import { MonthPage } from '../MonthPage';
import { DateListPage } from '../DateListPage';
import { SP4430_1 } from '../SP4430_1';
import { SerialNoPage1 } from '../SerialNoPage1';
import { SerialNoPage2 } from '../SerialNoPage2';
import { SerialNoPage3 } from '../SerialNoPage3';
import { SerialNoPage4 } from '../SerialNoPage4';



class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={DevicePage} />
                                <Route path="/login" component={LoginPage} />
								<Route path="/MsuremntPage" component={MsuremntPage} />
						        <Route path="/MonthPage" component={MonthPage} />
								 <Route path="/DateListPage" component={DateListPage} />
								 <Route path="/SP4430_1" component={SP4430_1} />
             					 <Route path="/SerialNoPage1" component={SerialNoPage1} />
								 <Route path="/SerialNoPage2" component={SerialNoPage2} />
								 <Route path="/SerialNoPage3" component={SerialNoPage3} />
								 <Route path="/SerialNoPage4" component={SerialNoPage4} />
                                <Route path="/register" component={RegisterPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };