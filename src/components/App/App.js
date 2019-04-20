import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch } from 'react-router-dom';

const App = ({ routes }) => {
    return (
        <div className="container my-5"> 
            <Switch>
                {renderRoutes(routes)}
            </Switch>
        </div>
    );
};

export default App;