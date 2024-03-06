import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';

function navigationBar() {
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `newPath`; 
        navigate(path);
    }

    return (
        <nav>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">Sponsors</Link>
            </li>
            <li>
                <Link to="/">Login</Link>
            </li>
        </nav>
    );
}

export default navigationBar;