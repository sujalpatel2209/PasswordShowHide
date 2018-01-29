import React from 'react';
import ReactDOM from 'react-dom';

import InputField from './component/inputField';

export default class App extends React.Component {

    render() {
        return (
            <InputField
                name='password'
            />
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
