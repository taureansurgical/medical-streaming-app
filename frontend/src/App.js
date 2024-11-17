import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LiveStreams from './components/LiveStreams';
import Videos from './components/Videos';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';
import './styles/App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/live-streams" component={LiveStreams} />
            <Route path="/videos" component={Videos} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;