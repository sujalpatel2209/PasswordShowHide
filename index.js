import React from 'react';
import ReactDOM from 'react-dom';

import InputField from './component/inputField';

export default class App extends React.Component {

    render() {

        const btnStyle = {
            width: 80,
            height:35
        }

        const fieldStyle = {
            width: 200,
            height:30
        }

        return (
            <InputField/>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
