import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/signup">
                    <Auth mode="signup" />
                </Route>
                <Route path="/login">
                    <Auth mode="login" />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
