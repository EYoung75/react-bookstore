import React from "react";
import AddButton from "./AddButton.jsx";

class Booklist extends React.Component {

    render() {

        const books = this.props.books.map(book => {
            return (
                    <li key={book.title}>
                        <h4><u>{book.title}:</u></h4>
                        <h6>{book.subtitle}</h6>
                        <p>•By {book.author} | {book.pages}pages | price-${book.price}</p>
                        <AddButton />
                    </li>

            )
        })

        return (
            <div className="container">
                <h1><u>Current Books:</u></h1>
                <ol>{books}</ol>
            </div>

        )
    }
}

export default Booklist;