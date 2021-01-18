import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
	device,
	MonthPage,
	DateListPage,
    logout,
    register,
	SP4430_1,
	SerialNoPage1,
	SerialNoPage2,
	SerialNoPage3,
	SerialNoPage4,
    getAll, 
    delete: _delete
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}


function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}
function device(user) {
    return dispatch => {
        dispatch(request(user));
         
                    dispatch(success());
                    history.push('/MsuremntPage');
                    //dispatch(alertActions.success('Registration successful'));
               
           
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function SerialNoPage1(user) {
    return dispatch => {
        dispatch(request(user));
         
                    dispatch(success());
                    history.push('/SerialNoPage1/?DeviceID='+user);
                    //dispatch(alertActions.success('Registration successful'));
           
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function SerialNoPage2(user) {
    return dispatch => {
        dispatch(request(user));
         
                    dispatch(success());
                    history.push('/SerialNoPage2/?DeviceID='+user);
                    //dispatch(alertActions.success('Registration successful'));
               
           
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function SerialNoPage3(user) {
    return dispatch => {
        dispatch(request(user));
         
                    dispatch(success());
                    history.push('/SerialNoPage3/?DeviceID='+user);
                    //dispatch(alertActions.success('Registration successful'));
               
           
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function SerialNoPage4(user) {
    return dispatch => {
        dispatch(request(user));
         
                    dispatch(success());
                    history.push('/SerialNoPage4/?DeviceID='+user);
                    //dispatch(alertActions.success('Registration successful'));
               
           
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function MonthPage(user) {
    return dispatch => {
        dispatch(request(user));
         
                    dispatch(success());
                    history.push('/MonthPage/'+user);
                    //dispatch(alertActions.success('Registration successful'));
               
           
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}


function SP4430_1(user) {
    return dispatch => {
        dispatch(request(user));
         
                    dispatch(success());
                    history.push('/SP4430_1/'+user);
                    //dispatch(alertActions.success('Registration successful'));
               
           
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}


function DateListPage(user) {
    return dispatch => {
        dispatch(request(user));
         
                    dispatch(success());
                    history.push('/DateListPage/'+user);
                    //dispatch(alertActions.success('Registration successful'));
               
           
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}


function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}