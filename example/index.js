import React from 'react';
import ReactDOM from 'react-dom';

import PasswordField from '../component/passwordField';

export default class App extends React.Component {

    render() {
        return (
            <PasswordField/>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
