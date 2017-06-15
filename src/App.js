import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import PicturesList from './pages/PicturesList';
import FullSizeScreen from './pages/FullSizeScreen';



class App extends React.Component {
    static propTypes = {};


    render() {
      return  <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={PicturesList}/>
                    <Route path="/:id" component={FullSizeScreen}/>
                </Switch>
            </div>
        </Router>

    }
}



export default App;