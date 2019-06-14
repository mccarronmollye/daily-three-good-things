import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import GraditudeCreate from './graditudes/GraditudeCreate';
import GraditudeDelete from './graditudes/GraditudeDelete';
import GraditudeEdit from './graditudes/GraditudeEdit';
import GraditudeList from './graditudes/GraditudeList';
import GraditudeShow from './graditudes/GraditudeShow';
import Header from './Header';
import history from '../history';




const App = () =>{
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <h1><Header/></h1>
          <Switch>
            <Route path="/" exact component={GraditudeList}/>
            <Route path="/graditudes/new" exact component={GraditudeCreate}/>
            <Route path="/graditudes/edit/:id" exact component={GraditudeEdit}/>
            <Route path="/graditudes/delete/:id" exact component={GraditudeDelete}/>
            <Route path="/graditudes/:id" exact component={GraditudeShow}/>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
