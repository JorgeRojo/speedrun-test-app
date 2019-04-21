import React from 'react';
import { Link } from 'react-router-dom';

const Alert = ({ children }) => (<>
    <p className="alert alert-danger"> 
        {children} 
        <Link to="/" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </Link>
    </p>
</>);

export default Alert;


