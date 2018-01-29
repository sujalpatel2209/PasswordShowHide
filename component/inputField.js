import React from 'react';


class InputField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showText: 0,
            inputValue: ''
        }
    }

    render() {

        // Define password input field
        const btn = (
            <button>{this.props.showBtnName}</button>
        );

        // OnChange Function change state value

        function changeValue() {
            console.log("test");
            /*this.setValue = ({
                inputValue: val
            });*/
        }

        return (
            <div>
                {
                    this.state.showText
                        ? <input type='text' /*value={this.state.inputValue}*/ onChange={this.changeValue} name={this.props.name}
                                 style={this.props.style}/>
                        : <input type='password' /*value={this.state.inputValue}*/ onChange={this.changeValue} name={this.props.name}
                                 style={this.props.style}/>
                }
                {(this.props.showBtn) ? btn : null}
            </div>
        );
    }
}

// Set Default Props Values
InputField.defaultProps = {
    name: 'password',
    showBtn: true,
    showBtnName: 'Show',
    hideBtnName: 'Hide'
}

export default InputField;