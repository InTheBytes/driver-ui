import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {
    NavigationBar,
    SideBar,
    Home,
    Page404,
    Login,
    Logout,
    Register,
    ConfirmEmail,
    Search,
    UserType,
    DriverLogin,
    RegisterDriver,
    DriverHome,
    DeliveryHub
} from './components';

import './App.css';


function App(props) {

    const [sideDrawer, setSideDrawer] = React.useState(false);
    const [auth, setAuth] = React.useState("");

    return (
        <BrowserRouter>
            <div className="App">
                <NavigationBar setDrawer={setSideDrawer} auth={auth} />
                <SideBar drawer={sideDrawer} setDrawer={setSideDrawer} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" render={() => (
                        <Login setAuth={setAuth} />
                    )} />
                    <Route exact path="/driverlogin" render={() => (
                        <DriverLogin setAuth={setAuth} />
                    )} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/registerdriver" component={RegisterDriver} />
                    <Route exact path="/usertype" component={UserType} />
                    <Route exact path="/driverhome" component={DriverHome} />
                    <Route exact path="/deliveryhub" component={DeliveryHub} />
                    <Route exact path="/logout" render={() => (
                        <Logout setAuth={setAuth} />
                    )} />
                    <Route exact path="/success" component={ConfirmEmail} />
                    <Route exact path="/search" component={Search} />
                    <Route component={Page404} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
