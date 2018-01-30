import React from 'react';


class InputField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showText: 0,
            inputValue: ''
        }
    }

    changeField() {
        this.state.showText
            ? this.setState({
                showText: 0
            })
            : this.setState({
                showText: 1
            })
    }

    render() {

        const btn = (
            <button
                style={this.props.buttonStyle}
                onClick={this.changeField.bind(this)}>{(this.state.showText)
                ? this.props.hideBtnName
                : this.props.showBtnName}
            </button>
        );

        return (
            <div>
                {
                    this.state.showText
                        ? <input
                            id='passField'
                            type='text'
                            name={this.props.name}
                            style={this.props.fieldStyle}/>
                        : <input
                            type='password'
                            name={this.props.name}
                            style={this.props.fieldStyle}/>
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
    hideBtnName: 'Hide',
    buttonStyle: null,
    fieldStyle: null
}

export default InputField;