import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './component/create.component';
import Edit from './component/edit.component';
import Index from './component/index.component';
import Approve from './component/approve.component';
import LecturesCreate from './component/lecturescreate.component';
import LecturesEdit from './component/editLectures';
import LectureIndex from './component/lectureIndex';


class App extends Component {
  render() {
    return (
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to={'/'} className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/create'} className="nav-link">Create</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/index'} className="nav-link">Index</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/approve'} className="nav-link">Approve</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/lectures'} className="nav-link">CreateLectures</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/lectureindex'} className="nav-link">Lectures</Link>
                  </li>
                </ul>
              </div>
            </nav> <br/>
            <h2>Welcome to React CRUD Tutorial</h2> <br/>
            <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
              <Route path='/approve' component={ Approve } />
              <Route exact path='/lectures' component={ LecturesCreate } />
              <Route path='/lectureedit/:id' component={ LecturesEdit } />
              <Route path='/lectureindex' component={ LectureIndex } />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;