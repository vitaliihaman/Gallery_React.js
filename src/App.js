import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import PicturesList from './pages/PicturesList';
import Picture from './pages/Picture';

class App extends React.Component {
    static propTypes = {};


    render() {
      return  <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={PicturesList}/>
                    <Route path="/:id" component={Picture}/>
                </Switch>
            </div>
        </Router>

    }
}



export default App;