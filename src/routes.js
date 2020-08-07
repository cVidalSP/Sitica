import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Support from './pages/Support';
import About from './pages/About';
import Login from './pages/Support';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="" exact component={Home}/>
                {/* <Route path="" exact component={Products}/>
                <Route path="" exact component={Support}/>
                <Route path="" exact component={About}/>
                <Route path="" exact component={Login}/> */}
            </Switch>
            
        </BrowserRouter>
    )
}


// Home Products Support About Login