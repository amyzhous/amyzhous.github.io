import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(

    <App/>, document.getElementById("root")
);

// ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById("root"));


