'use strict';

import React from 'react';
import ReactDom, {render} from 'react-dom';
import App from './App';

if(document){
    ReactDom.render(
        <App/>,
        document.getElementById('root')
    );
}


