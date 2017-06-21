import React from 'react';

class Dropdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isOpened: false };
    }

    toggleState() {
        this.setState({ isOpened: !this.state.isOpened });
    }

    render() {
        console.log('isOpened', this.state.isOpened);

        let dropdownText;
        if (this.state.isOpened) {
            dropdownText = <div>Here is dropdown text</div>;
        }
        return <div onClick={this.toggleState.bind(this)}>
            It`s dropdown
            {dropdownText}
        </div>;
    }
}

export default Dropdown;