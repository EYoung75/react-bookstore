import React from "react";

class AddButton extends React.Component {
    render() {
        return (
            <div className="container books">
                <button onClick={this.props.add} title={this.props.title}>Add</button>
            </div>
        )
    }
}

export default AddButton;