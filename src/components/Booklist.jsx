import React from "react";

class Booklist extends React.Component {

    render() {

        var books = this.props.books.map( book => {
            return (
                <div>
                    {book.title}
                </div>
            )
        })
            
        return (
            <div className="container">
                {books}
            </div>

        )
    }
}

export default Booklist;