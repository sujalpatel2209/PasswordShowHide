import React from 'react';


class InputField extends React.Component{

    render() {

        const name = (this.prope.name) ? this.props.name : "password";


        const btn = (
            <button>Show</button>
        );

        console.log(this.props.showButton)

        return (
            <div>
                <input type='text' name={this.name} style={this.props.style} />
                {(this.props.showButton) ? btn : null}
            </div>
        );
    }

}

export default InputField;